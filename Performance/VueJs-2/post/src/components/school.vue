<template>
<h1>Main Component</h1>
  <Tacher name="Bruce" :getUser="getUserName "/>
  <Student/>
</template>

<script>
import Teacher from "@/components/teacher.vue";
import Student from "@/components/student.vue";
import StudentCom from "@/components/student.vue";
import Teacher from "@/components/teacher.vue";



export default {
  name: "school",
  components: {StudentCom},
  methods:{
    getUserName(name){
      alert(name)
    }
  }
}

</script>

<style scoped>

</style>