<template>
  <div class="flex flex-col">
    <label
      :for="inputId"
      class="text-sm"
    >
      {{ label }}
    </label>

    <input
      :id="inputId"
      :type="type"
      :value="modelValue"
      :readonly="readonly"
      @input="updateValue"
      class="border rounded px-2 py-1 bg-gray-100"
    />
  </div>
</template>

<script setup lang="ts">
import { useId } from "vue";

interface Props {
  id?: string;
  label: string;
  type?: string;
  modelValue?: string;
  readonly?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  type: "text",
  modelValue: "",
  readonly: false,
});

const inputId = props.id ?? useId();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

function updateValue(event: Event) {
  const target = event.target as HTMLInputElement;
  emit("update:modelValue", target.value);
}
</script>