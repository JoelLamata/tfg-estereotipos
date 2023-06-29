<script setup>
import { watch, ref, onUpdated } from 'vue'
import poligon from '@components/poligon/Poligons.vue'
import Database from '@components/database/Database.vue'
import _ from 'lodash'

const props = defineProps(['defaultImages', 'replacementImages', 'placeholder', 'poliForm', 'badPoliForm', 'poliNum', 'badPoliNum', 'poliText', 'badPoliText', 'levelNum', 'time'])

let defImgs = _.cloneDeep(props.defaultImages);
let imagesToShow = _.cloneDeep(props.defaultImages);
let poligonsInBasura = [];
var poligonsDict = [];
let poligons = ref(null);

console.log(poligons);
setPoligonsDict();

onUpdated(()=>{
    console.log('onUpdated');
});

function setPoligonsDict() {
    for (let i = 0; i < props.poliNum; i++) {
        poligonsDict[i] = {
            form: props.poliForm,
            text: props.poliText[i]
        }
    }
    for (let i = 0; i < props.badPoliNum; i++) {
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
    if (isLevelCorrect()) {

        if (props.time <= props.badPoliNum) {
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

function isLevelCorrect() {
    if (poligonsInBasura.length == props.badPoliNum) {
        console.log(poligonsInBasura)
        for (let i = 0; i < props.badPoliText.length; i++) {
            if (!poligonsInBasura.find(text => props.badPoliText[i] == text)) {
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
        if (!poligonsInBasura.find(item => item == label)) {
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

    Array.from(poligons.value.children).forEach(e => {
        console.log(e, e.style);
        e.style.removeProperty('top');
        e.style.removeProperty('left');
    });
}

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

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
    console.log('watch');
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

<template src="./Level.html"></template>

<style scoped>
@import "./Level.css";
</style>
