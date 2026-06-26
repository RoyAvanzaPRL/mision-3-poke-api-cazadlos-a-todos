<template>
  <form
    class="grid grid-cols-2 gap-3 p-4 bg-slate-200 rounded-lg shadow w-full max-w-lg"
    @submit.prevent="submitForm"
    >

  <BaseInput
    label="Nombre"
    v-model="trainerForm.name"
  />

  <BaseInput
    label="Apellidos"
    v-model="trainerForm.surnames"
  />

  <BaseInput
    label="DNI"
    v-model="trainerForm.DNI"
  />

  <BaseInput
    label="Email"
    type="email"
    v-model="trainerForm.email"
  />

  <BaseInput
    label="Pokémon Assignado"
    :modelValue="pokemonName"
    readonly
  />

    <div class="flex items-end col-span-1 gap-3">
      <BaseButton
        type="submit"
        variant="primary"
        size="sm"
        :disabled="loading"
      >
        Enviar
      </BaseButton>
    </div>
    <div class="flex items-end col-span-2 gap-3">
      <BaseButton
        class="bg-red-500 hover:bg-red-600"
        variant="primary"
        size="md"
        :disabled="disabled"
        @click="randomClick"
      >
        {{ label ?? "Pokémon Aleatorio" }}
      </BaseButton>
    </div>
  </form>
</template>

<script setup lang="ts">
  import BaseInput from './BaseInput.vue';
  import BaseButton from './BaseButton.vue';
  import { reactive, computed } from 'vue';
  import type { Pokemon } from '../types.ts';
  import { useTrainerStore } from '../stores/trainers.ts';

  const props = defineProps<{
    pokemon: Pokemon | null;
    loading: boolean;
    disabled: boolean;
    label?: string
  }>();

  const trainerStore = useTrainerStore();

  const trainerForm = reactive({
    DNI: '',
    name: '',
    surnames: '',
    email: ''
  });

  const pokemonName = computed(() => props.pokemon?.name ?? '');

  const emit = defineEmits<{
    (e: 'random-poke'): void;
    (e: 'submitted'): void;
  }>();

function resetForm() {
  trainerForm.DNI = "";
  trainerForm.name = "";
  trainerForm.surnames = "";
  trainerForm.email = "";
}

function submitForm() {
  if (
    !trainerForm.DNI ||
    !trainerForm.name ||
    !trainerForm.surnames ||
    !trainerForm.email
  ) {
    return;
  }

  const created = trainerStore.createTrainer(
    trainerForm.DNI,
    trainerForm.name,
    trainerForm.surnames,
    trainerForm.email,
    props.pokemon
  );

  if (!created) {
    return;
  }

  resetForm();
  emit("submitted");
}

function randomClick() {
  emit("random-poke");
}
</script>