<template>
  <article class="p-3 bg-white rounded border flex justify-between items-start">
    <div class="space-y-1">
      <p class="text-sm">
        <span class="font-medium">Nombre:</span> {{ trainer.name }}
      </p>
      <p class="text-sm">
        <span class="font-medium">Apellidos:</span> {{ trainer.surnames }}
      </p>
      <p class="text-sm">
        <span class="font-medium">DNI:</span> {{ trainer.DNI }}
      </p>
      <p class="text-sm">
        <span class="font-medium">Email:</span> {{ trainer.email }}
      </p>
      <p class="text-sm">
        <span class="font-medium">Pokémon assignado:</span>
        {{ trainer.pokemonAssigned?.name ?? 'Sin Pokémon' }}
      </p>
    </div>

    <div class="flex flex-col items-end gap-2">
      <BaseButton
        variant="secondary"
        size="sm"
        @click="emit('remove', trainer.DNI)"
      >
        Eliminar
      </BaseButton>

      <BaseButton
        v-if="!trainer.pokemonAssigned"
        class="bg-red-500 hover:bg-red-600"
        variant="primary"
        size="sm"
        @click="emit('assign-request', trainer.DNI)"
      >
        Asignar Pokémon
      </BaseButton>

    </div>
  </article>
</template>

<script setup lang="ts">
import type { Trainer } from '../types';
import BaseButton from './BaseButton.vue';

defineProps<{
  trainer: Trainer;
}>();

const emit = defineEmits<{
  (e: 'assign-request', DNI: string): void;
  (e: 'remove', DNI: string): void;
}>();
</script>
