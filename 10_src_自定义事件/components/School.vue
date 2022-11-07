<template>
  <div>
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
    <button @click="sendSchoolName">点击获取学校名</button>
    <!-- <button @click="sendSchoolAddress">点击获取学校地址</button> -->
    <button @click="unbind">解绑事件</button>
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
    
    // props:['sendSchoolNameProps'],
    methods: {
      sendSchoolName(){
        this.$emit('myschool',this.name)
      },
      // sendSchoolNameProps(){
      //   this.getSchool(this.name)
      // },
      // sendSchoolAddress(){
      //   this.$emit('myaddress',this.address)
      // },
      unbind(){
        // this.$off('myschool')//解绑一个事件
        this.$off(['myschool','myaddress'])//解绑多个事件
        this.$off()//解绑所以自定义事件

      }
    },
}
</script>

<style scoped>
  div{
    background-color: rgb(239, 13, 51);
  }
</style>