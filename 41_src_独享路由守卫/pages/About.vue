<template>
  <div>
    <h2>我是About的内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link class="list-group-item" active-class="active" to="/about/list">List</router-link>
        </li>
        <li>
          <router-link class="list-group-item" active-class="active" to="/about/show">Show</router-link>
        </li>
      </ul>
    </div>
    
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: 'About',
   /*  beforeDestroy(){
      console.log('将要销毁的About组件');
    }, */
/*     mounted() {
      console.log('About组件挂载完毕',this.$route);
      // window.aboutRoute = this.$route
      // window.aboutRouter = this.$router
    }, */
    
}
</script>

<style>

</style>