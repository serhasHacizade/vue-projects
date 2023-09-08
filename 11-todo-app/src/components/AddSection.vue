<template>
    <label for="todoText"></label>
    <input v-model="todoText" type="text" @keydown.enter="addNewTodo" id="todoText" placeholder="type somethings...">

</template>
<script>
    export default {
        data() {
            return {
                todoText: null
            }
        },
        methods: {
            addNewTodo() {
                this.$emit("add-todo", "Bu benim mesajım");

            }
        }
    }
</script>