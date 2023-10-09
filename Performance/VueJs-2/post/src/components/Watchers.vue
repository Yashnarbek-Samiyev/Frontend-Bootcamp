<template>
<h1>Watchers</h1>
  <h2>{{counter}}</h2>
  <button v-on:click="counter=counter+1">+</button>
  <button v-on:click="counter=counter-1">-</button>
</template>

<script>
export default {
  name: "Watchers",
  data(){
    return{
      counter:0,
    };
  },
  watch:{
    counter(num){
      if(num>10){
        alert("Maximum number is 10")
      }
    }
  }

}
</script>

<style scoped>

</style>