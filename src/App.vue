<script setup>
import { ref } from 'vue'
import Constructor from './Constructor.vue'
import Database from './Database.vue'
import Level from './Level.vue'

let levelNum = ref(1);
let isLevel = ref(false);
let isStart = ref(true);
let time = ref(0);
let timer;
const numOfLevels = Object.keys(Database.Levels).length;
const levels = Database.Levels;

function startClock(){
  time.value = 0;
  if(!timer) timer = setInterval(() => {time.value++;}, 1000);
}
function stopClock(){
  clearInterval(timer);
  timer = null;
}
</script>

<template>
  <button v-show="!isLevel&&isStart" @click="isStart = false">Start</button>
  <div v-show="!isStart" v-for="i in numOfLevels">
    <button v-show="!isLevel" @click="isLevel = true; levelNum = i; startClock()">Level {{i}} with {{ levels[i]['points'] }} points</button>
  </div>
  <button v-show="!isLevel&&!isStart" @click="isStart = true; stopClock()">Back</button>
  <div v-show="isLevel">
    {{ time }}
    <Constructor :levelNum="levelNum" :time="time"></Constructor>
    <button @click="isLevel = false">Back</button>
  </div>
</template>

<style>
img {
  transform: SVGFEFuncAElement(0.5);
}
</style>