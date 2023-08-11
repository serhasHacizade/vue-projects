const app = Vue.createApp({
    data() {
        return {
            search: "",
            itemList: ["elma","armut","kiraz","çilek"],
            filteredLİst: []
        }
    },
    methods: {
        searchList() {
            this.filteredLİst = this.itemList.filter(i => i.includes(this.search))
        }
    },
}).mount("#app");