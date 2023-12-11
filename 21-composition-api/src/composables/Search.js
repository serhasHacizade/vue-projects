import { ref, watchEffect } from 'vue';


const Search = () => {
    
    const searchText = ref("");
    const isTyping = ref(false);

    // watch(searchText, () => {
    //   if (searchText.value.length > 0) {
    //     isTyping.value = true;
    //     setTimeout(() => {
    //       isTyping.value = false;
    //     }, 1500); 
    //   }
    // });

    const stop = watchEffect((onInvalidate) => {
      if (searchText.value.length > 0) {
        isTyping.value = true;
        const typing = setTimeout(() => {
          isTyping.value = false;
          stop();
        }, 1500);

        onInvalidate(() => clearTimeout(typing));
      }
    });

    return {searchText, isTyping};
};

export default Search;