<template>
    <!-- <ul>
        <li v-for="todoItem in todoList" :key="todoItem.id" class="d-flex justify-content-between align-items">
            <span>#{{ todoItem.text }}</span>
            <button @click="deleteItem(todoItem)" class="sm red">Sil</button>
        </li>
    </ul> -->
    <TodoListItem v-for="todoItem in myData" :key="todoItem.id" :item="todoItem" />
</template>

<script>
    import TodoListItem from "@/components/TodoListItem.vue"
    export default {
        props: ["myData"],
        components : {
            TodoListItem
        }
    }
</script> 