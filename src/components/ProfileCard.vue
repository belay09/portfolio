<script setup>
import IconWrapper from "@/components/IconWrapper.vue";
import ItemList from "@/components/ItemList.vue";
defineProps({
    icon: {
        type: String,
    },
    url: {
        type: String,
    },
    title: {
        type: String,
    },
    sub_title: {
        type: String,
    },
    description: {
        type: String,
    },
    list_title: {
        type: String,
    },
    items: {
        type: Array,
        default: () => [],
    },
    column: {
        type: [Number, String],
        default: 2,
    },
});
</script>

<template>
    <div class="flex gap-4">
        <IconWrapper :icon="icon" />
        <div class="flex flex-col gap-2">
            <div class="gap-0ew flex flex-col">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100">{{ title }}</h3>
                <span class="text-gray-500 dark:text-gray-300">{{ sub_title }}</span>
            </div>
            <p class="text-gray-700 dark:text-gray-300">{{ description }}</p>
            <div v-if="items?.length > 0">
                <ItemList
                    :items="items"
                    :column="column"
                    :list_title="list_title"
                />
            </div>
            
        </div>
    </div>
</template>
