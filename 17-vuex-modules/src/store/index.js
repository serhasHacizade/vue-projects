import contact from "./modules/contact";
import taskmanager from "./modules/taskmanager";

import { createStore } from "vuex";

const store = createStore({
    state: {
        mainName: "Eren"
    },
    modules: {
        contact,
        taskmanager
    }
});


export default store;