<template>
  <!-- <Modal :onSave="onSave" :title="'Modal Title'" :content="'lorem ipsum dolor sit amet'"/> -->
  <Modal>
    <template #title>
      <h3>Slot ile gelen title bilgisi</h3>
    </template>
    <template #content>
      <p class="text-green">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo aliquam quod earum praesentium similique. Enim quas
        quibusdam, assumenda perferendis velit earum id, magni sed officiis ab modi alias ullam impedit.</p>
    </template>
    <template #default>
      bu default olarak gösterilecek
    </template>
  </Modal>
</template>
<script>
import Modal from './components/Modal-comp.vue';
export default {
  components: {
    Modal
  },
  methods: {
    onSave() {
      alert("Saved!!");
    }
  }
}
</script>