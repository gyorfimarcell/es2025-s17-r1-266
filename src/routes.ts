import HomePage from "./pages/HomePage.vue";
import AboutPage from "./pages/AboutPage.vue";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage.vue";


const routes = [
    { path: "/", component: HomePage },
    { path: "/about", component: AboutPage },
    { path: "/privacy-policy", component: PrivacyPolicyPage },
];

export default routes;