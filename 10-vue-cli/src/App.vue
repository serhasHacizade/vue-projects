<template>
  <AppHeader></AppHeader>
  <div class="container">
    <h3>Bu benim ilk vue cli uygulamam</h3>
    <p>Bu benim ilk vue cli uygulamam</p>
  </div>
  <CounterItem />
</template>

<script>
  import CounterItem from './components/CounterItem.vue';
  export default {
    components: {
      CounterItem: CounterItem
    }
  }

</script>