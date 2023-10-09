<template>
<h1>Simple form</h1>
  <form action="">
  <label for="">UserName</label>
  &nbsp;
  <input type="text" name="" id="" placeholder="username" v-model="form.username">
  <br>
  <br>
  <label for="">Password</label>
  &nbsp;
  &nbsp;
  <input type="text" name="" id="" placeholder="password" v-model="form.password">
  </form>

  <button v-on:click="login">Sign Up</button>
</template>

<script>
export default {
  name: "form-com",
  data(){
    return{
      form:{
        username:"",
        password:"",
      }
    }
  },
  methods:{
    login(){
      console.log("login data", this.form);
    }
  }
}
</script>

<style scoped>
h1{
  font-weight: 700;
  color: red;
}

</style>