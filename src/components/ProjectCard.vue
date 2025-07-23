<script setup>
import { ref, onMounted } from "vue";
import FallbackImage from "@/components/FallbackImage.vue";
import IconWrapper from "@/components/IconWrapper.vue";
import ExternalLink from "@/components/ExternalLink.vue";

defineProps({
    image: {
        type: String,
    },
    title: {
        type: String,
        required: true,
    },
    tools: {
        type: Array,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
    },
});

const showFallback = ref(false);

const handleImageError = () => {
    showFallback.value = true;
};

const descriptionRef = ref(null);

const initializeTooltip = () => {
    if (descriptionRef.value) {
        descriptionRef.value.setAttribute("data-tooltip", descriptionRef.value.innerText);
    }
};

onMounted(() => {
    initializeTooltip();
});
</script>

<template>
    <ExternalLink v-if="url" :url="url" class="flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 shadow-2xl border transition-shadow duration-300 hover:shadow-xl dark:bg-gray-800 dark:border-gray-700">
        <img
            :src="image"
            loading="lazy"
            :alt="title"
            @error="handleImageError"
            v-if="!showFallback"
            class="aspect-video object-contain object-top transition duration-200"
        />
        <FallbackImage v-if="showFallback" :title="title" />

        <div class="flex flex-grow flex-col justify-between gap-1 bg-white px-7 py-5 dark:bg-gray-800">
            <div class="mb-10 flex-grow">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100">{{ title }}</h3>
                <p ref="descriptionRef" class="tooltip line-clamp-4 pt-4 text-gray-600 dark:text-gray-300" v-tooltip>{{ description }}</p>
            </div>
            <div class="flex items-center justify-between">
                <div class="flex gap-2">
                    <div v-for="(url, tool) in tools" :key="tool">
                        <ExternalLink :url="url">
                            <div v-if="tool === 'vuejs'" class="mx-auto flex rounded-full border bg-blue-100 p-2 dark:border-gray-700 dark:bg-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 16 16">
                                    <g fill="none" stroke="#0ff51e" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M1 1.5h5.44L8 4.56L9.56 1.5H15l-6.99 13z" />
                                        <path d="M12.05 1.73L8 9.28L3.95 1.73" />
                                    </g>
                                </svg>
                            </div>
                            <template v-else>
                                <IconWrapper :icon="`simple-icons:${tool}`" :size="25" />
                            </template>
                        </ExternalLink>
                    </div>
                </div>
                <!-- <ExternalLink v-if="url" :url="url" class="flex items-center gap-1 font-semibold text-primary border px-2 rounded-2xl hover:bg-primary-content">
                    <span class="mt-1">Explore</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M12.293 2.293a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L14 5.414V15a1 1 0 11-2 0V5.414l-2.293 2.293a1 1 0 01-1.414-1.414l4-4z" clip-rule="evenodd" />
                        <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h6a1 1 0 110 2H5v5a1 1 0 11-2 0v-6z" clip-rule="evenodd" />
                    </svg>
                </ExternalLink> -->
            </div>
        </div>
    </ExternalLink>
</template>

<script>
export default {
    directives: {
        tooltip: {
            mounted(el) {
                el.setAttribute("title", el.innerText);
            },
        },
    },
};
</script>

<style scoped>
.line-clamp-4 {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}

.tooltip {
    position: relative;
    cursor: pointer;
}

.tooltip::after {
    content: attr(data-tooltip);
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    background-color: #333;
    color: #fff;
    padding: 0.5rem;
    border-radius: 0.25rem;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s;
}

.tooltip:hover::after {
    opacity: 1;
}
</style>