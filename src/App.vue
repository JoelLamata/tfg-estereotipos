<script setup>
import { ref } from 'vue'
import Constructor from './Constructor.vue'

let levelNum = ref(2);
let isLevel = ref(false);
let isStart = ref(true);
</script>

<template>

  <button v-show="!isLevel&&isStart" @click="isStart = false">Start</button>
  <div v-show="!isStart" v-for="i in 2">
    <button v-show="!isLevel" @click="isLevel = true; levelNum = i">Level {{i}}</button>
  </div>
  <button v-show="!isLevel&&!isStart" @click="isStart = true">Back</button>
  <div v-show="isLevel">
    <Constructor :levelNum="levelNum"></Constructor>
    <button @click="isLevel = false">Back</button>
  </div>
</template>

<style>
img {
  transform: SVGFEFuncAElement(0.5);
}
</style>