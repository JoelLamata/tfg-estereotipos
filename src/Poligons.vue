<script setup>
const props = defineProps(['poliForm', 'text'])
</script>

<template>
     <div class="poligon" v-drag>
        <img src="./images/green.png" width="100" height="100" :style="{'clip-path': props.poliForm}">
        <div class="text">{{props.text}}</div>
    </div>
</template>

<style>
.image {
    clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);
}
.poligon {
    display: inline-block;
    text-align: center;
    color: black;
}
.text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>