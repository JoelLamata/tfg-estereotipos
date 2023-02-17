<script>
import Level from './Level.vue'
import JuguetesParaNiñas from './images/JuguetesParaNiñas.png'
import green from './images/green.png'
import mujerExitosa from './images/mujer-exitosa.png'

const images = [JuguetesParaNiñas, green, mujerExitosa]

export default{
    JuguetesParaNiñas,
    components:{
        Level
    },
    data(){
        return {}
    }
}
</script>

<template>
    <Level placeholder='Juguetes para niñas' :image="JuguetesParaNiñas"></Level>
</template>