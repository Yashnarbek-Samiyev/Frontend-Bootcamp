<script setup>
import axios from 'axios';
export default {
  name:"App",
  data(){
    return{
      info:[],

    };
  },
  async mounted(){
    let information= await axios.get("https://reqres.in/api/user?page=2");
    console.log("Api data", information.data.data());
    this.info=information.data.data;


  }
}
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
// import HomeOne from "@/components/Home-one.vue";
// import Pages from "@/components/pages.vue";
// import Inputboxes from "@/components/inputboxes.vue";
import ifElseCondition from "@/components/if-else-condition.vue";
import IfElseCondition from "@/components/if-else-condition.vue";
import forLoop from "@/components/for-loop.vue";
import ForLoop from "@/components/for-loop.vue";
// import Child from "@/components/child.vue";
// import form from "@/components/form.vue";

// import watchers from "@/components/Watchers.vue";
// import Watchers from "@/components/Watchers.vue";
// import beforecreate from "@/components/beforecreate.vue";
// import BeforeCreate from "@/components/beforecreate.vue";
// import Beforeupdated from "@/components/beforeupdated.vue";

//==========================================
import Home from './components/Router/home';
import Login from './components/Router/login';
import Signup from './components/Router/signup';
</script>

<template>
  <h1>Call Api's</h1>
  <h3 v-for="item in info" :key="item">
    {{item.id}} | {{item.first_name}} |{{item.last_name}} | {{item.email}}
  </h3>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
<!--    <TheWelcome />-->
  </main>
<!--  <HomeOne/>-->
<!--  <Pages/>-->
<!--  <Inputboxes/>-->
<!--  <IfElseCondition/>-->
<!--  <ForLoop/>-->
<!--  <form/>-->
<!--  <Child name="Tony Stark"/>-->
<!--  <watchers/>-->
<!--  <BeforeCreate/>-->
<!--<Beforeupdated/>-->
  <Home/>
  <Login/>
  <Signup/>



  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/login">Home</RouterLink>
  <br>
  <RouterLink to="/signup">Home</RouterLink>
  <br>
  <RouterView></RouterView>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
