<template>
  <div>
   <Student name="mack" sex="男" :age="14"/>
  </div>
</template>

<script>
//引入组件
import Student from './components/Student.vue'
export default {
    name:'App',
    components:{
        Student
        
    },
  }

</script>
