<template>
<h1 id="pages">Two way binding!</h1>
  <input type="text" placeholder=" Add the Number " v-model="count">
</template>

<script>
export default {
  name: "pages",
  data(){
    return{
      count:20
    }
  }
  
  
}
</script>

<style scoped>
#pages{
  color: #12c2e9;
}

</style>