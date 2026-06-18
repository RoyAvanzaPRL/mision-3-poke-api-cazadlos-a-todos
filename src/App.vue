<template>
  <body class="flex flex-col items-center justify-center min-h-screen gap-6">
    <h1 class="text-3xl font-bold text-blue-600">
      Pokemon API
    </h1>
    <randomButton @random-poke="getRandomPokemon"/>
    <cardPokemon :pokemon= "pokemon" />
    <p class="text-red-500 text-sm mt-1">
      {{ errorMessage }}
    </p>
  </body>
</template>

<script setup lang="ts">
import randomButton from './components/randomButton.vue';
import cardPokemon from './components/cardPokemon.vue';

import {usePokemon} from './composables/usePokemon.ts';

const {
  pokemon,
  errorMessage,
  // getPokemon,
  // randomPokemonId,
  getRandomPokemon
} = usePokemon();
</script>

