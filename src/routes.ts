import AboutPage from "./pages/AboutPage.vue";
import ContactPage from "./pages/ContactPage.vue";
import HomePage from "./pages/HomePage.vue";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage.vue";


const routes = [
    { path: "/", component: HomePage },
    { path: "/about", component: AboutPage },
    { path: "/contact", component: ContactPage },
    { path: "/privacy-policy", component: PrivacyPolicyPage },
];

export default routes;