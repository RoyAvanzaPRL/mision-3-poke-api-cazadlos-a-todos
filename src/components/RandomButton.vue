<template>
<button 
  class="bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600 active:scale-95 transition"
  :disabled="disabled"
  @click="randomClick"
>
  {{ label ?? "🎲 Pokémon aleatorio" }}
</button>
</template>

<script setup lang="ts">
const props = defineProps<{
  disabled: boolean;
  label?: string
}>();

const emit = defineEmits<{
  // void means that the function does not return a value
  (e: "random-poke"): void;
}>();

// When randomClick runs, it emits the "random-poke" event to the parent
function randomClick() {
  emit("random-poke");
}
</script>