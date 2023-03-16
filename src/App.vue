<script setup>
import Modal from './Modal.vue'
import { ref } from 'vue'
import Database from './Database.vue'
import Level from './Level.vue'

let levelNum = ref(1);
let isLevel = ref(false);
let isStart = ref(true);
let time = ref(0);
let showInfo = ref(false);
let showEndLevel = ref(false);
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
  <button v-show="!isLevel&&isStart" @click="showInfo = true">Info</button>
  <Teleport to="body">
    <modal :show="showInfo" @close="showInfo = false">
      <template #header>
        <h3>custom header</h3>
      </template>
    </modal>
  </Teleport>

  <div v-show="!isStart" v-for="i in numOfLevels">
    <button v-show="!isLevel" @click="isLevel = true; levelNum = i; startClock(); $refs.level.resetLevel();">Level {{i}} with {{ levels[i]['points'] }} points</button>
  </div>

  <button v-show="!isLevel&&!isStart" @click="isStart = true; isLevel = false;">Back</button>

  <div v-show="isLevel">
    {{ time }}
    <Level :defaultImages="levels[levelNum]['defaultImages']"
        :replacementImages="levels[levelNum]['replacementImages']"
        :poliForm="levels[levelNum]['poliForm'][0]"
        :badPoliForm="levels[levelNum]['poliForm'][1]"
        :placeholder="levels[levelNum]['placeholder']"
        :poliNum="levels[levelNum]['poliNum']"
        :badPoliNum="levels[levelNum]['badPoliNum']"
        :poliText="levels[levelNum]['poliText']"
        :badPoliText="levels[levelNum]['badPoliText']"
        :levelNum="levelNum"
        :time="time"
        ref="level"/>
    <button @click="$refs.level.setPoints(); showEndLevel = true; stopClock()">Submit</button>
    <Teleport to="body">
        <modal :show="showEndLevel" @close="showEndLevel = false; isLevel = false;">
            <template #header>
                <h3>End level</h3>
            </template>
        </modal>
    </Teleport>
    <button @click="isLevel = false;">Back</button>
  </div>
</template>

<style>
img {
  transform: SVGFEFuncAElement(0.5);
}
</style>