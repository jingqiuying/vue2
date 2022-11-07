<template>
  <div>
    <h1>{{msg}}</h1>
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <h2>学生年龄：{{myAge}}</h2>
    <button @click="add">年龄+1</button>
  </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:"Student",
    data() {
        return {
          msg:'欢迎来到这里',
          myAge:this.age,
        }
    },
    methods:{
      add(){
        // eslint-disable-next-line vue/no-mutating-props
        this.myAge++
      }
    },
    //简单接收
    // eslint-disable-next-line vue/no-dupe-keys
    props:['name','age','sex']

    //接收的同时对数据进行类型限制
    // props:{
    //   name:String,
    //   age:Number,
    //   sex:String
    // }

    //接收到的同时对数据：进行类型限制+默认的指定+ 必要性限定
    // props:{
    //   name:{
    //     typeof:String,
    //     require:true
    //   },
    //   age:{
    //     typeof:Number,
    //     default:23
    //   },

    //   sex:{
    //     typeof:String,
    //     require:true
    //   }
    // }
}
</script>

<style>

</style>