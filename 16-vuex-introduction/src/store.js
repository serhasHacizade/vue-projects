import { createStore } from "vuex";

const store = createStore({
    state: {
        person: {
            name: "Eren",
            lname: "Salih",
            age: 22
        },
        fullName: "Erne Salih",
        theme: "dark",
        permissions: [1, 2, 3, 4, 5],
        userList: ["Gökhan", "Tayfun", "İlker", "Ramazan", "Defne", "Kamil", "Cemil"],
        itemList: [
            {id: 1, title: "Masa", type: "mobilya"},
            {id: 2, title: "Sandalye ", type: "mobilya"},
            {id: 3, title: "Koltuk", type: "mobilya"},
            {id: 4, title: "TV", type: "elektronik"},
            {id: 5, title: "Monitor", type: "elektronik"},
            {id: 6, title: "Bardak", type: "plastik"},
        ]
    },
    getters: {
        woodItems : state => state.itemList.filter(i => i.type === "mobilya")
    }
});

export default store;