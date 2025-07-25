<script setup>
import { ref, onMounted } from "vue";
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

const isDark = ref(false);

const setDarkClass = (val) => {
    const html = document.documentElement;
    if (val) {
        html.classList.add('dark');
    } else {
        html.classList.remove('dark');
    }
};

const toggleDark = () => {
    isDark.value = !isDark.value;
    setDarkClass(isDark.value);
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light');
};

onMounted(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
        isDark.value = true;
        setDarkClass(true);
    }
});
</script>

<template>
    <div class="flex min-h-screen flex-col overflow-hidden">
        <!-- Dark mode toggle button in top right corner -->
        <button @click="toggleDark" class="fixed top-4 right-4 z-[100] flex items-center gap-2 rounded px-2 py-1 border border-primary bg-white dark:bg-gray-800 text-primary dark:text-primary-content hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition shadow-lg">
            <Icon :icon="isDark ? 'mdi:weather-night' : 'mdi:white-balance-sunny'" width="22" height="22" />
            <span class="hidden md:inline">{{ isDark ? 'Dark' : 'Light' }} Mode</span>
        </button>
        <!-- Header -->
        <header class="h-[calc(100vh - 64px)] sticky top-0 z-50 bg-primary-light dark:bg-gray-900 px-6 drop-shadow md:px-10" >
            <div class="mx-auto flex max-w-screen-xl flex-col items-center md:flex-row md:justify-between">
                <div class="flex w-full items-center justify-between md:w-auto">
                    <!-- Logo -->
                    <RouterLink :to="{ path: '/' }" class="text-lg font-semibold text-gray-900 dark:text-gray-100 md:text-xl">
                        <img src="/public/images/lo.png" alt="Profile" class="w-full h-14 -ml-6" />
                    </RouterLink>

                    <!-- Hamburger Menu -->
                    <button @click="toggleMenu" class="block md:hidden">
                        <span class="sr-only">Toggle Menu</span>
                        <Icon icon="pajamas:hamburger" width="24" height="24" class="text-primary dark:text-primary-content" />
                    </button>
                </div>
                <!-- Navigation -->
                <nav :class="{ hidden: !showMenu }" class="flex flex-col gap-4 pt-6 text-center md:flex md:flex-row md:gap-10 md:pt-0">
                    <NavLink :to="{ path: '/' }" class="text-gray-900 dark:text-gray-100">Home</NavLink>
                    <NavLink :to="{ path: '/', hash: '#about' }" class="text-gray-900 dark:text-gray-100">About</NavLink>
                    <NavLink :to="{ path: '/', hash: '#experiance' }" class="text-gray-900 dark:text-gray-100">Experience</NavLink>
                    <NavLink :to="{ path: '/', hash: '#projects' }" class="text-gray-900 dark:text-gray-100">Projects</NavLink>
                    <NavLink :to="{ path: '/', hash: '#contact' }" class="text-gray-900 dark:text-gray-100">Contact</NavLink>
                </nav>
            </div>
        </header>

        <main class="flex-1 ">
            <section class="h-full">
                <RouterView />
            </section>
        </main>

        <!-- Social Media -->
        <div class="fixed bottom-4 bg-transparent right-0 flex flex-col gap-4 md:gap-6" data-aos="fade-up"
        data-aos-duration="3000">
            <div v-for="(url, platform) in profile.accounts" :key="platform">
                <ExternalLink :url="url">
                    <span class="sr-only">{{ platform }}</span>
                    <Icon :icon="`${platform === 'upwork' ? 'cib' : 'mdi'}:${platform}`" class="text-black dark:text-primary-content hover:text-primary-dark dark:hover:text-primary w-6 h-6 md:w-10 md:h-10" />
                </ExternalLink>
            </div>
        </div>
        <!-- Footer -->
        <footer class="w-full bg-primary dark:bg-gray-900 text-center py-4 mt-auto text-gray-200 dark:text-gray-300  ">
            © {{ new Date().getFullYear() }} Belay Sirak. All rights reserved.
        </footer>
    </div>
</template>