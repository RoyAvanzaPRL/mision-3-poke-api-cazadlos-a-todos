<template>
  <main class="flex flex-col items-center min-h-screen pt-10 gap-6">
    <h1 class="text-3xl font-bold text-blue-600">
      Pokemon API
    </h1>
    <formTrainer />
      <!-- : is shorthand for v-bind and it sends data from parent to child through props -->    <randomButton 
      :disabled = "loading"
      @random-poke="getRandomPokemon"
    />
    <p v-if="loading">
      Cargando...
    </p>

    <cardPokemon 
      v-else
      :pokemon="pokemon" 
    />
    <p class="text-red-500 text-sm mt-1">
      {{ errorMessage }}
    </p>
  </main>
</template>

<script setup lang="ts">
import randomButton from './components/randomButton.vue';
import cardPokemon from './components/cardPokemon.vue';
import formTrainer from './components/formTrainer.vue';

import {usePokemon} from './composables/usePokemon.ts';

const {
  pokemon,
  errorMessage,
  loading,
  getRandomPokemon
} = usePokemon();
</script>

