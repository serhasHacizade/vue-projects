<template>
    <button @click="updateName">Yeni item ekle</button>
</template>


<script>

export default {
    methods: {
        updateName() {
            const userData = { id: new Date().getTime(), title: "Raf" + new Date().getTime(), type: "mobilya" };
            // this.$store.commit("newItem", userData)
            // this.$store.state.fullName = new Date().getTime();
            this.$store.dispatch("NewItem", userData);
        }
    }
}
</script>