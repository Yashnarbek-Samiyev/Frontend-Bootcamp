<template>
<h1>before-create and create</h1>
</template>

<script>
export default {
  name: "before-create",
  data()
  {
    console.error("created");
  },
  beforeCreate() {
    alert("Page Loading...");
  },
  created() {
    alert("Page Loaded");
  }
}
</script>

<style scoped>
h1{
  color: red;
  font-weight: bold;
}
</style>