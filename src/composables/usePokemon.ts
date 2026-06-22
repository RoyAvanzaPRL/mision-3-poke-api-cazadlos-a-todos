import { ref } from "vue";
import axios from "axios";
import type { Pokemon } from '../types.ts';


const API_URL = import.meta.env.VITE_POKE_API_URL;

export function usePokemon() {

  // This variable can be a Pokemon object or null. By default, it is null.
  const pokemon = ref<Pokemon | null>(null);

  const errorMessage = ref("");
  const loading = ref(false);

  function handleError(error: unknown) {
    if (!axios.isAxiosError(error)) {
      errorMessage.value = "Ha ocurrido un error inesperado";
      return;
    }

    switch (error.response?.status) {
      case 404:
        errorMessage.value = "No se ha encontrado el Pokémon";
        break;
      case 500:
        errorMessage.value = "Error del servidor, inténtalo más tarde";
        break;
      default:
        errorMessage.value = "Error al obtener los datos";
    }
  }

  async function getPokemon(id: number) {
    try {
      loading.value = true
      errorMessage.value = "";

      const response = await axios.get(`${API_URL}/pokemon/${id}`);

      pokemon.value = response.data
    } catch (error) {
      handleError(error);
      console.error(error);

      // finally always runs, it doesn't matter if the request succeeded or failed
    } finally {
      loading.value = false;
    }
  }

  function randomPokemonId(): number {
    return Math.floor(Math.random() * 1025) + 1;
  }

  async function getRandomPokemon() {
    const id = randomPokemonId();
    await getPokemon(id);
  }

  return {
    pokemon,
    errorMessage,
    loading,
    getRandomPokemon
  };
}