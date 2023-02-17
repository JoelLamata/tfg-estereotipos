<script setup>
import Level from './Level.vue'
import Constructor from './Constructor.vue'

let isLevel = false;
</script>

<template>
  <Level placeholder="Juguete para niñas" :image="Constructor.images[0]"/>
</template>

<style>
img {
  transform: SVGFEFuncAElement(0.5);
}
</style>