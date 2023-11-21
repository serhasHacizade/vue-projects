import { createApp } from 'vue'
import App from './App.vue'
import axios from "axios";

import router from "./router.js"
import { appAxios } from "./utils/appAxios.js"

const app = createApp(App)

app.use(router);
app.config.globalProperties.$axios = axios;
app.config.globalProperties.$appAxios = appAxios
app.mount('#app')
