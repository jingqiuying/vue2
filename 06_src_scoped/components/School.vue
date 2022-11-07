<template>
  <div class="demo">
    <h2 @click="showName">学校名称：{{name | mySlice}}</h2>
    <h2 @click="hello">学校地址：{{address}}</h2>
  </div>
</template>

<script>
//引入混合

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:'School',
    data() {
        return {
            name:'茂名市第五中学',
            address:'茂名',        
        }
    },
    mounted() {
      
    },
}
</script>

<style lang="less" scoped>
  .demo{
    background-color: pink;
  }
</style>