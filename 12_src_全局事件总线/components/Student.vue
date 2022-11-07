<template>
  <div class="demo">
  {{msg}}
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
   <h2>学生年龄：{{age}}</h2>
  </div>
</template>

<script>
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
    mounted(){
      this.$bus.$on('hello',(data)=>{
        console.log('我是Student组件，收到数据',data);
      })
    },
    beforeDestroy() {
      this.$.bus.$off('hello')
    },
}
</script>

<style scoped>
.demo{
  background-color: rgb(243, 223, 9);
  padding: 10px;
}
</style>
