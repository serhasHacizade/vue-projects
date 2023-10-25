import { createStore } from "vuex";

const store = createStore({
    state: {
        person: {
            name: "Eren",
            lname: "Salih",
            age: 22
        },
        theme: "dark",
        permissions: [1, 2, 3, 4, 5]
    }
});

export default store;