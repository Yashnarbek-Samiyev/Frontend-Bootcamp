<template>
<h1 id="pages3">For Loop</h1>
  <ul>
    <li v-for="program in technology" :key="program">
      {{program}}

    </li>
  </ul>
  <br>
  <ul>
    <li v-for="data in user" key="data">
      Name is:    {{data.name   }}
    </li>
    <li v-for="data in user" key="data">
    Email is:    {{data.email   }}
  </li>
    <li v-for="data in user" key="data">
    Contact is:    {{data.number  }}
  </li>
  </ul>
</template>

<script>
export default {
  name: "for-loop",
  data(){
    return{
      technology:["PHP","Java","Javascript","C++","C#"],
      user:[
        {
          name:"Jack",
          email:"jack@gmail.com",
          number:+998997867678,


        }
      ]
    }
  }
}
</script>

<style scoped>
#pages3{
  color: red;
}
</style>