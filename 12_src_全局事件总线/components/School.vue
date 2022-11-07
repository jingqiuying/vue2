<template>
  <div>
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
    <button @click="getStudent">获取学生信息</button>
  </div>
</template>

<script>
//引入混合

export default {
    name:'School',
    data() {
        return {
            name:'茂名市第五中学',
            address:'茂名',        
        }
    },
    methods: {
      getStudent(){
        this.$bus.$emit('hello',this.name)
      }
    },
}
</script>

<style scoped>
  div{
    background-color: rgb(239, 13, 51);
  }
</style>