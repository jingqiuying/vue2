/* 
该文件是整个项目的入口文件
*/
// 引入Vue
import Vue from 'vue'
//引入App组件，它是所有组件的父组件
import App from './App.vue'
// 引用vue-router插件
import VueRouter from 'vue-router'
// 使用插件
Vue.use(VueRouter)
// 引入路由器
import router from './router'

//关闭Vue的生产提示
Vue.config.productionTip = false
//创建vue实例对象 ---vm
new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')