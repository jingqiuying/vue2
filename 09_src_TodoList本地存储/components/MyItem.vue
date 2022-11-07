<template>
   <li>
    <label>
        <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
        <!-- The following code also implements the function, but it is not recommended
             because it is a bit illegal because of the modification of props 
            下面代码也能实现功能，但是不太推荐，因为有点违法原则，因为修改了props-->
        <!-- <input type="checkbox" v-model="todo.done"/> -->
        <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
   </li>
</template>

<script>
export default {
    name:"MyItem",
    props:["todo",'checkTodo','deleteTodo'],
    methods: {
        //勾选or取消
        handleCheck(id){
            //通知App组件将对应的todo对象的done值取反
            this.checkTodo(id)
        },
        //删除
        handleDelete(id){
            if(confirm('你确定删除吗')){
                this.deleteTodo(id)
            }
        }
    },
}
</script>

<style>
 /*item*/
 li {
        list-style: none;
        height: 36px;
        line-height: 36px;
        padding: 0 5px;
        border-bottom: 1px solid #ddd;
    }

    li label {
        float: left;
        cursor: pointer;
    }

    li label li input {
        vertical-align: middle;
        margin-right: 6px;
        position: relative;
        top: -1px;
    }

    li button {
        float: right;
        display: none;
        margin-top: 3px;
        background-color: red;
        color: white;
        border-radius: 7px;
        border-color: red;
    }

    li:before {
        content: initial;
    }

    li:last-child {
        border-bottom: none;
    }

    li:hover{
        background-color: #ddd;
    }

    li:hover button{
        display: block;
    }
</style>