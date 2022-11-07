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
    // eslint-disable-next-line vue/multi-word-component-names
    name:"Student",
    data() {
        return {
          msg:'欢迎来到这里',
          name:'mack',
          sex:'男',
          age:23

        }
    },
    
    
}
</script>

<style scoped>
.demo{
  background-color: gray;
}
</style>>
