<script>
import addSection from "./components/addSection.vue"
import todoList from "./components/todoList.vue"

import { ref } from "vue";

export default {
  components: {
    addSection,
    todoList,
  },
  setup() {

    const todoList = ref([]);
    const AddTodo = (todoText) => {
      todoList.value.push({
        id: new Date().getTime(),
        title: todoText,
      });
    };


    const deleteItem = (todo) => {
      todoList.value = todoList.value.filter((t) => t.id !== todo.id);
    };
    return { todoList, AddTodo, deleteItem };
  }
}
</script>

<template>
  <div class="w-screen h-screen bg-gray-400 pt-10">
    <div class="bg-gray-700 rounded-md shadow-md text-white w-1/3 mx-auto p-3">
      <h3 class="text-center text-2xl">TodoList</h3>
      <addSection :AddTodo="AddTodo" />
      <todoList @delete-event="deleteItem" :todoList="todoList" />
    </div>
  </div>
</template>