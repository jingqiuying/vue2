/* 
该文件是整个项目的入口文件
*/
// 引入Vue
import Vue from 'vue'
//引入App组件，它是所有组件的父组件
import App from './App.vue'
// 引用vue-router插件
// import ElementUI from 'element-ui'
// 引入Element UI的全部样式
// import 'element-ui/lib/theme-chalk/index.css';

import { Button, Row, DatePicker } from 'element-ui';


//关闭Vue的生产提示
Vue.config.productionTip = false
// Vue.use(ElementUI)



Vue.component('el-button', Button);
Vue.component('el-row', Row);
Vue.component('el-date-picker', DatePicker);


//创建vue实例对象 ---vm
new Vue({
  render: h => h(App),
}).$mount('#app')