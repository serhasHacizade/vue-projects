import { ref, computed, watch } from 'vue';


const Counter = () => {
    const counter = ref(0);

    const oddOrEven = computed(() => counter.value % 2 === 0 ? "Çift" : "Tek");

    watch([counter, oddOrEven], ([newG, newO], [oldG, oldO]) => {
      console.log(oldO + " => " + newO);
    }, { deep: true });

    return {counter, oddOrEven};
};

export default Counter