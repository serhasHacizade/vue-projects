const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            counter2: 0
        }
    },
    computed: {
        getCounterResult() {
            return this.counter > 5 ? "BÜYÜK" : "KÜÇÜK"
        },
        getCounter2Result() {
            return this.counter2 > 5 ? "BÜYÜK" : "KÜÇÜK"
        }
    },
    watch: {
        counter(newValue, oldValue) {
            console.log(oldValue + "=>" + newValue);
        }
    }
}).mount("#app");