import { ref, onMounted } from 'vue';



const Utils = () => {
    const title = ref("Başlık");
    const counter = ref(0);

    const inc = () => counter.value++;


    const alertMe = (info) => {
        console.log(info);
    };

    onMounted(() => {
        console.log("This is here when mounted");
    });

    return { title, counter, inc, alertMe };
}

export default Utils;