<template>
    <h3 class="bg-blue text-white">Mavi Component</h3>
    <input type="text">
</template>

<script>
    export default {
        activated() {
            console.log("Blue activated");
        },
        deactivated() {
            console.log("Blue deactivated");
        }
    }
</script>