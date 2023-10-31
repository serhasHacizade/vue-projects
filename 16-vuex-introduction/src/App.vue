
<template>
  <!-- <ul>
    <li v-for="permission in this.$store.state.permissions" :key="permission">
      {{ permission }}
    </li>
  </ul> -->
  <!-- <ul>
    <li v-for="user in this.$store.state.userList" :key="user">
      {{ user }}
    </li>
  </ul> -->
  <ul>
    <li v-for="(item, index) in woodItems" :key="index">
      {{ item.title }}
    </li>
  </ul>
  {{ $store.state.fullName }}
  <button @click="updateName">FullName bilgisini değiştir...</button>
</template>


<script>

import { mapGetters } from 'vuex';
export default {
  created() {
    // console.log(this.$store.state.permissions);
    // console.log(this.$store.getters.activeUser);
    console.log("This.activeUser :>> ", this.activeUser);
  },
  methods: {
    updateName() {
      this.$store.state.itemList.push({id: 7, title: "Raf", type: "mobilya"});
      // this.$store.state.fullName = "Hacı Mehmet Felek"
    }
  },
  computed: {
    // ... mapGetters(["woodItems", "activeUser"]),
    ...mapGetters({
      woodItems: "_woodItems",
      activeUSer: "_activeUser"
    }),
    // customComputed( {
    // })
  }
}
</script>