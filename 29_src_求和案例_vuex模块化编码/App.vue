
<template>
  <div >
   <Count/>
   <hr>
   <Person/>
  </div>
</template>

<script>
import Count from './components/Count'
import Person from './components/Person'
//引入组件
export default {
    name:'App',
    components:{
      Count,
      Person
    },

}
</script>
<style>
  .container,.foot{
    display: flex;
    justify-content: space-around;
  }
  h4{
    text-align: center;
  }
</style>