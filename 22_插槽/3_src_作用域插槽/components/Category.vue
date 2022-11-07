<template>
    <div class="category">
        <h3>{{ title }}分类</h3>
       <slot :games="games" :myName="name">????</slot>
        <div class="foot">
            <a href="http://" target="_blank">单机游戏</a>
            <a href="http://" target="_blank">网络游戏</a>
        </div>
    </div>
</template>

<script>
export default {
    name:'Category',
    props:['title'],
    data() {
      return {
        games: ['红色警戒', '穿越火线', '劲舞团', '超级玛莉亚'],
        name:'jiangqiuying'
      }
    },
}
</script>

<style scoped>
    .category{
        width: 200px;
        height: 300px;
        background-color: skyblue;
    }
    h3{
        text-align: center;
        background-color: orange;
    }
    img{
        width: 100%;
    }
    video{
        width: 100%;
    }
</style>