<template>
    <div class="container">
        <ListSection />
        <AddSection/>
      </div>
</template>
<script>
import ListSection from "@/components/ListSection.vue"
import AddSection from "@/components/AddSection.vue"
    export default {
        components: {
            ListSection,
            AddSection
        }
    }
</script>