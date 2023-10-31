import { createStore } from "vuex";

const store = createStore({
    state: {
        user: {
            name: "Eren",
            lname: "Salih",
            age: 22,
            address: {},
            password: 1231232123,
            tc: 11111,            
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
        _woodItems : state => state.itemList.filter(i => i.type === "mobilya"),
        _activeUser(state) {
            const user = { ...state.user };
            delete user.password;
            return user;
        }
    }
});

export default store;