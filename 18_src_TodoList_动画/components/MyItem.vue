<template>
  <li>
    <label>
        <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
        <!-- The following code also implements the function, but it is not recommended
             because it is a bit illegal because of the modification of props 
            下面代码也能实现功能，但是不太推荐，因为有点违法原则，因为修改了props-->
        <!-- <input type="checkbox" v-model="todo.done"/> -->
        <span v-show="!todo.isEdit">{{todo.title}}</span>
        <input 
            v-show="todo.isEdit" 
            type="text" 
            :value="todo.title"
            @blur="handleBlur(todo,$event)"
            ref="inputTitle">
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    <button class="btn btn-edit" v-show="!todo.isEdit" @click="handleEdit(todo)" >编辑</button>
   </li>

</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name:"MyItem",
    props:["todo"],
    methods: {
        //勾选or取消
        handleCheck(id){
            //通知App组件将对应的todo对象的done值取反
            // this.checkTodo(id)
            this.$bus.$emit('checkTodo',id)
        },
        //删除
        handleDelete(id){
            if(confirm('你确定删除吗')){
                // this.deleteTodo(id)
            //    this.$bus.$emit('deleteTodo',id)
                pubsub.publish('deleteTodo',id)
            }
        },
        handleEdit(todo){
            if(todo.hasOwnProperty('isEdit')){//
                todo.isEdit = true
            }else{
                this.$set(this.todo,'isEdit',true)
            }
            //获取焦点
            //定时器
            /* setTimeout(() => {
                this.$refs.inputTitle.focus()
            }, 300); */
            //nextTick
            this.$nextTick(()=>{
                this.$refs.inputTitle.focus()
            })
            
        },
        //失去焦点回调（真正执行修改逻辑）
        handleBlur(todo,e){
            todo.isEdit = false
            if(!e.target.value.trim()) return alert('输入不能为空')
            this.$bus.$emit('updateTodo',todo.id,e.target.value)
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