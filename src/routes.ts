import AboutPage from "./pages/AboutPage.vue";
import ContactPage from "./pages/ContactPage.vue";
import HomePage from "./pages/HomePage.vue";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage.vue";


const routes = [
    {
        path: "/",
        component: HomePage,
    },
    {
        path: "/about",
        component: AboutPage,
        meta: {
            title: "About Us - DineEase"
        }
    },
    {
        path: "/contact",
        component: ContactPage,
        meta: {
            title: "Contact Us - DineEase"
        }
    },
    {
        path: "/privacy-policy",
        component: PrivacyPolicyPage,
        meta: {
            title: "Privacy Policy - DineEase"
        }
    },
];

export default routes;