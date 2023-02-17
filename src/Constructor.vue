<script setup>
import Level from './Level.vue'
import Database from './Database.vue'

const props = defineProps(['levelNum'])
</script>

<template>
    <Level v-if="levelNum == 1" placeholder="Juguete para niñas" :image="Database.images[1]"></Level>
    <Level v-if="levelNum == 2" placeholder="Juguete para niñas" :image="Database.images[0]"/>
</template>