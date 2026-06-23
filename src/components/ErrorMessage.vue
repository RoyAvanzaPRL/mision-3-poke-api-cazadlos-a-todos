<template>
    <p 
      class="text-red-500 text-sm mt-1"
      v-if="errorMessage"
    >
      {{ errorMessage }}
    </p>
</template>

<script setup lang="ts">
  defineProps<{
    errorMessage: string;
  }>();
</script>