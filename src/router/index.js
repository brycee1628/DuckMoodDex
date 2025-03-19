import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../pages/Home.vue";
import DuckMoodDex from "../pages/DuckMoodDex.vue";

const routes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/dex",
        component: DuckMoodDex,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
