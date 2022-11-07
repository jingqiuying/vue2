
<template>
  <div class="container">
    <Category title="游戏">
      <template scope="jiang">
        <ul>
          <li v-for="(game, index) in jiang.games" :key="index">{{ game }}</li>
        </ul>
      </template>
     
    </Category>
    <Category title="游戏">
      <template scope="{games,myName}"> <!-- 结构赋值 -->
        <ol>
          <li v-for="(game, index) in games" :key="index">{{ game }}</li>
        </ol>
        {{myName}}
      </template>
    </Category>
    <Category title="游戏">
      <template slot-scope="{games}">
        <h4 v-for="(game, index) in games" :key="index">{{ game }}</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from './components/Category'
//引入组件
export default {
    name:'App',
    components:{
      Category
    },
    
}
</script>
<style>
  .container,.foot{
    display: flex;
    justify-content: space-around;
  }
  h4{
    text-align: center;
  }
</style>