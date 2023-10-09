<template>
<h1>Child component</h1>
  <h3>{{name}}</h3>


  <h1>Class Binding</h1>
  <h3 :class="{yellow:color}">Dynamic Class</h3>
  <button v-on:click="color=!color">Change the color</button>
  <Newuser/>

</template>

<script>
export default {
  name: "child.vue",
  props:{
    name:String
  },
  data(){
    return{
      color:false
    }
  }
}
</script>

<style scoped>
h3{
  color: #12c2e9;
}
.yellow{
  color: blue;
  font-weight: bold;
  background-color: yellow;
  width: 150px;
  height: 50px;

}


</style>