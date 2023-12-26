<script setup>
import { ref, reactive, watch } from "vue";

import oddOrEven from "./components/oddOrEven.vue";
import Utils from "./components/composables/Utils";

const { title, counter, inc, alertMe } = Utils();

const state = reactive({
  personal: {
    name: "Felakettin",
    lname: null
  }
});

watch(() => JSON.parse(JSON.stringify(state.personal)), (newPersonal, oldPersonal) => {
  console.log(oldPersonal);
  console.log(newPersonal);
});

</script>

<template>
  <h3>{{ title }}</h3>
  <input type="text" v-model="title">
  <button @click="inc">{{ counter }}</button>
  <hr>
  <oddOrEven :counter="counter" @odd-event="alertMe" />

  <input type="text" v-model="state.personal.name">
  <input type="text" v-model="state.personal.lname">


</template>