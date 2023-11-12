<template>
    <div class="card border p-2">
        <div class="d-flex justify-content-end">
            <button class="btn btn-primary btn-sm" @click="$router.push({name: 'NewBookmark'})">+ Add</button>
        </div>
        <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">URL</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="i in 10" :key="i">
                <th scope="row">{{ i }}</th>
                <td>Vue3 document</td>
                <td>https://v3.vue.js.org</td>
                <td>
                    <button class="btn btn-sm btn-danger">Delete</button>
                </td>
              </tr>
              
            </tbody>
          </table>
    </div>
</template>