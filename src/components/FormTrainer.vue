<template>
  <form class="grid grid-cols-2 gap-3 p-4 bg-slate-200 rounded-lg shadow w-full max-w-lg">

    <BaseInput label="Nombre" />
    <BaseInput label="Apellidos" />
    <BaseInput label="DNI" />
    <BaseInput label="Email" type="email" />
    <BaseInput label="Pokémon asignado" />

    <div class="flex items-end">
      <BaseButton
        type="submit"
        variant="primary"
        size="sm"
      >
        Enviar
      </BaseButton>
    </div>
  </form>
</template>

<script setup lang="ts">
  import BaseInput from './BaseInput.vue';
  import BaseButton from './BaseButton.vue';
</script>