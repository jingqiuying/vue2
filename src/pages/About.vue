<template>
  <div>
    <h2>我是About的内容</h2>
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
  beforeRouteEnter(to, from, next) {
    console.log('@@即将进入about组件', to, from);
    if (to.meta.isAuth) {
        if (localStorage.getItem('id') === 'jiangqiuying') {
            next()
        } else {
            alert('学校名不对，没权限')
        }
    } else {
        next()
    }
  },
  beforeRouteLeave (to, from, next) {
    console.log('即将离开about组件',to,from);
    next()
  }

}
</script>

<style>

</style>