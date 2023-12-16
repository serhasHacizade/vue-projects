
<script>
export default {
    props: {
        AddTodo: Function
    },
    setup(props) {

        const NewItem = (event) => {
            props.AddTodo(event.target.value);
            event.target.value = "";
        };
        return {NewItem};
    }
}
</script>

<template>
    <section class="mt-4">
        <input @keydown.enter="NewItem" type="text" placeholder="what is?" class="w-full p-1 bg-gray-700 border-[1px] border-gray-400
        rounded-md outline-none">
    </section>
</template>