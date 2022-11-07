
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
            todos:[
                {id:'001',title:'吃饭',done:true},
                {id:'002',title:'喝酒',done:false},
                {id:'003',title:'开车',done:true},
            ]
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
        // this.todos = this.todos.filter((todo)=>{
        //   return todo.id !== id
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
  }

</script>
