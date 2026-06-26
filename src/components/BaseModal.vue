<template>
  <div
    v-if="open"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
  >
    <div class="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
      <h2 class="mb-4 text-xl font-semibold">
        {{ title }}
      </h2>

      <div class="mb-6 text-gray-700">
        <slot />
      </div>

      <div class="flex justify-end gap-3">
        <BaseButton
          variant="secondary"
          @click="emit('cancel')"
        >
          Cancelar
        </BaseButton>

        <BaseButton
          variant="primary"
          class="bg-red-500 hover:bg-red-600"
          @click="emit('confirm')"
        >
          Eliminar
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseButton from "./BaseButton.vue";

defineProps<{
  open: boolean;
  title: string;
}>();

const emit = defineEmits<{
  (e: "confirm"): void;
  (e: "cancel"): void;
}>();
</script>