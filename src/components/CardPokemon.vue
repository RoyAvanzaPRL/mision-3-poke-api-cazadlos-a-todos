<template>
    <div v-if="pokemon">
        <PokemonImg :pokemon="pokemon"/>
        <PokemonTypes :types="pokemon.types"/>
    </div>
</template>

<script setup lang="ts">
    import type { Pokemon } from "../types";
    import PokemonImg from "./PokemonImg.vue";
    import PokemonTypes from "./PokemonTypes.vue";

    defineProps<{
        pokemon: Pokemon | null;
    }>();
</script>