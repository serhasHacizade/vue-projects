
import { createRouter, createWebHashHistory } from "vue-router";
import HomeCmp from "./views/Home.vue"
import AboutCmp from "./views/About.vue"
import Detay from "./views/Details.vue"


const routes = [
    {
        name: "HomePage",
        path: "/",
        component: HomeCmp
    },
    {
        name: "AboutPage",
        path: "/hakkimda",
        component: AboutCmp
    },
    {
        name: "DetailPage",
        path: "/detay/:userID",
        component: Detay
    }
];

const router = createRouter({
    routes,
    history : createWebHashHistory()
});

export default router;