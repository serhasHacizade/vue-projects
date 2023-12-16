<script>
import todoListItem from './todoListItem.vue';
import Summary from './Summary.vue';

import { computed } from 'vue';

export default {
        components: {
            todoListItem,
            Summary
        },
        props: {
            todoList: Array,
        },
        setup(props) {
            const todoLength = computed(() => props.todoList.length);
            return { todoLength }
        }
}
</script>

<template>
    <section class="mt-4">
        <todoListItem @delete-event="$emit('delete-event', $event)" v-for="todoItem in todoList" :key="todoItem.id" :todo="todoItem" />
        <small> {{ todoLength }} item remaining</small>
        <Summary :todoList="todoList" />
    </section>
</template>