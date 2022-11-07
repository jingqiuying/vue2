
<template>
  <div>
    <h2>{{meg}}</h2>
   
    <School/>
    <Student/>
  </div>
</template>

<script>
//引入组件
import School from './components/School.vue'
import Student from './components/Student.vue'
export default {
    name:'App',
    components:{
      School,
      Student
    },
    data() {
      return {
        meg:'你好呀',
      }
    },
  }

</script>

<style>
div{
  background-color: gray;
  margin: 5px;
}
  
</style>
