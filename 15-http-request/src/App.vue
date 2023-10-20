<template>
  <div class="container">
    <h3>Alışveriş listesi</h3>
    <hr />
    <div class="my-2">
      <input type="text" placeholder="ne alacaksın?" @keydown.enter="onSave">
    </div>
    <ul>
      <li v-for="item in itemsList" :key="item.id" class="d-flex justify-content-between align-items-center">
        <span>{{ item.title }}</span>
        <button @click="onDelete(item)" class="sm red">Sil</button>
      </li>
    </ul>
    <small class="text-blue d-flex justify-content-end align-item-center">{{ itemCount }} adet alınacak var</small>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      itemsList: []
    }
  },
  mounted() {
    axios.get("http://localhost:3000/items").then(items_response => {
      this.itemsList = items_response.data || [];
    })
  },
  methods: {
    onSave(e) {
      const saveObject = {
        title: e.target.value,
        created_at: new Date(),
        completed: false
      }
      axios.post("http://localhost:3000/items", saveObject).then(save_response => {
        console.log("Save_response => ", save_response);
        this.itemsList.push(save_response.data);
        e.target.value = "";
        e.target.focus();
      })
    },
    onDelete(item) {
      axios.delete(`http://localhost:3000/items/${item.id}`).then(delete_response => {
        console.log("Delete_response => ", delete_response);
        this.itemsList = this.itemsList.filter(i => i.id !== item.id);
      })
    }
  },
  computed: {
    itemCount() {
      return this.itemsList.length || 0
    }
  }
}
</script>