<template>
  <div>
    <h2 @click="showName">学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
//引入混合
import {hunhe, hunhe2} from '../mixin'
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:'School',
    data() {
        return {
            name:'五中',
            address:'茂名',
            x:'hello'
            
        }
    },
    mounted() {
        console.log('hello !!!!')
    },
    mixins:[hunhe,hunhe2]
}
</script>

<style>

</style>