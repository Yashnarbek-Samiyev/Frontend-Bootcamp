<template>
  <h1 id="pages2" v-if="display">If Condition</h1>
  <h1 id="pages2" v-else="show"> Else Condition </h1>
  <button v-on:click="display=!display">Click Here</button>

</template>

<script>
export default {
  name: "if-else-condition",
  data(){
    return{
      display:true,
      // show:true,

    };
  },
}
</script>

<style scoped>
#pages{
  color: rgb(226,100,27);
}

</style>