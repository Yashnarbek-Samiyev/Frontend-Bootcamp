<template>
<h1>before-update and updated</h1>
  <h1>count: {{counter}}</h1>
  <bottom v-on:click="counter=counter+1">update the Number</bottom>
</template>

<script>
export default {
  name: "before-updated",
  data(){
    return{
      counter:0,
    };
  },
  beforeUpdate() {
    console.log("beforeUpdate",this.counter);
  },
  updated() {
    console.log("updated",this.counter);

  }
}
</script>

<style scoped>
h1{
  color: red;
  font-weight: bold;
}

</style>