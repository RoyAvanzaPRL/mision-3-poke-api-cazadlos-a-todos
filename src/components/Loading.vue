<template>
  <div
    role="status"
    aria-live="polite"
    class="flex flex-col items-center gap-3"
  >
    <div
      class="h-10 w-10 rounded-full border-4 border-slate-200 border-t-blue-500 animate-spin"
    ></div>

    <p class="text-sm text-slate-500">
      {{ message }}
    </p>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    message?: string;
  }>(),
  {
    message: "Cargando...",
  }
);
</script>