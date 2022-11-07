
<template>
  <div>
    <h2>{{meg}} 学校名字：{{schoolName}}</h2>
    <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
    <!-- <School :sendSchoolNameProps="getSchoolName" ref="getName"/> -->

    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据 -->
    <!-- 只能点击一次 -->
    <!-- <School @myschool.once="getSchoolName" ref="getName"/> -->
    <!-- 可以多次点击 -->
    <School @myschool="getSchoolName" @click.native="demo"/>
    <Student />
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
        schoolName:''
      }
    },
    methods: {
      getSchoolName(name){
        this.schoolName = name
      },
      getSchoolAddress(address){
        console.log('学校地址：',address);
      },
      demo(){
        console.log('点了');
      }
    },
    mounted() {
      // this.$refs.getName.$on('myaddress',this.getSchoolAddress)//可以多次点击
      // this.$refs.getName.$once('myaddress',this.getSchoolAddress)//只能点击一次
    },
    beforeDestroy(){
      this.$off('myaddress')
    }
  }

</script>

<style scoped>
div{
  background-color: gray;
  margin: 5px;
}
  
</style>
