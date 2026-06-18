<template>
<button 
class="bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600 active:scale-95 transition"
@click="randomClick"
>
  🎲 Pokémon aleatorio
</button>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: "randomPoke"): void;
}>();

function randomClick() {
  emit("randomPoke");
}

</script>