<template>
  <form class="grid grid-cols-2 gap-3 p-4 bg-slate-200 rounded-lg shadow w-full max-w-lg">
    <div class="flex flex-col">
      <label class="text-sm">Nombre</label>
      <input type="text" class="border rounded px-2 py-1 bg-gray-100">
    </div>

    <div class="flex flex-col">
      <label class="text-sm">Apellidos</label>
      <input type="text" class="border rounded px-2 py-1 bg-gray-100">
    </div>

    <div class="flex flex-col">
      <label class="text-sm">DNI</label>
      <input type="text" class="border rounded px-2 py-1 bg-gray-100">
    </div>

    <div class="flex flex-col">
      <label class="text-sm">Email</label>
      <input type="email" class="border rounded px-2 py-1 bg-gray-100">
    </div>

    <div class="flex flex-col">
      <label class="text-sm">Pokémon asignado</label>
      <input type="text" class="border rounded px-2 py-1 bg-gray-100">
    </div>

    <div class="flex items-end">
      <button type="submit" class="border rounded px-3 py-1">
        Enviar
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">

</script>