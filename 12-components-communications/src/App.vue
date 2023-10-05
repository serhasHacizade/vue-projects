<template>
  <UserSection />

</template>

<script>
import UserSection from "@/components/UserSection.vue"
export default {
  components: {
    UserSection
  },
  data() {
    return {
      provideData : {
        userList: ["Tayfun", "Gökhan", "Murat", "Erne"]
      }
    }
  },
  provide() {
    return {
      userList : this.provideData.userList,
      newItem: this.newItem
    }
  },
  methods: {
    newItem(item) {
      this.provideData.userList.push(item);
    }
  }
}
</script>