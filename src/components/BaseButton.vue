<template>
  <button
    :type="type"
    :disabled="disabled"
    :class="buttonClasses"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";

type Variant = "primary" | "secondary";

type Size = "sm" | "md" | "lg";

interface Props {
  variant?: Variant;
  size?: Size;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "primary",
  size: "md",
  type: "button",
  disabled: false
});

const variants: Record<Variant, string> = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700",
  
  secondary:
    "bg-gray-200 text-gray-900 hover:bg-gray-300"
};

const sizes: Record<Size, string> = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-base",
};

const buttonClasses = computed(() => [
  "inline-flex items-center justify-center rounded-md",
  "font-medium transition-colors duration-200",
  "focus-visible:outline-none",
  "focus-visible:ring-2 focus-visible:ring-blue-500",
  "disabled:cursor-not-allowed disabled:opacity-50",
  variants[props.variant],
  sizes[props.size]
]);
</script>