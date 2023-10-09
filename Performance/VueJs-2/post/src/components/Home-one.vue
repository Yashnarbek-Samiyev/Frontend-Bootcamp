<template>
  <div>
    <h1>HelloWorld</h1>
    <button  v-on:click="fun()">Click Here</button>
  </div>
</template>

<script>
export default {
  name: "Home-one",
  components: {},
  methods:{
    fun(){
      alert("Hello world!")
    }
  }

}
</script>

<style scoped>

</style>