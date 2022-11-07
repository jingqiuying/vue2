<template>
  <div>
    <Up></Up>
    <Fan></Fan>
  </div>
</template>

<script>
//引入组件
import Up from './components/UpFriend.vue'
import Fan from './components/FanFriend.vue'
export default {
    name:'App',
    components:{
        Up,
        Fan
    }
}
</script>
