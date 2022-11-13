<template>
  <ul>
    <li>消息编号：{{dId}}</li>
    <li>消息标题：{{dTitle}}</li>
    
  </ul>
</template>

<script>
export default {
    name: 'Detail',
    computed:{
        dId(){
            return this.$route.params.id
        },
        dTitle(){
            return this.$route.params.title
        }

    },
    mounted() {
        console.log(this.$route);
    },

}
</script>

<style>

</style>