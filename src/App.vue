<script setup>
import Modal from './Modal.vue'
import { ref } from 'vue'
import Database from './Database.vue'
import Level from './Level.vue'

let levelNum = ref(1);
let isLevel = ref(false);
let isStart = ref(true);
let time = ref(0);
let showInfo = ref(true);
let showLevelInfo = ref(false);
let showEndLevel = ref(false);
let timer;
const numOfLevels = Object.keys(Database.Levels).length;
const levels = Database.Levels;
let totalPoints = ref(0);

function startClock(){
  time.value = 0;
  if(!timer) timer = setInterval(() => {time.value++;}, 1000);
}
function stopClock(){
  clearInterval(timer);
  timer = null;
}

function setTotalPoints(){
  totalPoints.value = 0;
  for(let i = 1; i <= numOfLevels; i++){
    totalPoints.value += levels[i]['points'];
  }
}
</script>

<template>
  <div class="startScreen" v-show="!isLevel&&isStart">
    <button class="startButton" @click="isStart = false">Start</button>
    <button class="infoButton" @click="showInfo = true">Info</button>
    <Teleport to="body">
      <modal :show="showInfo">
        <template #header>
          <h1>¡Ayuda!</h1>
        </template>
        <template #body>
          <p>El algoritmo de Google imagenes ha empezado a fallar, y esta causando que los resultados esten llenos de estereotipos.
Porfavor ayudanos a arreglarlo.</p>
        </template>
        <template #footer>
          <p>¡Debemos arreglarlo cuanto antes mejor!</p>
          <button
              class="modal-default-button"
              @click="showInfo = false"
            >¡Vale!</button>
        </template>
      </modal>
    </Teleport>
  </div>

  <div class="levelsScreen" v-show="!isLevel&&!isStart">
    <p class="totalPoints">Total Points: {{ totalPoints }}</p>
    <div class="levelsButtons">
      <div v-for="i in numOfLevels">
        <button @click="$refs.level.resetLevel(); isLevel = true; levelNum = i; showLevelInfo = true; time = 0;">Level {{i}} <br /> {{ levels[i]['points'] }} points</button>
      </div>
    </div>
    <button class="backButton"  @click="isStart = true; isLevel = false;">Back</button>
  </div>

  <div v-show="isLevel">
    <Teleport to="body">
      <modal :show="showLevelInfo">
        <template #header>
          <h1>{{ levels[levelNum]['levelDescription']['header'] }}</h1>
        </template>
        <template #body>
          <p>{{ levels[levelNum]['levelDescription']['body'] }}</p>
        </template>
        <template #footer>
          <p>{{ levels[levelNum]['levelDescription']['footer'] }}</p>
          <button
              class="modal-default-button"
              @click="showLevelInfo = false; startClock();"
            >¡Vale!</button>
        </template>
      </modal>
    </Teleport>
    <p class="time">{{ time }}</p>
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
    <div class="levelButtons">
      <button @click="isLevel = false; stopClock();">Back</button>
      <button @click="$refs.level.setPoints(); setTotalPoints(); showEndLevel = true; stopClock();">Submit</button>
      <Teleport to="body">
          <modal :show="showEndLevel" @close="showEndLevel = false; isLevel = false;">
              <template #header>
                  <h3>End level</h3>
              </template>
          </modal>
      </Teleport>
    </div>
  </div>
</template>

<style>
body {
  background-color:#ffffff;
  background-image:url(https://www.xtrafondos.com/wallpapers/resoluciones/21/degradado-difuminado-azul_2560x1440_7935.jpg);
  background-repeat:no-repeat;
  background-position:top left;
  background-attachment:fixed;
  height: 100%;
}

/* Grid */
.startScreen {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  height: 97vh;
}

.startButton { grid-area: 2 / 3 / 3 / 4; }
.infoButton { grid-area: 4 / 3 / 5 / 4; }

.levelsScreen{
  display: grid;
  grid-template-rows: 0.1fr 0.8fr 0.1fr;
  grid-auto-flow: row dense;
  justify-items: center;
}

.levelsButtons{
  grid-row: 2;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  grid-template-rows: repeat(5, 1fr);
  place-items: center;
  height: 100%;
  width: 80%;
}

.totalPoints { 
  text-align: center;
}
.backButton { 
  align-items: center;
  width: min-content;
}

/* button */
button {
  align-items: center;
  background-color: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: .25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.85);
  cursor: pointer;
  display: inline-flex;
  font-family: system-ui,-apple-system,system-ui,"Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  min-height: 3rem;
  padding: calc(.875rem - 1px) calc(1.5rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;
}

button:hover,
button:focus {
  border-color: rgba(0, 0, 0, 0.15);
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  color: rgba(0, 0, 0, 0.65);
}

button:hover {
  transform: translateY(-1px);
}

button:active {
  background-color: #F0F0F1;
  border-color: rgba(0, 0, 0, 0.15);
  box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
  color: rgba(0, 0, 0, 0.65);
  transform: translateY(0);
}

/* Level */
.time {
  align-self: center;
  font-family:'digital-clock-font';
  font-size:xx-large;
  margin: 1%;
  text-align: center;
  text-decoration-color: #F0F0F1;
  background-color: whitesmoke;
  border: solid 1px grey;
  border-radius: 16px;
  width: 10%;
}

.levelButtons {
  display: grid;
  position: absolute;
  grid-template-columns: repeat(2, 1fr);
  bottom: 5%;
  right: 50%;
  column-gap: 100px;
}

@font-face{
 font-family:'digital-clock-font';
 src: url('./fonts/digital-7.ttf');
}
</style>