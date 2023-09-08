<template>
    <button @click="$emit('new-item', new Date().getTime())">Set data</button>    
</template>