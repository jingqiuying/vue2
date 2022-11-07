
<template>
  <div>
   <Search/>
   <List/>
  </div>
</template>

<script>
import List from './components/List'
import Search from './components/Search'
//引入组件
export default {
    name:'App',
    components:{
      List,
      Search
    },
    methods: {
      
    },
}
</script>
