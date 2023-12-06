<script>
import { ref, computed } from 'vue';

export default {
  data() {
    return {
      title: "Bu bir başlıktır"
    }
  },
  setup() {
    const title = ref("Bu bir setup başlıktır");
    const show = ref(false);

    const toggleIt = () => {
      show.value = !show.value;
    }

    // const titleLengthMessage = computed(() => {
    //   return title.value.length + " adet karakter vardır"
    // });
    
    const titleLengthMessage = computed(() => title.value.length + " adet karakter vardır");
    console.log('titleLengthMessage :>> ', titleLengthMessage);
    return {
      title,
      show,
      toggleIt,
      titleLengthMessage
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
    soluta temporibus necessitatibus fuga! Ea, vero, doloribus delectus nobis quod provident earum quaerat quo perferendis,
    dolorem tenetur?</p>

</template>
