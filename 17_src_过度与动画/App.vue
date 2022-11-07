
<template>
  <div>
  <Test/>
  <Test2/>
  <Test3/>
  </div>
</template>

<script>
//引入组件
import Test from './components/test'
import Test2 from './components/test2'
import Test3 from './components/test3'
export default {
  
    name:'App',
    components:{
     Test,
     Test2,
     Test3
    },
    data() {
        return {
            
        }
    },
    methods: {
     
    },
  
}
</script>

<style>
   
</style>