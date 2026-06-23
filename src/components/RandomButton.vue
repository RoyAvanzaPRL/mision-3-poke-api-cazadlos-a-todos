<template>
  <BaseButton
    class="bg-red-500 hover:bg-red-600"
    variant="primary"
    size="lg"
    :disabled="disabled"
    @click="randomClick"
  >
    {{ label ?? "🎲 Pokémon aleatorio" }}
  </BaseButton>
</template>

<script setup lang="ts">
import BaseButton from './BaseButton.vue';

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