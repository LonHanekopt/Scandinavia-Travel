import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage";
import SwedenPage from "@/views/SwedenPage";
import FinlandPage from "@/views/FinlandPage.vue";
import ContactUsPage from "@/views/ContactUsPage";
import infoPageTemaplate from "@/components/templates-layouts/infoPageTemplate";
import hotelSearchTemplate from "@/components/templates-layouts/hotelSearchTemplate";
import DenmarkPage from "./views/DenmarkPage.vue";
import NorwayPage from "./views/NorwayPage.vue";
import PrivacyPolicy from "./views/policies/PrivacyPolicy.vue";
import CookiesPolicy from "./views/policies/cookiesPolicy.vue";
import TermsofService from "./views/policies/TermsofService.vue";

// import notfound from "@/views/404NotFound";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomePage,
            alias: '/',
            name: 'home'
        },
        {
            path: '/sweden',
            component: SwedenPage,
        },
        {
            path: '/finland',
            component: FinlandPage,
        },
        {
            path: '/denmark',
            component: DenmarkPage,
        },
        {
            path: '/norway',
            component: NorwayPage,
        },
        {
            path: '/hotels',
            component: hotelSearchTemplate,
            name: 'hotels'
        },
        {
            path: '/travel-info',
            component: infoPageTemaplate,
            name: 'travel'
        },
        {
            path: '/contact',
            component: ContactUsPage,
            name: 'contact'
        },
        {
            path: '/privacy',
            component: PrivacyPolicy,
        },
        {
            path: '/terms',
            component: TermsofService,
        },
        {
            path: '/cookie',
            component: CookiesPolicy,
        }
    ],
    linkActiveClass: 'active',
    linkExactActiveClass: 'active'
})

export default router;