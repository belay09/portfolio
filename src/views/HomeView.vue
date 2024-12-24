<script setup>
import { RouterLink } from "vue-router";
import data from "@/assets/data.json";
import ExternalLink from "@/components/ExternalLink.vue";
import IconText from "@/components/IconText.vue";
import PrimaryButton from "@/components/PrimaryButton.vue";
import ProfileCard from "@/components/ProfileCard.vue";
import ProjectCard from "@/components/ProjectCard.vue";
import SecondaryButton from "@/components/SecondaryButton.vue";
import SectionTitle from "@/components/SectionTitle.vue";
import TimelineList from "@/components/TimelineList.vue";
import { ref, onMounted } from "vue";
import QRCode from "qrcode";
const { profile, education, work_experience, projects, certifications } = data;

// Set up state variables
const showQRCode = ref(false); // To toggle between profile image and QR code
const qrCodeDataUrl = ref(""); // Store the QR code image URL

// Generate QR code with profile information
onMounted(async () => {
    const qrContent = `mailto:${profile.email}`;
  qrCodeDataUrl.value = await QRCode.toDataURL(qrContent);
});

// Toggle function for showing the QR code
const toggleQRCode = () => {
  showQRCode.value = !showQRCode.value;
  
};
</script>

<template>
    <!-- Hero -->
    <section
        id="hero"
        class="min-h-screen bg-gray-100 px-6 py-7 md:px-10 md:py-28"
        data-aos="fade-down"
        data-aos-duration="2000"
    >
        <div
            class="container mx-auto flex max-w-screen-xl flex-col items-center gap-6 lg:flex-row-reverse lg:items-start lg:gap-14"
        >
            <!-- Profile Picture -->
            <figure class="h-full flex-shrink-0 overflow-hidden md:w-1/3 cursor-pointer" @click="toggleQRCode">
                <transition name="fade" mode="out-in">
                    <img
                        v-if="!showQRCode"
                        :src="profile.image"
                        alt="Profile"
                        class="h-full w-full rounded-full object-cover shadow-lg transition-transform duration-500"
                    />
                    <img
                        v-else
                        :src="qrCodeDataUrl"
                        alt="QR Code"
                        class="h-full w-full rounded-lg object-cover shadow-lg transition-transform duration-500"
                    />
                </transition>
            </figure>

            <!-- Bio -->
            <div class="mt-24 flex flex-col gap-6 text-center lg:text-left">
                <header>
                    <h1
                        class="pb-2  text-3xl font-bold text-gray-900 md:text-5xl"
                    >
                        Hi there! I'm
                        <span
                            class=" block text-primary md:inline"
                            >{{ profile.name }}</span
                        >
                    </h1>
                </header>
                <p class="text-gray-700">
                    {{ profile.bio }}
                </p>
                <div
                    class="flex items-center justify-center gap-6 lg:justify-start"
                >
                    <RouterLink :to="{ path: '/', hash: '#contact' }">
                        <PrimaryButton>Get in touch</PrimaryButton>
                    </RouterLink>
                    <ExternalLink
                        :url="`${profile.resume_url}`"
                        class="font-semibold text-primary hover:underline"
                    >
                        <IconText
                            :icon="'heroicons:arrow-top-right-on-square-16-solid'"
                            :iconPosition="'right'"
                            :text="'Explore my resume'"
                        />
                    </ExternalLink>
                </div>
            </div>
        </div>
    </section>

    <section
        id="about"
        class="bg-gray-100 px-6 py-7 md:px-10 md:py-12"
       
    >
        <div
        class="mx-auto flex max-w-screen-xl flex-col gap-14 md:flex-row md:justify-between lg:gap-20"
        >
            <!-- About Me Section -->
            <div class="md:max-w-1/2 flex w-full flex-col gap-14"
            data-aos="fade-right"
            data-aos-duration="2000">
                <SectionTitle
                    class="mb-6 text-center text-3xl font-bold md:text-left"
                    >About Me</SectionTitle
                >
                <p class="mb-6 text-center text-lg text-gray-700 md:text-left">
                    I’m Belay Sirak, a passionate Full Stack Developer with
                    hands-on experience in building dynamic web applications.
                    Skilled in both frontend and backend technologies, I enjoy
                    creating seamless user experiences and writing efficient,
                    scalable code. With a background in Vue.js, Nuxt.js,
                    Tailwind CSS, Hasura, Node.js, and Golang, I’m committed to
                    bringing innovative ideas to life and collaborating with
                    like-minded professionals to solve complex challenges. Let’s
                    build something amazing together!
                </p>
            </div>
            <!-- Technologies Section -->
            <div class="md:max-w-1/2 flex w-full flex-col gap-14"
             data-aos="fade-left"
        data-aos-duration="2000">
                <SectionTitle
                    class="pb-8"
                    >Technologies I Love Working With</SectionTitle
                >
                <ul
                    class="flex flex-wrap justify-center gap-4 text-lg text-gray-600 md:justify-start"
                >
                    <li class="rounded-lg bg-white px-4 py-2 shadow-md">
                        Vue.js
                    </li>
                    <li class="rounded-lg bg-white px-4 py-2 shadow-md">
                        Nuxt.js
                    </li>
                    <li class="rounded-lg bg-white px-4 py-2 shadow-md">
                        Tailwind CSS
                    </li>
                    <li class="rounded-lg bg-white px-4 py-2 shadow-md">
                        Node.js
                    </li>
                    <li class="rounded-lg bg-white px-4 py-2 shadow-md">
                        Golang
                    </li>
                    <li class="rounded-lg bg-white px-4 py-2 shadow-md">
                        Hasura
                    </li>
                    <li class="rounded-lg bg-white px-4 py-2 shadow-md">
                        GraphQL
                    </li>
                    <li class="rounded-lg bg-white px-4 py-2 shadow-md">
                        PostgreSQL
                    </li>
                    <li class="rounded-lg bg-white px-4 py-2 shadow-md">
                        Laravel
                    </li>
                    <li class="rounded-lg bg-white px-4 py-2 shadow-md">
                        React
                    </li>
                    <li class="rounded-lg bg-white px-4 py-2 shadow-md">
                        Laravel
                    </li>
                    <li class="rounded-lg bg-white px-4 py-2 shadow-md">
                        PHP
                    </li>
                </ul>
            </div>
        </div>
    </section>

    <!-- About -->
    <section
        id="experiance"
        class="bg-primary-light px-6 py-7 md:px-10 md:py-12"
    >
        <div
            class="mx-auto flex max-w-screen-xl flex-col gap-14 md:flex-row md:justify-between lg:gap-20"
        >
            <!-- Background -->
            <div class="md:max-w-1/2 flex w-full flex-col gap-14"
            data-aos="fade-right"
            data-aos-duration="2000">
                <!-- Education -->
                <div id="education" class="w-full">
                    <SectionTitle class="pb-8">Education</SectionTitle>
                    <ProfileCard
                        :icon="education.icon"
                        :title="education.institution"
                        :sub_title="education.degree"
                        :description="education.thesis"
                        :list_title="'Relevant subjects:'"
                        :items="education.subjects"
                        :column="1"
                    />
                </div>
                <!-- Certification Section -->
                <div class="flex flex-col items-center md:w-1/2 md:items-start">
                    <div
                        v-for="(certificate, index) in certifications"
                        :key="index"
                        class="mb-6 text-gray-700"
                    >
                        <ProfileCard
                            icon="simple-icons:udemy"
                            :title="certificate.title"
                            :url="certificate.url"
                            :sub_title="certificate.institution"
                            :description="certificate.description"
                            :list_title="'Date'"
                            :items="[certificate.date]"
                        />
                    </div>
                </div>
            </div>

            <!-- Work Experience -->
            <div id="work-experience" class="md:max-w-1/2 w-full" 
            data-aos="fade-left"
            data-aos-duration="2000">
                <SectionTitle class="pb-8">Work Experience</SectionTitle>
                <TimelineList :activities="work_experience" />
            </div>
        </div>
    </section>
    <!-- Projects -->
    <section
        id="projects"
        class="bg-primary-light px-6 pb-20 pt-7 md:px-10 md:pb-24 md:pt-12"
        data-aos="zoom-out"
            data-aos-duration="2000">
        <div class="mx-auto max-w-screen-xl">
            <SectionTitle>Project Showcase</SectionTitle>
            <p class="pt-3 text-gray-700">
                These are projects I've developed, providing effective solutions
                to diverse problems.
            </p>

            <div class="flex flex-col items-center pt-8">
                <div
                    class="grid gap-x-7 gap-y-7 pt-3 md:grid-cols-2 lg:grid-cols-3"
                >
                    <!-- Project -->
                    <ProjectCard
                        v-for="(project, index) in projects"
                        :key="index"
                        :image="project.image"
                        :tools="project.tools"
                        :title="project.title"
                        :description="project.description"
                        :url="project.url"
                    />
                </div>
                
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section id="contact" class="bg-primary px-6 py-16 md:px-10">
        <div
            class="mx-auto flex max-w-screen-xl flex-col items-center justify-center gap-4"
        >
            <h2 class="text-center zoom text-4xl font-bold text-white">
                Let's Collaborate!
            </h2>
            <p class="text-center text-lg text-white">
                Ready to discuss projects, ideas, or just connect? Feel free to
                reach out to me
            </p>
            <ExternalLink :url="`mailto:${profile.email}`" class="mt-4">
                <SecondaryButton>
                    <IconText
                        :icon="'material-symbols:mail'"
                        text="Send email"
                        :iconSize="28"
                    />
                </SecondaryButton>
            </ExternalLink>
        </div>
    </section>
</template>

<style scoped>
.underline-image {
    position: relative;
    display: inline-block;
}

.underline-image::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -30px; /* Adjust this to change the distance from the text */
    height: 30px; /* Adjust this to change the thickness of the underline */
    width: 100%;
    background: url("/public/serez.png"); /* Replace with the path to your image */
    background-repeat: repeat-x;
    background-size: contain;
}
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0;
}
.zoom {
    animation: zoomIn 2s ease-in-out forwards;
}

@keyframes zoomIn {
    from { transform: scale(0.9); opacity: 0.7; }
    to { transform: scale(1); opacity: 1; }
}
.ticker {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    box-sizing: border-box;
    background: #333;
    color: #fff;
    padding: 0.5em;
}

.ticker p {
    display: inline-block;
    animation: scroll-left 10s linear infinite;
}

@keyframes scroll-left {
    0% { transform: translateX(100%); }
    100% { transform: translateX(-100%); }
}


.highlight {
    background: linear-gradient(to right, #378E87, #00524D);
    color: #fff;
    padding: 0.2em 0.4em;
    border-radius: 0.3em;
    display: inline-block;
}
@keyframes zoomIn {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
}

.zoom {
    animation: zoomIn 3s infinite;
}
.flashing-text {
    animation: flash 1s infinite;
}

@keyframes flash {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
}
</style>