<script>
export default {
    data() {
        return {
            joined: false,
            currentUser: ""
        }
    },
    methods: {
        join() {
            this.joined = true
            console.log(this.currentUser);
        },
        sendMessage() {
            console.log(this.text);
        }
    },
    name: "ChatApp",
    text: ""
}
</script>

<template>
    <div v-if="!joined" class="parent-container">
        <div class="name-container">
            <input v-model="currentUser" type="text" class="user-name" />
            <button v-on:click="join" class="join-button">Join</button>
        </div>
    </div>
    <div class="text-input-container">
        <div v-if="joined">
            <div>
                <textarea v-model="text" class="text-message" v-on:keyup.enter="sendMessage"></textarea>
            </div>
        </div>
    </div>
</template>

<style scoped>
.parent-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    position: fixed;
    padding-top: 150px;
}

.name-container {
    display: flex;
    flex-direction: column;
    width: 200px;
}

.user-name {
    height: 30px;
    font-size: 20px;
    padding: 5px;
    margin-bottom: 5px;
    text-align: center;
    font-weight: bold;
}

.join-button {
    height: 30px;
    font-size: 15px;
}
.text-input-container {
    height: 100vh;
}
.text-message {
    width: 100%;
    position: absolute;
    bottom: 0px;
    height: 70px;
    padding: 10px;
}


</style>