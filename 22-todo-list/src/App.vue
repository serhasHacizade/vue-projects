<script>
export default {

}
</script>

<template>
  <div class="w-screen h-screen bg-gray-400 pt-10">
    <div class="bg-gray-700 rounded-md shadow-md text-white w-1/3 mx-auto p-3">
      <h3 class="text-center text-2xl">TodoList</h3>
      <section class="mt-4">
        <input type="text" placeholder="what is?" class="w-full p-1 bg-gray-700 border-[1px] border-gray-400
        rounded-md outline-none">
      </section>
      <section class="mt-4">
        <div class="flex justify-between items-center even:bg-gray-500 px-2 p-1">
          <label for="completed">
            <input type="checkbox" id="completed" class="mr-1">
            <span class="text-lg">Todo1</span>
          </label>
          <button class="bg-indigo-500 px-3 py-1 rounded-md active:bg-indigo-800" >Sil</button>
        </div>
        <div>
          <div class="text-green-300">Done</div>
          <div class="text-red-400">Not done</div>
        </div>
      </section>
    </div>
  </div>
</template>