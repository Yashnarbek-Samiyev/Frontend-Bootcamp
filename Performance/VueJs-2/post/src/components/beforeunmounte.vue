<template>
<h1>before-unmount and unmounted</h1>
</template>

<script>
export default {
  name: "before-unmount",
  data(){
    return{
      counter:0,
    }
  }
}
</script>

<style scoped>
h1{
  color: red;
  font-weight: bold;
}
</style>