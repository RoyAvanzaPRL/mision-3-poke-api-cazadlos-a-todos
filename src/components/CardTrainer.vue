<template>
  <article class="p-3 bg-white rounded border flex justify-between items-start">
    <div class="space-y-1">
      <InfoField 
        label="Nombre"
        :value="trainer.name"  
      />
      <InfoField 
        label="Apellidos"
        :value="trainer.surnames"  
      />
      <InfoField 
        label="DNI"
        :value="trainer.DNI"  
      />
      <InfoField 
        label="Email"
        :value="trainer.email"  
      />
      <InfoField 
        label="Pokemon Asignado"
        :value="trainer.pokemonAssigned?.name ?? 'Sin Pokémon'"
      />
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
import InfoField from './InfoField.vue';

defineProps<{
  trainer: Trainer;
}>();

const emit = defineEmits<{
  (e: 'assign-request', DNI: string): void;
  (e: 'remove', DNI: string): void;
}>();
</script>
