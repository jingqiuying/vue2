
<template>
  <div class="container">
    <Category title="美食">
      <img slot="center" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
      <a slot="footer" href="https://www.baidu.com" target="_blank" rel="">百度</a>
    </Category>
    <Category title="游戏">
      <ul slot="center">
        <li v-for="(game,index) in games" :key="index">{{game}}</li>
      </ul>
      <div slot="footer" class="foot">
        <a href="http://" target="_blank">单机游戏</a>
        <a href="http://" target="_blank">网络游戏</a>
      </div>
    </Category>
    <Category title="电影">
      <video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
      <template v-slot:footer><!-- 较新的写法，只能在template标签写 -->
        <div class="foot">
          <a href="http://" target="_blank">经典</a>
          <a href="http://" target="_blank">热门</a>
          <a href="http://" target="_blank">推荐</a>
        </div>
        <h4>欢迎来看电影</h4>
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
    data() {
      return {
        foods: ['火锅', '烧烤', '小龙虾', '牛排'],
        games: ['红色警戒', '穿越火线', '劲舞团', '超级玛莉亚'],
        films: ['《肖生克的救赎》', '《阿甘正传》', '《你好,李焕英》', '《长津湖》']
      }
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