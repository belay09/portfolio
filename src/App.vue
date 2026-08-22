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
    <div class="relative flex min-h-screen flex-col overflow-hidden">
        <div class="animated-background" aria-hidden="true">
            <span class="animated-shimmer"></span>
            <span class="animated-orb orb-one"></span>
            <span class="animated-orb orb-two"></span>
            <span class="animated-orb orb-three"></span>
            <span class="animated-particle particle-one"></span>
            <span class="animated-particle particle-two"></span>
            <span class="animated-particle particle-three"></span>
            <span class="animated-particle particle-four"></span>
            <span class="animated-particle particle-five"></span>
        </div>
        <div class="relative z-[90] flex min-h-screen flex-col">
        <!-- Dark mode toggle button in left bottom corner -->
        <button @click="toggleDark" class="fixed bottom-4 left-4 z-[100] flex items-center gap-2 rounded px-2 py-1 border border-primary bg-white dark:bg-gray-800 text-primary dark:text-primary-content hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition shadow-lg">
            <Icon :icon="isDark ? 'mdi:weather-night' : 'mdi:white-balance-sunny'" width="22" height="22" />
            <span class="hidden md:inline">{{ isDark ? 'Dark' : 'Light' }} Mode</span>
        </button>
        <!-- Header -->
        <header class="sticky top-0 z-50 bg-primary-light/85 dark:bg-slate-900/70 backdrop-blur-md px-6 drop-shadow md:px-10" >
            <div class="mx-auto flex max-w-screen-xl flex-col items-center py-2 md:flex-row md:justify-between">
                <div class="flex w-full items-center justify-between md:w-auto">
                    <!-- Logo -->
                    <RouterLink :to="{ path: '/' }" class="group inline-flex items-center gap-2.5">
                        <span class="text-2xl font-black tracking-tight text-slate-900 dark:text-slate-100 md:text-3xl">
                            Belay<span class="text-primary dark:text-primary-content"> Sirak</span>
                        </span>
                        <span class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-base text-white shadow-md shadow-primary/30 transition-transform duration-300 group-hover:rotate-12">
                            ⚡
                        </span>
                    </RouterLink>

                    <!-- Hamburger Menu -->
                    <button @click="toggleMenu" class="block md:hidden">
                        <span class="sr-only">Toggle Menu</span>
                        <Icon icon="pajamas:hamburger" width="24" height="24" class="text-primary dark:text-slate-100" />
                    </button>
                </div>
                <!-- Navigation -->
                <nav :class="{ hidden: !showMenu }" class="flex flex-col gap-4 pt-6 text-center md:flex md:flex-row md:gap-10 md:pt-0">
                    <NavLink :to="{ path: '/' }" class="text-gray-900 dark:text-slate-100">Home</NavLink>
                    <NavLink :to="{ path: '/', hash: '#about' }" class="text-gray-900 dark:text-slate-100">About</NavLink>
                    <NavLink :to="{ path: '/', hash: '#experiance' }" class="text-gray-900 dark:text-slate-100">Experience</NavLink>
                    <NavLink :to="{ path: '/', hash: '#projects' }" class="text-gray-900 dark:text-slate-100">Projects</NavLink>
                    <NavLink :to="{ path: '/', hash: '#contact' }" class="text-gray-900 dark:text-slate-100">Contact</NavLink>
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
        data-aos-duration="700">
            <div v-for="(url, platform) in profile.accounts" :key="platform">
                <ExternalLink :url="url">
                    <span class="sr-only">{{ platform }}</span>
                    <Icon :icon="`${platform === 'upwork' ? 'cib' : 'mdi'}:${platform}`" class="text-black dark:text-primary-content hover:text-primary-dark dark:hover:text-primary w-6 h-6 md:w-10 md:h-10" />
                </ExternalLink>
            </div>
        </div>
        <!-- Footer -->
        <footer class="footer-shell w-full py-4 mt-auto">
            <div class="mx-auto w-fit rounded-full border border-white/45 bg-white/45 px-5 py-1.5 text-sm font-medium text-slate-700 shadow-sm backdrop-blur-md dark:border-slate-700/60 dark:bg-slate-900/45 dark:text-slate-200">
                © {{ new Date().getFullYear() }} Belay Sirak. All rights reserved.
            </div>
        </footer>
        </div>
    </div>
</template>