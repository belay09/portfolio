<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import { Icon } from "@iconify/vue";

import data from "@/assets/data.json";

import NavLink from "@/components/NavLink.vue";
import ExternalLink from "@/components/ExternalLink.vue";

const { profile } = data;

const showMenu = ref(false);

const toggleMenu = () => {
    showMenu.value = !showMenu.value;
};
</script>

<template>
    <div class="flex min-h-screen flex-col">
        <!-- Header -->
        <header class="h-[calc(100vh - 64px)] sticky top-0 z-50 bg-primary-light px-6  drop-shadow md:px-10 ">
            <div class="mx-auto flex max-w-screen-xl flex-col items-center md:flex-row md:justify-between">
                <div class="flex w-full items-center justify-between md:w-auto">
                    <!-- Logo -->
                    <RouterLink :to="{ path: '/' }" class="text-lg font-semibold text-gray-900 md:text-xl">
                        <img src="/public/images/lo.png" alt="Profile" class=" w-full h-14 -ml-6" />
                    </RouterLink>

                    <!-- Hamburger Menu -->
                    <button @click="toggleMenu" class="block md:hidden">
                        <span class="sr-only">Toggle Menu</span>
                        <Icon icon="pajamas:hamburger" width="24" height="24" class="text-primary" />
                    </button>
                </div>

                <!-- Navigation -->
                <nav :class="{ hidden: !showMenu }"
                    class="flex flex-col gap-4 pt-6 text-center md:flex md:flex-row md:gap-10 md:pt-0">
                    <NavLink :to="{ path: '/' }" class="text-gray-900">Home</NavLink>
                    <NavLink :to="{ path: '/', hash: '#about' }" class="text-gray-900">About</NavLink>
                    <NavLink :to="{ path: '/', hash: '#experiance' }" class="text-gray-900">Experiance</NavLink>
                    <NavLink :to="{ path: '/', hash: '#projects' }" class="text-gray-900">Projects</NavLink>
                    <NavLink :to="{ path: '/', hash: '#contact' }" class="text-gray-900">Contact</NavLink>
                </nav>
            </div>
        </header>

        <main class="flex-1 ">
            <section class="h-full">
                <RouterView />
            </section>
        </main>

        <!-- Footer -->
        <!-- <footer class="h-[calc(100vh - 64px)] border-t border-t-gray-200 bg-primary px-6 py-4 md:px-10">
            <div class="mx-auto flex max-w-screen-xl flex-col items-center gap-4 md:flex-row md:justify-between">
                <p class="text-center text-white">
                    © 2024 Belay Sirak. All rights reserved.
                </p>
            </div>
        </footer> -->

        <!-- Social Media -->
        <div class="fixed bottom-4 left-4 flex flex-col gap-4 md:gap-6">
            <div v-for="(url, platform) in profile.accounts" :key="platform">
                <ExternalLink :url="url">
                    <span class="sr-only">{{ platform }}</span>
                    <Icon :icon="`${platform === 'upwork' ? 'cib' : 'mdi'}:${platform}`" class="text-black hover:text-primary-dark w-6 h-6 md:w-12 md:h-12" />
                </ExternalLink>
            </div>
        </div>
    </div>
</template>