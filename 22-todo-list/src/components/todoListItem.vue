
<script>
export default {
    props: {
        todo: Object,
    },
    setup(props, { emit }) {
        const deleteItem = () => {
            emit("delete-event", props.todo);

        };

        return { deleteItem };
    }
}
</script>


<template>
    <div class="flex justify-between items-center even:bg-gray-500 px-2 p-1">
        <label :for="`todo_${todo.id}_completed`">
            <input v-model="todo.completed" type="checkbox" :id="`todo_${todo.id}_completed`" class="mr-1">
            <span class="text-lg">{{ todo.title }}</span>
        </label>
        <button @click="deleteItem" class="bg-indigo-500 px-3 py-1 rounded-md active:bg-indigo-800">Sil</button>
    </div>
</template>
