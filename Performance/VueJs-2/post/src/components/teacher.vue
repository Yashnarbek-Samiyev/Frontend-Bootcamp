<template>
<h1>Teacher Name {{name}}</h1>
</template>

<script>
export default {
  name: "teacher-com",
  props:{
    name:String,

  },
  data(){
    return{
      userName:"Yashnarbek"
    }
  }
}
</script>

<style scoped>

</style>