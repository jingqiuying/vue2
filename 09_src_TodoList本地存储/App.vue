
<template>
  <div>
    <MyHeader :addTodo="addTodo"/>
    <MyList 
        :todos="todos" 
        :checkTodo="checkTodo"
        :deleteTodo="deleteTodo"
    />
    <MyFooter 
        :todos="todos" 
        :checkAllTodo="checkAllTodo"
        :clearAllTodo="clearAllTodo"
    />
  </div>
</template>

<script>
//引入组件
import MyList from './components/MyList.vue'
import MyHeader from './components/MyHeader.vue'
import MyFooter from './components/MyFooter.vue'
export default {
    name:'App',
    components:{
      MyList,
      MyHeader,
      MyFooter
    },
    data() {
        return {
            todos:JSON.parse(localStorage.getItem('todos')) || []
        }
    },
    methods: {
      addTodo(todoObj){
        this.todos.unshift(todoObj)
      },
      checkTodo(id){
        this.todos.forEach(todo => {
          if(todo.id == id){
            todo.done = !todo.done
          }
        });
      },
      deleteTodo(id){
        /* // this.todos = this.todos.filter((todo)=>{
        //   return todo.id !== id */
        this.todos = this.todos.filter(todo=> todo.id !== id)//简写
      },
      checkAllTodo(done){
        this.todos.forEach(todo => {
          todo.done = done
        });
      },
      clearAllTodo(){
        this.todos = this.todos.filter((todo)=>{
          return !todo.done
        })
      }
    },
    watch:{
      todos:{
          handler(value){
          localStorage.setItem('todos',JSON.stringify(value))
          },
          deep:true
      }


    }
      
  }

</script>
