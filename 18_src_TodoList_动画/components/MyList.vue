<template>
  <ul class="todo-main">
    <transition-group name="todo" appear>
      <MyItem 
        v-for="todoObj in todos" 
        :key="todoObj.id" 
        :todo="todoObj" />
    </transition-group>
    

  </ul>
</template>

<script>
import MyItem from './MyItem.vue'
export default {
    name:'MyList',
    components:{MyItem},
    props:['todos']
}
</script>

<style>
/*main*/
.todo-main {
        margin-left: 0px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding: 0px;
    }

    .todo-empty {
        height: 40px;
        line-height: 40px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding-left: 5px;
        margin-top: 10px;
    }
    .todo-enter-active{
        animation: jiang 1s linear;
    }

    .todo-leave-active{
        animation: jiang 1s linear reverse;
    }

    @keyframes jiang {
        from{
            transform: translateX(100%);
        }
        to{
            transform: translateX(0px);
        }
    }
</style>