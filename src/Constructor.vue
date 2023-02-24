<script setup>
import Level from './Level.vue'
import Database from './Database.vue'

const props = defineProps(['levelNum']);
const levels = Database.Levels;
// const levelImage = levels[props.levelNum]['image'];
// const levelPoliForm = levels[props.levelNum]['poliForm'][0];
// const levelBadPoliForm = levels[props.levelNum]['poliForm'][1];
</script>

<template>
    <Level :image="levels[props.levelNum]['image']" 
        :poliForm="levels[props.levelNum]['poliForm'][0]"
        :badPoliForm="levels[props.levelNum]['poliForm'][1]"
        :placeholder="levels[props.levelNum]['placeholder']"
        :poliNum="levels[props.levelNum]['poliNum']"
        :badPoliNum="levels[props.levelNum]['badPoliNum']"
        :poliText="levels[props.levelNum]['poliText']"
        :badPoliText="levels[props.levelNum]['badPoliText']"
        :levelNum="props.levelNum"/>
</template>