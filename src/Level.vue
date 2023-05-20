<script setup>
import { ref, nextTick, onUpdated, onMounted, watch } from 'vue'
import poligon from './Poligons.vue'
import Database from './Database.vue'
import Modal from './Modal.vue'
import _ from 'lodash'

const props = defineProps(['defaultImages', 'replacementImages', 'placeholder', 'poliForm', 'badPoliForm', 'poliNum', 'badPoliNum', 'poliText', 'badPoliText', 'levelNum', 'time'])

let defImgs = _.cloneDeep(props.defaultImages);
let imagesToShow = _.cloneDeep(props.defaultImages);
let poligonsInBasura = [];
var poligonsDict = [];
setPoligonsDict();

function setPoligonsDict(){
    for(let i = 0; i < props.poliNum; i++){
        poligonsDict[i] = {
            form: props.poliForm,
            text: props.poliText[i]
        }
    }
    for(let i = 0; i < props.badPoliNum; i++){
        poligonsDict[i + props.poliNum] = {
            form: props.badPoliForm,
            text: props.badPoliText[i]
        }
    }
    shuffle(poligonsDict)
    // console.log(poligonsDict)
}

function setPoints() {
    let actualPoints = Database.Levels[props.levelNum]['points'];
    let points = 0
    if(isLevelCorrect()){

        if(props.time <= props.badPoliNum){
            points = 100;
        } else {
            points = 100 - props.time + props.badPoliNum;
        }
    }
    // console.log(points);
    Database.Levels[props.levelNum]['lastPoints'] = points;
    if (actualPoints < points) {
        Database.Levels[props.levelNum]['points'] = points;
    }
}

function isLevelCorrect(){
    if(poligonsInBasura.length == props.badPoliNum){
        console.log(poligonsInBasura)
        for(let i = 0; i < props.badPoliText.length; i++){
            if(!poligonsInBasura.find(text => props.badPoliText[i] == text)){
                return false
            }
        }
        return true
    }
    return false
}

function isOnSquare(e) { //Cambiar nombre?
    const poligonPosition = e.currentTarget.getBoundingClientRect();
    const basuraPosition = document.getElementsByClassName('basura').item(0).getBoundingClientRect();
    const label = e.currentTarget.innerText;
    if (poligonPosition.right >= basuraPosition.left &&
        poligonPosition.left <= basuraPosition.right &&
        poligonPosition.bottom >= basuraPosition.top &&
        poligonPosition.top <= basuraPosition.bottom) {
        changeImage(label, false);
        if(!poligonsInBasura.find(item => item == label)){
            poligonsInBasura.push(label);
        }
        console.log(poligonsInBasura)
    }
    else {
        changeImage(label, true);
        const idx = poligonsInBasura.indexOf(label);
        if (idx != -1) {
            poligonsInBasura.splice(idx, 1);
        }
        console.log(poligonsInBasura)
    }
}

function changeImage(label, toDefault) {
    const imageObject = props.replacementImages.find(item => item.label === label);
    if (imageObject) {
        const imageIndex = imageObject.replacementIndex;
        if (toDefault) {
            imagesToShow[imageIndex] = _.cloneDeep(defImgs[imageIndex]); // Change to default
        } else {
            imagesToShow[imageIndex] = _.cloneDeep(imageObject.image);   // Change to replacement
        }
    }
}

async function resetLevel() {
    // Reset poligons position
    for (let i = 0; i < props.poliNum + props.badPoliNum; i++) {
        this.$refs.poligons.children[i].style["top"] = ""
        this.$refs.poligons.children[i].style["left"] = ""
    }
    imagesToShow = _.cloneDeep(defImgs);
    poligonsInBasura = []
}

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

watch(() => props.defaultImages, (newVal) => {  // When enter level
    defImgs = _.cloneDeep(props.defaultImages)
    imagesToShow = _.cloneDeep(newVal);
    // Reset correct poligons
    poligonsInBasura = [];

    // Random order
    poligonsDict = [];
    setPoligonsDict();
})

defineExpose({ setPoints, resetLevel })
</script>

<template>
    <input type="search" :placeholder="props.placeholder" class="search_input" disabled>
    <div class="level">
        <div class="imgbox">
            <div class="images-container" :class="{ 'two-columns': imagesToShow.length === 4, 'three-columns': imagesToShow.length >= 6, 'three-rows': imagesToShow.length > 6 }">
                <img v-for="i in imagesToShow.length" :src="imagesToShow[i - 1]">
            </div>
        </div>
        <div class="poligons" ref="poligons">
            <poligon v-for="pol in poligonsDict" :poliForm="pol['form']" :text="pol['text']" @click="isOnSquare" class="poligon"/>
            <div class="basura">
                <img src="https://cdn.icon-icons.com/icons2/1791/PNG/512/trashcan1_114647.png">
            </div>
        </div>
    </div>
</template>

<style>
.level {
    display: grid;
    grid-auto-columns: minmax(0, 1fr);
    grid-auto-flow: column;
    grid-template-rows: minmax(0, 1fr);
    grid-column-gap: 2px;
    grid-row-gap: 0px;
    margin-top: 5px;
    height: 70vh;
}

.imbox {
    width: 50vh;
}

.images-container {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-template-rows: repeat(2, minmax(0, 1fr));
    height: 100%;
    grid-column-gap: 2px;
    grid-row-gap: 2px;
}

.images-container.two-columns {
    grid-template-columns: repeat(2, minmax(0, 1fr));
}

.images-container.three-columns {
    grid-template-columns: repeat(3, minmax(0, 1fr));
}

.images-container.three-rows {
    grid-template-rows: repeat(3, minmax(0, 1fr));
}

.images-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px;
}

.search_input {
    width: 50%;
    padding: 12px 24px;
    background-color: whitesmoke;
    font-size: 14px;
    line-height: 18px;
    color: #575756;
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-size: 18px 18px;
    background-position: 95% center;
    border-radius: 50px;
    border: 1px solid #575756;
}

.poligons {
    position: relative;
}

.basura {
    background-color: whitesmoke;
    position: absolute;
    bottom: 0%;
    border: solid 1px grey;
    width: 100%;
    height: 20%;
    border-radius: 16px;
    z-index: -1;
}

.basura img {
    height: 80%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
}
</style>
