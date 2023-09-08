<template>
    <div class="container">
        <ListSection :userList="userList" />
        <AddSection @new-item="$emit('new-item', $event)" />
      </div>        
</template>


<script>
import ListSection from "@/components/ListSection.vue"
import AddSection from "@/components/AddSection.vue"
    export default {
        props: ["userList"],
        components: {
            ListSection,
            AddSection
        }
    }
</script>