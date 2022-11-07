<template>
    <div>
       <button @click="isShow = !isShow">显示/隐藏</button>
       <transition-group name="qiu" appear>
        <h1 v-show="!isShow" key="1">hello</h1>   
        <h1 v-show="isShow" key="2">my name is </h1>   
       </transition-group>
       
    </div>

    
</template>

<script>
export default {
    name:'Test',
    data() {
        return {
            isShow:true
        }
    },

}
</script>

<style scoped>
    h1{
        background-color: orange;
        
    }
    .qiu-enter-active,.qiu-leave-active{
        transition: 1s linear;
    }
    /* 来的起点、去的终点 */
    .qiu-enter,.qiu-leave-to{
        transform: translateX(-100%);
    }
    /* 来的终点、去的起点 */
    .qiu-enter to,.qiu-leave{
        transform: translateX(0);
    }
</style>
