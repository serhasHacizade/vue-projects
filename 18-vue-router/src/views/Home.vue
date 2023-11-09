
<template>
    <h1>Home</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quos debitis eaque sunt deserunt consectetur,
        natus beatae ad modi. Temporibus veritatis debitis necessitatibus porro animi voluptates vitae, totam voluptatibus
        atque!</p>
    <input type="text" @keydown.enter="goToDetails">
</template>

<script>
export default {
    methods: {
        goToDetails(e) {
            this.$router.push({
                name: "DetailPage",
                params: { userID: e.target.value },
                query: {
                    type: "DetailAuth",
                    user: "ErneSalih"
                }
            })
        }
    },
}
</script>