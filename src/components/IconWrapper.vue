<script setup>
import { Icon } from "@iconify/vue";
import { computed } from "vue";

const props = defineProps({
    icon: {
        type: String,
        required: true,
    },
    size: {
        type: [Number, String],
        default: 22,
    },
    color: {
        type: String,
        default: "text-primary",
    },
    backgroundColor: {
        type: String,
        default: "bg-primary-content",
    },
    backgroundSize: {
        type: String,
        default: "p-2",
    },
});

const backgroundClasses = computed(() => {
    // Add dark: variants for known background colors
    let bg = props.backgroundColor;
    if (bg === 'bg-primary-content') bg += ' dark:bg-gray-800';
    if (bg === 'bg-primary') bg += ' dark:bg-primary-content';
    return `rounded-full ${bg} ${props.backgroundSize}`;
});
</script>

<template>
    <div class="flex items-start">
        <div :class="backgroundClasses">
            <Icon :icon="icon" :width="size" :height="size" :class="color" />
        </div>
    </div>
</template>
