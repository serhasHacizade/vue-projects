<script setup>
// import Todos from './components/Todos.vue';
// import Users from './components/Users.vue';
import { defineAsyncComponent, onErrorCaptured, ref } from 'vue';

const err = ref(null);
const Todos = defineAsyncComponent(() => import('./components/Todos.vue'));
const Users = defineAsyncComponent(() => import('./components/Users.vue'));
onErrorCaptured((e) => {
  err.value = e;
  return true;
});
</script>

<template>
  <span v-if="err" class="error">{{ err }}</span>
  <suspence v-else>
    <template #default>
      <div>
        <Users />
        <hr>
        <Todos />
      </div>
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </suspence>
  <!-- <Users />
  <hr> -->
</template>


<style>
.error {
  color: red;
  font-size: 20px;
}
</style>