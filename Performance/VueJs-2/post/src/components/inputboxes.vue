<template>
  <h1 id="pages">How to add two way binding in multiple input boxes</h1>
  <label for="">Cricket</label>
  &nbsp;
  <input type="checkbox" id="" value="cricket" v-model="sports">
  <label for="">Football</label>
  &nbsp;
  <input type="checkbox" id=""  value="football" v-model="sports">
  <label for="">Hockey</label>
  &nbsp;
  <input type="checkbox" id="" value="hockey" v-model="sports">

  <h3>Selected Sports: {{sports}}</h3>
</template>

<script>
export default {
  name: "input-boxes",
  data(){
    return{
      sports:"Trump"

    }
  }
}
</script>

<style scoped>
#pages{
  color: #12c2e9;
}
</style>