<template>
    <div class="flex flex-col">
        <label class="text-sm">{{ label }}</label>
        <input :type="type" class="border rounded px-2 py-1 bg-gray-100">
    </div>
</template>

<script setup lang="ts">
    defineProps({
        label: String,
        type: {
            type: String,
            default: "text"
        }
    })
</script>