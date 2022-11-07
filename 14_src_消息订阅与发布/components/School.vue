<template>
  <div>
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
//引入混合
import pubsub from 'pubsub-js'
export default {
 
    name:'School',
    data() {
        return {
            name:'茂名市第五中学',
            address:'茂名',        
        }
    },
    methods: {
      getStudentName(msgName,data){
        console.log(data);
      }
    },
    mounted() {
      this.pubId = pubsub.subscribe('hello',this.getStudentName)
    },
    beforeDestroy() {
      pubsub.unsubscribe(this.pubId)
    },
}
</script>

<style scoped>
  div{
    background-color: rgb(239, 13, 51);
  }
</style>