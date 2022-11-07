<template>
    <div>
       <button @click="isShow = !isShow">显示/隐藏</button>
       <transition name="qiu" appear>
        <h1 v-show="isShow">hello</h1>   
       </transition>
       
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
    .qiu-enter-active{
        animation: jiang 1s linear;
    }

    .qiu-leave-active{
        animation: jiang 1s linear reverse;
    }

    @keyframes jiang {
        from{
            transform: translateX(-100%);
        }
        to{
            transform: translateX(0px);
        }
    }
</style>
