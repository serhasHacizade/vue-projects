
<template>
  <ul>
    <li v-for="permission in this.$store.state.permissions" :key="permission">
      {{ permission }}
    </li>
  </ul>
  <ul>
    <li v-for="user in this.$store.state.userList" :key="user">
      {{ user }}
    </li>
  </ul>
  {{ $store.state.fullName }}
  <button @click="updateName">FullName bilgisini değiştir...</button>
</template>


<script>
export default {
  created() {
    // console.log(this.$store.state.permissions);
    console.log(this.$store.getters.woodItems);
  },
  methods: {
    updateName() {
      this.$store.state.fullName = "Hacı Mehmet Felek"
    }
  },
}
</script>