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
            },
            coords: {
                x: 0,
                y: 0
            }
        };
    },
    methods: {
        changeTitle(pTitle) {
            this.title = pTitle;
        },
        updateCoords(event) {
            this.changeTitle(`${event.x}, ${event.y}`)
            this.coords = {
                x: event.x,
                y: event.y
            }
        }
    },
}).mount("#app");