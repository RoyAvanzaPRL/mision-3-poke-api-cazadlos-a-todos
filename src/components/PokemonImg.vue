<template>
  <img
    :src="imageSrc"
    :alt="pokemon.name"
    class="w-48 h-48"
    @error="onImageError"
  />
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { Pokemon } from "../types";

const props = defineProps<{
  pokemon: Pokemon;
}>();

const fallbackImage = "/pokemon-placeholder.png";

const imageSrc = computed(
  () =>
    props.pokemon.sprites.other["official-artwork"].front_default ??
    fallbackImage
);

function onImageError(event: Event) {
  (event.target as HTMLImageElement).src = fallbackImage;
}
</script>