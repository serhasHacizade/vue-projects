<template>
  <UserSection :userList="userList"  @new-item="userList.push($event)"/>

</template>

<script>
import UserSection from "@/components/UserSection.vue"


export default {
  components: {
    UserSection
  },
  data() {
    return {
      userList: ["Tayfun", "Gökhan", "Murat", "Erne"]
    }
  },
}
</script>