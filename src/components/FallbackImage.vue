<script setup>
defineProps({
    title: {
        type: String,
        required: true
    }
});
</script>

<template>
    <div class="flex items-center justify-center aspect-video object-cover bg-primary text-white dark:bg-gray-800 dark:text-primary-content">
        <p class="text-lg text-center p-8">{{ title }}</p>
    </div>
</template>