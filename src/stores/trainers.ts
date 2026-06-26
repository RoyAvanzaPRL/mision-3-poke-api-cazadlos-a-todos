import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Pokemon, Trainer } from '../types';

const key = 'trainers';
const errorMessage = ref("");

function loadTrainers(): Trainer[] {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : [];
  } catch {
    errorMessage.value =
      "No s'han pogut carregar els entrenadors. S'han restablert les dades.";

    localStorage.removeItem(key);

    return [];
  }
}

export const useTrainerStore = defineStore('trainers', () => {
  const trainers = ref<Trainer[]>(loadTrainers());

  function saveTrainers() {
    localStorage.setItem(key, JSON.stringify(trainers.value));
  }

  function findTrainer(DNI: string): Trainer | undefined {
    return trainers.value.find((trainer) => trainer.DNI === DNI);
  }

  function createTrainer(
    DNI: string,
    name: string,
    surnames: string,
    email: string,
    pokemonAssigned: Pokemon | null = null
  ): boolean {
    errorMessage.value = "";

    const exists = findTrainer(DNI);

    if (exists) {
      errorMessage.value = "Ja existeix un entrenador amb aquest DNI.";
      return false;
    }

    const newTrainer: Trainer = {
      DNI,
      name,
      surnames,
      email,
      pokemonAssigned,
    };

    trainers.value.push(newTrainer);
    saveTrainers();

    return true;
  }

  function assignPokemonToTrainer(
    DNI: string,
    pokemonAssigned: Pokemon | null
  ): boolean {
    const trainer = findTrainer(DNI);

    if (!trainer) {
      return false;
    }

    trainer.pokemonAssigned = pokemonAssigned;
    saveTrainers();

    return true;
  }

  function deleteTrainer(DNI: string): boolean {
    const initialLength = trainers.value.length;

    trainers.value = trainers.value.filter(
      (item) => item.DNI !== DNI
    );

    if (trainers.value.length === initialLength) {
      return false;
    }

    saveTrainers();

    return true;
  }

  return {
    trainers,
    createTrainer,
    deleteTrainer,
    assignPokemonToTrainer,
    errorMessage,
  };
});