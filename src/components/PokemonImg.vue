<template>
    <img
        :src="pokemon.sprites.other['official-artwork'].front_default"
        class="w-48 h-48"
    />
</template>

<script setup lang="ts">
    import type { Pokemon } from "../types";

    defineProps<{
        pokemon: Pokemon;
    }>();
</script>
