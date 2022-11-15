<template>
  <div>
    <h2>Home组件内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link replace class="list-group-item" active-class="active" to="/home/news">News</router-link>
        </li>
        <li>
          <router-link replace class="list-group-item" active-class="active" to="/home/message">Message</router-link>
        </li>
      </ul>
      <!-- <keep-alive exclude="Message">不缓存指定的组件 -->
        <!-- <keep-alive>缓存所有展示的组件 -->
      <keep-alive include="News"><!-- 缓存指定的组件 -->
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Home',
   /*  beforeDestroy(){
      console.log('将要销毁的Home组件');
    }, */
   /*  mounted() {
      console.log('Home组件挂载完毕',this)
      window.homeRoute = this.$route
      window.homeRouter = this.$router
      
    }, */
}
</script>

<style>

</style>