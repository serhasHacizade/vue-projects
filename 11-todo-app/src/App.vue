<template>
  <div class="container">
    <h3 class="text-center">Todo List</h3>
    <hr class="my-2">
    <AddSection @add-todo="addNewTodo" />
    <TodoList :myData="todoList" />
    <ResultBar />
  </div>
</template>

<script>
import AddSection from "@/components/AddSection.vue"
import TodoList from "@/components/TodoList.vue"
import ResultBar from "@/components/ResultBar.vue"
export default {
  components: {
    AddSection,
    TodoList,
    ResultBar
  },
  created() {
    setTimeout(() => {
      this.todoList = [
        { id: 1, text: "Bootcamp 1" },
        { id: 2, text: "Bootcamp 2" },
        { id: 3, text: "Bootcamp 3" },
        { id: 4, text: "Bootcamp 4" },
        { id: 5, text: "Bootcamp 5" },
        { id: 6, text: "Bootcamp 6" }
      ]
    })
  },
  data() {
    return {
      todoList: []
    }
  },
  methods: {
    deleteItem(todoItem) {
      this.todoList = this.todoList.filter(t => t !== todoItem)
    },
    addNewTodo(event) {
      console.log(event);
      
    }
  }
}

</script>