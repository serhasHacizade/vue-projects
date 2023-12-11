import { ref } from 'vue';


const Toggle = () => {
    const show = ref(false);

    const toggleIt = () => {
      show.value = !show.value;
    }

    return {show, toggleIt};
};

export default Toggle;