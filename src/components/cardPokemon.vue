<template>
    <div v-if="pokemon">
        <h2>{{ pokemon.name }}</h2>

        <img
            :src="pokemon.sprites.other['official-artwork'].front_default"
            class="w-48 h-48"
        />
        <ul class="min-h-[3rem]">
            <!-- :key provides a unique identifier for each item in the array -->
            <li
                v-for="item in pokemon.types"
                :key="item.type.name"
            >
                {{ item.type.name }}
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
    import type { Pokemon } from "../types";

    defineProps<{
    pokemon: Pokemon | null;
    }>();
</script>