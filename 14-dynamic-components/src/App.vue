<template>
  <div class="container">
    <div class="d-flex justify-content-between align-items-center">
      <button class="red" @click="activeComponent = 'Red'">Red</button>
      <button class="green" @click="activeComponent = 'Green'">Green</button>
      <button class="blue" @click="activeComponent = 'Blue'">Blue</button>
    </div>
    <!-- <Red v-if="activeComponent == 'Red'" class="mb-2" />
    <Green v-if="activeComponent == 'Green'" class="mb-2" />
    <Blue v-if="activeComponent == 'Blue'" class="mb-2" /> -->
    <keep-alive>
      <component :is="activeComponent" msg="Kırmızı component">
        <h3 class="bg-green text-white">Yeşil Component</h3>
      </component>
    </keep-alive>
  </div>
</template>

<script>
import Red from './components/Red-comp.vue';
import Blue from './components/Blue-comp.vue';
import Green from './components/Green-comp.vue';

export default {
  components: {
    Red,
    Blue,
    Green
  },
  data() {
    return {
      activeComponent: "Red"
    }
  },
}
</script>