<template>
  <p class="text-sm">
    <span class="font-medium">{{ label }}:</span>
    {{ value }}
  </p>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
  value: string;
}>();
</script>