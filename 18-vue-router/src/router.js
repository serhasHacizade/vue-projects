
import { createRouter, createWebHistory } from "vue-router";
import HomeCmp from "./views/Home.vue"
import AboutCmp from "./views/About.vue"
import Detay from "./views/Details.vue"


const routes = [
    {
        path: "/",
        component: HomeCmp
    },
    {
        path: "/hakkimda",
        component: AboutCmp
    },
    {
        path: "/detay/:userID",
        component: Detay
    }
];

const router = createRouter({
    routes,
    history : createWebHistory()
});

export default router;