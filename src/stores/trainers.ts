import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Pokemon, Trainer } from '../types';

const key = 'trainers';

function loadTrainers(): Trainer[] {
  try {
    const raw = localStorage.getItem(key);
    if (raw) {
      return JSON.parse(raw);
  } else {
      return [];
  }
  } catch (error) {
    console.error('Error carregant els trainers:', error);
    localStorage.removeItem(key);
    return [];
  }
}

function saveTrainers(trainers: Trainer[]) {
  localStorage.setItem(key, JSON.stringify(trainers));
}

export const useTrainerStore = defineStore('trainers', () => {
  const trainers = ref<Trainer[]>(loadTrainers());

  function createTrainer(
    DNI: string,
    name: string,
    surnames: string,
    email: string,
    pokemonAssigned: Pokemon | null = null
  ): boolean {
    const exists = trainers.value.some((trainer) => trainer.DNI === DNI);

    if (exists) {
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
    saveTrainers(trainers.value);

    return true
  }

  function updateTrainer(
    DNI: string,
    updates: Partial<Omit<Trainer, 'DNI'>>
  ): boolean {
    const trainer = trainers.value.find((item) => item.DNI === DNI);

    if (!trainer) {
      return false;
    }

    Object.assign(trainer, updates);
    saveTrainers(trainers.value);

    return true;
  }

  function assignPokemonToTrainer(DNI: string, pokemonAssigned: Pokemon | null): boolean {
    const trainer = trainers.value.find((item) => item.DNI === DNI);

    if (!trainer) {
      return false;
    }

    trainer.pokemonAssigned = pokemonAssigned;
    saveTrainers(trainers.value);

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

    saveTrainers(trainers.value);

    return true;
  }

  return {
    trainers,
    createTrainer,
    updateTrainer,
    deleteTrainer,
    assignPokemonToTrainer
  };
});