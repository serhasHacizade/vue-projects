<script >
import Counter from "./composables/Counter.js";
import Header from "./composables/Header.js";
import Toggle from "./composables/Toggle.js";
import Search from "./composables/Search.js";


export default {
  // data() {
  //   return {
  //     title: "Bu bir başlıktır"
  //   }
  // },
  setup() {

    const { counter, oddOrEven } = Counter();
    const { title, titleLengthMessage } = Header();
    const { show, toggleIt } = Toggle();
    const { searchText, isTyping } = Search();

    return {
      title,
      show,
      toggleIt,
      titleLengthMessage,
      counter,
      oddOrEven,
      searchText,
      isTyping
    }
  },
}
</script>

<template>
  <h3>{{ title }}</h3>
  <input type="text" v-model="title">
  {{ titleLengthMessage }}
  <button @click="toggleIt">Toggle</button>
  <p v-if="show">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum asperiores perferendis neque nostrum
    soluta temporibus necessitatibus fuga! Ea, vero, doloribus delectus nobis quod provident earum quaerat quo
    perferendis,
    dolorem tenetur?</p>
  <hr>
  <button @click="counter++">{{ counter }} {{ oddOrEven }}</button>
  <hr>
  <input type="text" v-model="searchText">
  <p v-if="isTyping">Şu an yazıyor...</p>
</template>
