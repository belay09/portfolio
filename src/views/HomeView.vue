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
const { profile, education, work_experience, projects, certifications, reviews } = data;

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
        class="min-h-screen bg-gray-100/72 dark:bg-gray-950/84 backdrop-blur-[1px] px-6 py-7 md:px-10 md:py-28"
        data-aos="fade-down"
        data-aos-duration="700"
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
                        class="pb-2  text-3xl font-bold text-gray-900 dark:text-gray-100 md:text-5xl"
                    >
                        Hi there! I'm
                        <span
                            class=" block text-primary md:inline dark:text-primary-content"
                            >{{ profile.name }}</span
                        >
                    </h1>
                </header>
                <p class="section-paragraph text-center lg:text-left text-base leading-8 text-slate-700 dark:text-slate-200">
                    {{ profile.bio }}
                </p>
                <div class="flex flex-wrap items-center justify-center gap-2 lg:justify-start">
                    <span class="rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary dark:bg-primary/20 dark:text-primary-content">🏅 Top Rated Plus</span>
                    <span class="rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary dark:bg-primary/20 dark:text-primary-content">✅ 100% Job Success</span>
                    <span class="rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary dark:bg-primary/20 dark:text-primary-content">🚀 Top 3% Talent</span>
                </div>
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

        <!-- Client Feedback -->
        <div
            v-if="reviews?.length"
            class="feedback-panel relative mx-auto mt-12 max-w-screen-xl overflow-hidden rounded-3xl  px-5 py-8 shadow-sm backdrop-blur-md md:px-8"
        >
            <span class="feedback-orb feedback-orb-one" aria-hidden="true"></span>
            <span class="feedback-orb feedback-orb-two" aria-hidden="true"></span>

            <div class="relative z-10 mb-7 flex flex-col items-center gap-3 text-center md:items-start md:text-left">
                <span class="feedback-badge inline-flex items-center gap-2 rounded-full bg-primary/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-primary dark:bg-primary/20 dark:text-primary-content">
                    💬 Client Feedback from Upwork
                </span>
                <h2 class="text-2xl font-bold text-slate-900 dark:text-slate-100 md:text-3xl">
                    Real words from real Upwork clients
                </h2>
                <p class="max-w-2xl text-sm text-slate-600 dark:text-slate-300 md:text-base">
                    These are verified client reviews from my Upwork profile. You can open my profile anytime to see the full feedback history.
                </p>
                <ExternalLink
                    v-if="profile.upwork_url"
                    :url="profile.upwork_url"
                    class="upwork-cta relative inline-flex overflow-hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-primary-dark"
                >
                    View these reviews on my Upwork profile →
                </ExternalLink>
            </div>

            <!-- <div class="relative z-10 mb-6 overflow-hidden rounded-full bg-primary/10 py-2 dark:bg-primary/15">
                <div class="feedback-marquee flex w-max gap-3 whitespace-nowrap px-3 text-xs font-semibold text-primary dark:text-primary-content">
                    <span v-for="n in 2" :key="n" class="flex gap-3">
                        <span>⭐ 5.0 Client Rating</span>
                        <span>•</span>
                        <span>✅ Verified Upwork Reviews</span>
                        <span>•</span>
                        <span>🏅 Top Rated Plus</span>
                        <span>•</span>
                        <span>💯 100% Job Success</span>
                        <span>•</span>
                        <span>🤝 Trusted by Clients</span>
                        <span>•</span>
                    </span>
                </div>
            </div> -->

            <div class="relative z-10 grid gap-5 md:grid-cols-2 md:gap-6">
                <article
                    v-for="(review, index) in reviews"
                    :key="review.title"
                    class="feedback-card relative overflow-hidden rounded-2xl bg-white/90 p-6 text-left shadow-lg backdrop-blur-md dark:bg-slate-950/70"
                    :class="index === 1 ? 'feedback-card-delay' : ''"
                >
                    <div class="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-primary to-primary-dark"></div>
                    <div class="feedback-quote absolute right-4 top-2 text-6xl font-serif leading-none text-primary/25 dark:text-primary-content/25">
                        “
                    </div>

                    <div class="verified-chip mb-3 inline-flex items-center gap-2 rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary dark:bg-primary/20 dark:text-primary-content">
                        ✅ Verified on Upwork
                    </div>

                    <div class="mb-2 flex flex-wrap items-center gap-2 text-sm">
                        <span class="star-twinkle font-semibold text-primary">★★★★★</span>
                        <span class="font-semibold text-slate-800 dark:text-slate-100">{{ review.rating.toFixed(1) }}</span>
                        <span class="text-slate-400">|</span>
                        <span class="text-slate-500 dark:text-slate-300">{{ review.period }}</span>
                    </div>

                    <p class="mb-2 text-sm font-semibold text-slate-900 dark:text-slate-100">
                        {{ review.title }}
                    </p>
                    <p class="text-sm leading-7 text-slate-600 dark:text-slate-200">
                        “{{ review.quote }}”
                    </p>

                    <div class="mt-4 flex flex-wrap gap-2">
                        <span
                            v-for="tag in review.tags"
                            :key="tag"
                            class="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary transition hover:scale-105 dark:bg-primary/20 dark:text-primary-content"
                        >
                            {{ tag }}
                        </span>
                    </div>
                </article>
            </div>

            <div class="relative z-10 mt-7 flex justify-center md:justify-start">
                <ExternalLink
                    v-if="profile.upwork_url"
                    :url="profile.upwork_url"
                    class="text-sm font-semibold text-primary underline underline-offset-4 dark:text-primary-content"
                >
                    See more client feedback on Upwork
                </ExternalLink>
            </div>
        </div>
    </section>

    <section
        id="about"
        class="bg-primary-light/72 dark:bg-gray-950/84 backdrop-blur-[1px] px-6 py-7 md:px-10 md:py-12"

    >
        <div
        class="mx-auto flex max-w-screen-xl flex-col gap-14 md:flex-row md:justify-between lg:gap-20"
        >
            <!-- About Me Section -->
            <div class="md:max-w-1/2 flex w-full flex-col gap-14"
            data-aos="fade-right"
            data-aos-duration="700">
                <SectionTitle
                    class="mb-6 text-center text-3xl font-bold md:text-left"
                    >✨ About Me</SectionTitle
                >
                <p class="section-paragraph mb-6 text-center md:text-left text-slate-700 dark:text-slate-200">
                    💼 I help businesses turn ideas into modern web products
                    with tailored solutions, responsive user experiences, and
                    efficient backend systems. My approach combines clean code,
                    clear communication, and on-time delivery ⏱️, with ongoing
                    support 🔧 to keep projects fast, secure, and maintainable.
                    I am passionate about future-proof solutions and long-term
                    collaborations that create real business impact.
                </p>
                <p class="section-paragraph text-center md:text-left text-slate-700 dark:text-slate-200">
                    ✅ 100% Job Success &nbsp; • &nbsp; 🌟 Top Rated Plus &nbsp; • &nbsp; 🚀 Top 3% Talent
                </p>
            </div>
            <!-- Technologies Section -->
            <div class="md:max-w-1/2 flex w-full flex-col gap-14"
             data-aos="fade-left"
        data-aos-duration="700">
                <SectionTitle
                    class="pb-8"
                    >💻 Technologies I Love Working With</SectionTitle
                >
                <ul
                    class="flex flex-wrap justify-center gap-4 text-lg text-gray-600 md:justify-start"
                >
                    <li class="rounded-lg bg-white px-4 py-2 shadow-md dark:bg-slate-800 dark:text-slate-100">
                        Vue.js
                    </li>
                    <li class="rounded-lg bg-white px-4 py-2 shadow-md dark:bg-slate-800 dark:text-slate-100">
                        Nuxt.js
                    </li>
                    <li class="rounded-lg bg-white px-4 py-2 shadow-md dark:bg-slate-800 dark:text-slate-100">
                        Tailwind CSS
                    </li>
                    <li class="rounded-lg bg-white px-4 py-2 shadow-md dark:bg-slate-800 dark:text-slate-100">
                        TypeScript
                    </li>
                    <li class="rounded-lg bg-white px-4 py-2 shadow-md dark:bg-slate-800 dark:text-slate-100">
                        JavaScript
                    </li>
                    <li class="rounded-lg bg-white px-4 py-2 shadow-md dark:bg-slate-800 dark:text-slate-100">
                        Laravel
                    </li>
                    <li class="rounded-lg bg-white px-4 py-2 shadow-md dark:bg-slate-800 dark:text-slate-100">
                        PHP
                    </li>
                    <li class="rounded-lg bg-white px-4 py-2 shadow-md dark:bg-slate-800 dark:text-slate-100">
                        Node.js
                    </li>
                    <li class="rounded-lg bg-white px-4 py-2 shadow-md dark:bg-slate-800 dark:text-slate-100">
                        ExpressJS
                    </li>
                    <li class="rounded-lg bg-white px-4 py-2 shadow-md dark:bg-slate-800 dark:text-slate-100">
                        GraphQL
                    </li>
                    <li class="rounded-lg bg-white px-4 py-2 shadow-md dark:bg-slate-800 dark:text-slate-100">
                        PostgreSQL
                    </li>
                    <li class="rounded-lg bg-white px-4 py-2 shadow-md dark:bg-slate-800 dark:text-slate-100">
                        MySQL
                    </li>
                    <li class="rounded-lg bg-white px-4 py-2 shadow-md dark:bg-slate-800 dark:text-slate-100">
                        MongoDB
                    </li>
                    <li class="rounded-lg bg-white px-4 py-2 shadow-md dark:bg-slate-800 dark:text-slate-100">
                        Git
                    </li>
                    <li class="rounded-lg bg-white px-4 py-2 shadow-md dark:bg-slate-800 dark:text-slate-100">
                        ApexCharts
                    </li>
                </ul>
            </div>
        </div>
    </section>

    <!-- About -->
    <section
        id="experiance"
        class="bg-primary-light/72 dark:bg-gray-950/84 backdrop-blur-[1px] px-6 py-7 md:px-10 md:py-12"
    >
        <div
            class="mx-auto flex max-w-screen-xl flex-col gap-14 md:flex-row md:justify-between lg:gap-20"
        >
            <!-- Background -->
            <div class="md:max-w-1/2 flex w-full flex-col gap-14"
            data-aos="fade-right"
            data-aos-duration="700">
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
                        class="mb-6 text-gray-700 dark:text-gray-300"
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
            data-aos-duration="700">
                <SectionTitle class="pb-8">Work Experience</SectionTitle>
                <TimelineList :activities="work_experience" />
            </div>
        </div>
    </section>
    <!-- Projects -->
    <section
        id="projects"
        class="bg-gray-100/72 dark:bg-gray-950/84 backdrop-blur-[1px] px-6 pb-20 pt-7 md:px-10 md:pb-24 md:pt-12"
       >
        <div class="mx-auto max-w-screen-xl">
            <SectionTitle>Project Showcase</SectionTitle>
            <p class="section-paragraph pt-3 text-slate-700 dark:text-slate-200">
                These are projects I've developed, providing effective solutions
                to diverse problems.
            </p>

            <div class="flex flex-col items-center pt-8" >
                <div class="grid gap-x-7 gap-y-7 pt-3 md:grid-cols-2 lg:grid-cols-3"
                >
                    <ProjectCard
                        v-for="project in projects"
                        :key="project.title"
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
    <section id="contact" class="bg-primary/88 dark:bg-gray-900/88 backdrop-blur-sm px-6 py-16 md:px-10">
        <div
            class="mx-auto flex max-w-screen-xl flex-col items-center justify-center"
        >
            <div class="w-full max-w-3xl rounded-2xl bg-white/55 dark:bg-slate-900/45 px-6 py-10 text-center shadow-lg backdrop-blur-md md:px-10">
            <h2 class="text-center zoom text-4xl font-bold text-slate-900 dark:text-white drop-shadow-sm">
                Let's Collaborate!
            </h2>
            <p class="section-paragraph mt-2 text-center font-medium text-slate-700 dark:text-slate-100">
                Ready to discuss projects, ideas, or just connect? Feel free to
                reach out to me
            </p>
            <div class="mt-5 flex justify-center">
            <ExternalLink :url="`mailto:${profile.email}`">
                <SecondaryButton class="bg-white text-primary hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
                    <IconText
                        :icon="'material-symbols:mail'"
                        text="Send email"
                        :iconSize="28"
                    />
                </SecondaryButton>
            </ExternalLink>
            </div>
            </div>
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

.section-paragraph {
    font-size: 1rem;
    line-height: 1.9;
}

.section-paragraph-inverse {
    color: rgba(255, 255, 255, 0.92);
}

@media (min-width: 768px) {
    .section-paragraph {
        font-size: 1.06rem;
    }
}

.feedback-orb {
    position: absolute;
    border-radius: 9999px;
    filter: blur(40px);
    opacity: 0.35;
    pointer-events: none;
    animation: feedback-float 8s ease-in-out infinite;
}

.feedback-orb-one {
    width: 10rem;
    height: 10rem;
    top: -2rem;
    right: 10%;
    background: radial-gradient(circle, rgba(55, 142, 135, 0.45), transparent 70%);
}

.feedback-orb-two {
    width: 8rem;
    height: 8rem;
    bottom: 1rem;
    left: 8%;
    background: radial-gradient(circle, rgba(0, 82, 77, 0.35), transparent 70%);
    animation-delay: -3s;
}

.feedback-badge {
    animation: soft-pulse 2.8s ease-in-out infinite;
}

.feedback-marquee {
    animation: marquee-scroll 18s linear infinite;
}

.feedback-card {
    animation: card-float 5.5s ease-in-out infinite;
}

.feedback-card-delay {
    animation: card-float-offset 5.5s ease-in-out infinite;
    animation-delay: -2.5s;
}

.feedback-quote {
    animation: quote-bob 3.5s ease-in-out infinite;
}

.verified-chip {
    animation: soft-pulse 2.4s ease-in-out infinite;
}

.star-twinkle {
    animation: star-glow 2s ease-in-out infinite;
}

.upwork-cta::after {
    content: "";
    position: absolute;
    inset: 0;
    transform: translateX(-120%);
    background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.35), transparent);
    animation: cta-shine 3.2s ease-in-out infinite;
}

@keyframes feedback-float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(12px); }
}

@keyframes soft-pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.03); }
}

@keyframes marquee-scroll {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
}

@keyframes card-float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
}

@keyframes card-float-offset {
    0%, 100% { transform: translateY(1rem); }
    50% { transform: translateY(calc(1rem - 8px)); }
}

@keyframes quote-bob {
    0%, 100% { transform: translateY(0); opacity: 0.25; }
    50% { transform: translateY(-4px); opacity: 0.45; }
}

@keyframes star-glow {
    0%, 100% { opacity: 0.85; letter-spacing: 0; }
    50% { opacity: 1; letter-spacing: 0.5px; }
}

@keyframes cta-shine {
    0%, 55% { transform: translateX(-120%); }
    100% { transform: translateX(120%); }
}

@media (prefers-reduced-motion: reduce) {
    .feedback-orb,
    .feedback-badge,
    .feedback-marquee,
    .feedback-card,
    .feedback-quote,
    .verified-chip,
    .star-twinkle,
    .upwork-cta::after {
        animation: none;
    }

    .feedback-card-delay {
        transform: translateY(1rem);
    }
}
</style>