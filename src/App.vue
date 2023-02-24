<script setup>
import { ref } from 'vue'
import Constructor from './Constructor.vue'
import Database from './Database.vue'

let levelNum = ref(1);
let isLevel = ref(false);
let isStart = ref(true);
const numOfLevels = Object.keys(Database.Levels).length;
const levels = Database.Levels;
</script>

<template>
  <button v-show="!isLevel&&isStart" @click="isStart = false">Start</button>
  <div v-show="!isStart" v-for="i in numOfLevels">
    <button v-show="!isLevel" @click="isLevel = true; levelNum = i">Level {{i}} with {{ levels[i]['points'] }} points</button>
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