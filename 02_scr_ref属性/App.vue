<!-- eslint-disable vue/no-unused-components -->
<template>
  <div>
   <h1 v-text="msg" ref="title"></h1>
   <button @click="showDoM" ref="btn">点我展示DOM</button>
   <Up ref="sch"/>
  </div>
</template>

<script>
//引入组件
import Up from './components/UpFriend'
export default {
    name:'App',
    components:{
        Up
        
    },
    data() {
      return {
        msg:'欢迎来到这里'
      }
    },
    methods:{
      showDoM(){
        // console.log(this.$refs);
        console.log(this.$refs.title);//真实DOM元素
        console.log(this.$refs.btn);////真实DOM元素
        console.log(this.$refs.sch);//UpFriend组件的实现对象
      }
    }
}
</script>
