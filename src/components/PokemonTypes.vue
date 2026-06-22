<template>
    <ul class="min-h-[3rem]">
        <!-- :key provides a unique identifier for each item in the array -->
        <li
            v-for="item in types"
            :key="item.type.name"
        >
            {{ item.type.name }}
        </li>
    </ul>
</template>

<script setup lang="ts">
    import type { Type } from "../types";

    defineProps<{
        types: Type[];
    }>();
</script>
