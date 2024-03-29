<script setup>
import Modal from './Modal.vue'
import { ref } from 'vue'
import Database from './Database.vue'
import Level from './Level.vue'
import _ from 'lodash'

let levelNum = ref(1);
let isLevel = ref(false);
let isStart = ref(true);
let time = ref(0);
let showInfo1 = ref(true);
let showInfo2 = ref(false);
let showInfo3 = ref(false);
let showLevelInfo = ref(false);
let showEndLevel = ref(false);
let timer;
const numOfLevels = Object.keys(Database.Levels).length;
const levels = Database.Levels;
let totalPoints = ref(0);
let canEnd = ref(false);
let showEndOfMinigame = ref(false);
const neededPoint = 640;

function startClock() {
  time.value = 0;
  if (!timer) timer = setInterval(() => { time.value++; }, 1000);
}
function stopClock() {
  clearInterval(timer);
  timer = null;
}

function setTotalPoints() {
  totalPoints.value = 0;
  for (let i = 1; i <= numOfLevels; i++) {
    totalPoints.value += levels[i]['points'];
  }
  if (totalPoints.value >= neededPoint){
    canEnd = true;
  }
}
</script>

<template>
  <div class="startScreen" v-show="!isLevel && isStart">
    <button class="startButton" @click="isStart = false">Empezar</button>
    <button class="infoButton" @click="showInfo1 = true">Información</button>
    <Teleport to="body">
      <modal :show="showInfo1">
        <template #header>
          <h1>Por favor</h1>
        </template>
        <template #body>
          <p>Antes de continuar, completa el siguiente formulario:</p>
          <a href="https://forms.gle/gdAuSTLh4DuwDR7h9" target="_blank">https://forms.gle/gdAuSTLh4DuwDR7h9</a>
        </template>
        <template #footer>
          <button class="modal-default-button" @click="showInfo1 = false; showInfo2 = true">¡Hecho!</button>
        </template>
      </modal>
      <modal :show="showInfo2">
        <template #header>
          <h1>¡Ayuda!</h1>
        </template>
        <template #body>
          <p>El algoritmo de Google imagenes ha empezado a fallar, y esta causando que los resultados esten llenos de
            estereotipos.</p>
        </template>
        <template #footer>
          <p>Porfavor ayudanos a arreglarlo.</p>
          <button class="modal-default-button" @click="showInfo2 = false; showInfo3 = true">¡Vale!</button>
        </template>
      </modal>
      <modal :show="showInfo3">
        <template #header>
          <h1>Guia</h1>
        </template>
        <template #body>
          <p>Para completar los niveles, sigue estos pasos:</p>
          <p>1. Pon el cursor sobre la palabra que sea un estereotipo.</p>
          <p>2. Arrastra la palabra hasta la zona con el icono de una papelera.</p>
          <img src="https://cdn.icon-icons.com/icons2/1791/PNG/512/trashcan1_114647.png" style="{width: 30px; height: 30px;}">
          <p>3. Cuando estén todas las palabras sobre la zona, pulsa finalizar.</p>
        </template>
        <template #footer>
          <button class="modal-default-button" @click="showInfo3 = false">¡Vale!</button>
        </template>
      </modal>
    </Teleport>
  </div>

  <div class="levelsScreen" v-show="!isLevel && !isStart">
    <p class="totalPoints">Puntos Totales: {{ totalPoints }}</p>
    <div class="levelsButtons">
      <div v-for="i in numOfLevels">
        <button @click="$refs.level.resetLevel(); isLevel = true; levelNum = i; showLevelInfo = true; time = 0;">Nivel {{ i }} <br /> {{ levels[i]['points'] }} puntos</button>
      </div>
    </div>
    <div class="backAndEnd">
      <button class="backButton" @click="isStart = true; isLevel = false;">Atrás</button>
      <button @click="showEndOfMinigame = true" class="endButton" :class="{ 'noHover': canEnd == false }"><p v-if="canEnd == true">Finalizar</p> <p v-if="canEnd == false">Necesitas {{ neededPoint - totalPoints }} puntos</p></button>
    </div>
    <Teleport to="body">
      <modal :show="showEndOfMinigame">
        <template #header>
          <h1>¡Felicidades!</h1>
        </template>
        <template #body>
          <p>Has completado el minijuego. Por favor, ahora continúa con el cuestionario.</p>
          <!-- <a href="https://forms.gle/Fe3Kvsy7cZGNKrS19" target="_blank">https://forms.gle/Fe3Kvsy7cZGNKrS19</a> -->
        </template>
        <template #footer>
          <p>¡Muchas gracias!</p>
          <button class="modal-default-button" @click="showEndOfMinigame = false">Vale</button>
        </template>
      </modal>
    </Teleport>
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
          <button class="modal-default-button" @click="showLevelInfo = false; startClock();">¡Vale!</button>
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
      :time="time" ref="level" />
    <div class="levelButtons">
      <button @click="isLevel = false; stopClock();">Atrás</button>
      <button @click="$refs.level.setPoints(); setTotalPoints(); showEndLevel = true; stopClock();">Finalizar</button>
      <Teleport to="body">
        <modal :show="showEndLevel">
          <template #header>
          <h1 v-if="levels[levelNum]['lastPoints'] != 0">{{ levels[levelNum]['endLevelDescription']['header'] }}</h1>
          <h1 v-else>¡Cuidado!</h1>
        </template>
        <template #body>
          <p v-if="levels[levelNum]['lastPoints'] != 0">{{ levels[levelNum]['endLevelDescription']['body'] }}</p>
          <p v-else>Sigue habiendo problemas con el algoritmo.</p>
        </template>
        <template #footer>
          <p v-if="levels[levelNum]['lastPoints'] != 0">{{ levels[levelNum]['endLevelDescription']['footer'] }}</p>
          <p v-else>¡Sigue intentándolo!</p>
          <button class="modal-default-button" @click="showEndLevel = false; isLevel = false;">Acabar</button>
          <button class="modal-default-button" @click="$refs.level.resetLevel(); startClock(); showEndLevel = false;">Reintentar</button>
        </template>
        </modal>
      </Teleport>
    </div>
  </div>
</template>

<style>
body {
  background-color: #ffffff;
  background-image: url(https://www.xtrafondos.com/wallpapers/resoluciones/21/degradado-difuminado-azul_2560x1440_7935.jpg);
  background-repeat: no-repeat;
  background-position: top left;
  background-attachment: fixed;
  height: 100%;
}

p, h1, h2, h3 {
  font-family: system-ui, -apple-system, system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif;
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

.startButton {
  grid-area: 2 / 3 / 3 / 4;
}

.infoButton {
  grid-area: 4 / 3 / 5 / 4;
}

.levelsScreen {
  display: grid;
  grid-template-rows: 0.1fr 0.8fr 0.1fr;
  grid-auto-flow: row dense;
  justify-items: center;
}

.levelsButtons {
  grid-row: 2;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  grid-template-rows: repeat(2, 1fr);
  place-items: center;
  height: 60vh;
  width: 50%;
}

.totalPoints {
  text-align: center;
  background-color: whitesmoke;
  border: solid 1px grey;
  border-radius: 16px;
  width: 15%;
  height: 40%;
  font-family: system-ui, -apple-system, system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 600;
}

.backAndEnd {
  display: grid;
  position: absolute;
  grid-template-columns: repeat(2, 1fr);
  bottom: 5%;
  /* right: 50%; */
  column-gap: 100px;
}

/* button */
button {
  align-items: center;
  background-color: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.85);
  cursor: pointer;
  display: inline-flex;
  font-family: system-ui, -apple-system, system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif;
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
  font-family: 'digital-clock-font';
  font-size: xx-large;
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
  bottom: 10%;
  right: 50%;
  column-gap: 100%;
}

@font-face {
  font-family: 'digital-clock-font';
  src: url('./fonts/digital-7.ttf');
}

.noHover {
  pointer-events: none;
  background-color: #ffffff81;
}
</style>