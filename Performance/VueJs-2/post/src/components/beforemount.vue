<template>
<h1>BeforeMounted and Mounted</h1>
</template>

<script>
export default {
  name: "before-mount",
  data(){
    console.error("created");

  },
  beforeMount() {
    console.log("This is a BeforeMount Method", this.$el);
  },
  mounted() {
    console.log("This is a Mounted Method", this.$el);
  }

}
</script>

<style scoped>
h1{
  color: red;
  font-weight: bold;
}
</style>