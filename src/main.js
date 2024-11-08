import "./assets/main.css";
import "./assets/loading.css"; // Import loading spinner styles

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';

const app = createApp(App);

app.use(router);

app.mount("#app");
AOS.init(); // Initialize AOS

