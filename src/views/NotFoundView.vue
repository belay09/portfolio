<script setup>
import PrimaryButton from "@/components/PrimaryButton.vue";
</script>

<template>
    <section class="bg-light dark:bg-gray-900 px-4 py-8 lg:px-6 lg:py-16">
        <div class="mx-auto max-w-screen-sm text-center">
            <h1 class="mb-4 text-7xl font-bold tracking-tight text-primary lg:text-9xl dark:text-primary-content">
                404
            </h1>
            <p class="mb-4 text-3xl font-bold tracking-tight md:text-4xl dark:text-gray-100">
                Something's missing.
            </p>
            <p class="mb-4 text-lg font-light dark:text-gray-300">
                Sorry, we can't find that page. You'll find lots to explore on
                the home page.
            </p>
            <RouterLink :to="{ path: '/' }" class="mt-4 inline-block">
                <PrimaryButton>Back to Home</PrimaryButton>
            </RouterLink>
        </div>
    </section>
</template>
