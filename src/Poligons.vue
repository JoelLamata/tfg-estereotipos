<script>
export default{
    data() {
        return {
            position: [ 50, 50 ]
            // zone: {
            //     x: 200,
            //     y: 200,
            //     width: 100,
            //     height: 100
            // },
        };
    },
    methods: {
        getPos(){
            this.position = [this.$refs.poligon.getBoundingClientRect().left, this.$refs.poligon.getBoundingClientRect().top];
            console.log("Posicion del poligono: ", this.position);
            return this.position;
        }
    }
}
</script>

<template>
    <div class="poligon" v-drag @v-drag-end="getPos()" ref="poligon" >
        <img src="./images/green.png" width="100" height="100" class="image">
        <div class="text">Color rosa</div>
    </div>
</template>

<style>
.image {
    clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);
}
.poligon {
    display: inline-block;
    text-align: center;
    color: black;
}
.text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>