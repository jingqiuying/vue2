/* 
该文件是整个项目的入口文件
*/
// 引入Vue
import Vue from 'vue'
//引入App组件，它是所有组件的父组件
import App from './App.vue'

//引入vue-resource插件库
import vueResource from 'vue-resource'

//引入store
import store from './store'

//使用vue-resource插件库
Vue.use(vueResource)




//关闭Vue的生产提示
Vue.config.productionTip = false
//创建vue实例对象 ---vm
new Vue({
  render: h => h(App),
  store,
  beforeCreate(){
    Vue.prototype.$bus = this //安装全局事件总线
  }
}).$mount('#app')