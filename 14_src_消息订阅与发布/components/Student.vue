<template>
  <div class="demo">
  {{msg}}
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
   <h2>学生年龄：{{age}}</h2>
   <button @click="sendStudentName">把学生名给School组件</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name:"Student",
    data() {
        return {
          msg:'欢迎来到这里',
          name:'mack',
          sex:'男',
          age:23
        }
    },  
    methods:{
      sendStudentName(){
        pubsub.publish('hello',this.name)
      }
    }
    
}
</script>

<style scoped>
.demo{
  background-color: rgb(243, 223, 9);
  padding: 10px;
}
</style>
