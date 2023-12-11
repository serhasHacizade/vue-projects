import { ref, computed } from 'vue';


const Header = () => {
    const title = ref("Bu bir setup başlıktır");
   // const titleLengthMessage = computed(() => {
    //   return title.value.length + " adet karakter vardır"
    // });

    const titleLengthMessage = computed(() => title.value.length + " adet karakter vardır");

    return {title, titleLengthMessage};
}

export default Header;