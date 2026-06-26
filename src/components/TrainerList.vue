<template>
  <aside class="p-4 bg-slate-100 rounded-lg shadow">
    <h2 class="text-xl font-semibold mb-4">Entrenadores</h2>

    <ul v-if="trainers.length" class="space-y-3">
      <li
        v-for="t in trainers"
        :key="t.DNI"
      >
        <CardTrainer
          :trainer="t"
          @assign-request="emit('assign-request', $event)"
          @remove="requestDelete"
        />
      </li>
    </ul>

    <p v-else class="text-sm text-gray-600">
      No hay entrenadores todavía.
    </p>

    <BaseModal
      :open="showModal"
      title="Eliminar entrenador"
      @confirm="confirmDelete"
      @cancel="closeModal"
    >
      ¿Seguro que deseas eliminar este entrenador?
    </BaseModal>
  </aside>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useTrainerStore } from '../stores/trainers';
import CardTrainer from './CardTrainer.vue';
import { ref } from 'vue';
import BaseModal from './BaseModal.vue';

const store = useTrainerStore();
const { trainers } = storeToRefs(store);

const emit = defineEmits<{
  (e: 'assign-request', DNI: string): void;
}>();

const showModal = ref(false);
const trainerToDelete = ref<string | null>(null);

function requestDelete(dni: string) {
  trainerToDelete.value = dni;
  showModal.value = true;
}

function confirmDelete() {
  if (!trainerToDelete.value) return;

  store.deleteTrainer(trainerToDelete.value);

  trainerToDelete.value = null;
  showModal.value = false;
}

function closeModal() {
  trainerToDelete.value = null;
  showModal.value = false;
}
</script>
