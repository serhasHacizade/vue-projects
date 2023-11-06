
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
  
  <!-- {{ $store.state.fullName }} -->

  <UserList />
  <NewUser />

</template>


<script>
import UserList from './components/UserList.vue';
import NewUser from "./components/NewUser.vue";

export default {
  components: {
    NewUser,
    UserList
  }
}
</script>