<script setup>
import { ref } from 'vue'
import Constructor from './Constructor.vue'

const levelNum = ref(2);
const isLevel = ref(false);
</script>

<template>
  <button v-show="!isLevel" @click="isLevel = true">Start</button>
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