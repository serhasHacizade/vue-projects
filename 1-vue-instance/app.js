const app = Vue.createApp({
    data() {
        return {
            title: "Vue.js Bootcamp 1.gün",
            content: "Lorem ipsum",
            facebook: {
                title: "Facebook",
                target: "_blank",
                url: "https://www.facebook.com",
                alt: "Facebook alt"
            }
        };
    },
    methods: {
        changeTitle() {
            alert()
        }
    },
}).mount("#app");