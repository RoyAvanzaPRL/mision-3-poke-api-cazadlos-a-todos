<template>
  <main class="flex flex-col items-center min-h-screen pt-10 gap-6">
    <h1 class="text-3xl font-bold text-blue-600">
      Pokemon API
    </h1>
    <FormTrainer />
      <!-- : is shorthand for v-bind and it sends data from parent to child through props -->
    <RandomButton 
      :disabled = "loading"
      @random-poke="getRandomPokemon"
    />
    <Loading 
      v-if="loading"
    />
    <CardPokemon 
      v-else-if="pokemon"
      :pokemon="pokemon" 
    />
    <ErrorMessage 
      :error-message="errorMessage"
    />
  </main>
</template>

<script setup lang="ts">
  import RandomButton from './components/RandomButton.vue';
  import CardPokemon from './components/CardPokemon.vue';
  import FormTrainer from './components/FormTrainer.vue';

  import {usePokemon} from './composables/usePokemon.ts';
  import Loading from './components/Loading.vue';
  import ErrorMessage from './components/ErrorMessage.vue';

  const {
    pokemon,
    errorMessage,
    loading,
    getRandomPokemon
  } = usePokemon();
</script>

