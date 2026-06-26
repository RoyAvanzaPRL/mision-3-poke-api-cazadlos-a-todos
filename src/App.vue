<template>
  <main class="min-h-screen px-6 py-8">
    <h1 class="text-3xl font-bold text-blue-600 mb-10 text-center">
      Pokemon API
    </h1>

    <section class="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
      <div class="flex justify-center items-start pr-6">
        <div class="w-full max-w-xl">
          <FormTrainer
            :pokemon="pokemon"
            :loading="loading"
            :disabled="loading"
            @random-poke="getRandomPokemon"
            @submitted="clearPokemon"
          />

          <div class="mt-4 flex justify-center">
            <Loading v-if="loading" message="Cargando Pokémon..."/>
            <CardPokemon v-else-if="pokemon" :pokemon="pokemon" />
          </div>
          <ErrorMessage :error-message="errorMessage" />
        </div>
      </div>

      <div class="flex justify-center items-start border-l border-gray-300 pl-6">
        <div class="w-full max-w-xl">
          <TrainerList @assign-request="handleAssignRequest" />        
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
  import CardPokemon from './components/CardPokemon.vue';
  import FormTrainer from './components/FormTrainer.vue';
  import TrainerList from './components/TrainerList.vue';

  import {usePokemon} from './composables/usePokemon.ts';
  import Loading from './components/Loading.vue';
  import ErrorMessage from './components/ErrorMessage.vue';

  const {
    pokemon,
    errorMessage,
    loading,
    getRandomPokemon,
    clearPokemon
  } = usePokemon();

  import { useTrainerStore } from './stores/trainers';

  const trainerStore = useTrainerStore();

  async function handleAssignRequest(DNI: string) {
    if (loading.value) return;

    try {
      await getRandomPokemon();

      if (!pokemon.value) return;

      trainerStore.assignPokemonToTrainer(DNI, pokemon.value);
      clearPokemon();
    } catch (error) {
      console.error("Error assignant el Pokémon:", error);
    }
  }
</script>

