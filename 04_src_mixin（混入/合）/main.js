/* 
该文件是整个项目的入口文件
*/
// 引入Vue
import Vue from 'vue'
//引入App组件，它是所有组件的父组件
import App from './App.vue'
//关闭Vue的生产提示
Vue.config.productionTip = false

import { hunhe, hunhe2 } from './mixin'

Vue.mixin(hunhe)
Vue.mixin(hunhe2)

//创建vue实例对象 ---vm
new Vue({
  
  render: h => h(App),
}).$mount('#app')
