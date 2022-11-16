[TOC]

![image-20221031152215611](C:\Users\86184\AppData\Roaming\Typora\typora-user-images\image-20221031152215611.png)

## 关于不同版本的Vue：

> 1.vue.js与vue.runtime.xxx.js的区别：

> （1）.vue.js是完整版的Vue，包含：核心功能+模板解析器。

>   （2）.vue.runtime.xxx.js是运行版的Vue， 只包含：核心功能；没有模板解析器。

> 2.因为vue.rumtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用

> render函数接收到的createElement函数去指定具体内容



## vue.config.js配置文件

> 使用vue inspect > output.js可以查看Vue手脚架的默认配置。

> 使用vue.config.js可以对手脚架进行个性化定制，详见：https://cli.vue.js.org/zh
>
> 

## ref属性
1. 被用来给元素或子组件注册引用信息（id的替代者）

2. 应用在HTML标签上获取的是真实DOM元素，应用在组件标签是组件实例对象（vc）

3. 使用方式：

   > 打标签：<h1 ref="xxx">....</h1> or <Up ref="xxx"></Up>
   >
   > 获取：this.$refs.xxx

配置项props

 功能：让组件接收外部传进来的数据

 ​	(1).传递数据：

 ​			第一种方式（只接收）：

 ​					props:['nama']

 ​			第二种方式（限定类型）：

 ​				props：{

 ​						name：Number

 ​					}

 ​			第三种方式（限定类型、限定必要性、指定默认值）

​					props：{

​						name：{

                     type：String，//类型
    
                     required：true，//必要性
    
                     default：‘王五’//默认值
    
                     }
​					}
​      备注：props是只读的，Vue底层会监测你对props的修改，如果修改，就会发出警告。



## mixin(混入)
   功能：可以把多个组件公用的配置提前成一个混入对象
   使用方式：
      第一步定义混合，例如：
         {
            data(){...},
            methods:{....}
         }
      第二步使用混入，例如：
         （1）.全局混入:Vue.mimin(xxx)
         （2）.局部混入:mixin['xxx']

## plugins(插件)

​      功能：用于增强Vue
​      本质：包含install方法的一个对象，install的第一个参数是Vue，第二个参数是插件使用者传递的数据。
​      定义插件：
​         对象.install = function(Vue,options){
​             //全局过滤器
​          Vue.filter('mySlice',function(value){
​            return value.slice(0,4)
​        })

        //定义混入
        Vue.mixin({methods: {
            showName(){
                alert(this.name)
            }
        },})
    
        //添加实例方法
        Vue.prototype.$hello = ()=>{alert('hello')}


         }

使用插件：Vue.user();



## scoped样式

   作用：让样式局部生效，防止冲突
   写法：<style scoped>

## 总结TodoList案例

1.组件化编码流程：

​	（1）.拆分静态组件：组件要按照功能点拆分，命名不要与HTML元素冲突。

​	（2）.实现动态组件：考虑好数据的存放位置，数据是一个组件在用，还是一些组件在用：

​				1）.一个组件在用：放在组件自身即可。

​				2）.一些组件在用：放在它们共同的父组件上（状态提升）。

​	（3）.实现交互：从绑定事件开始。

2.props适用于：

​	（1）.父组件 ==》 子组件 通信

​	（2）.子组件 ==》 父组件 通信 （要求父亲先给子一个函数）

3.使用v-model时要切记：v-model绑定的值不能时props传过来的值，因为props是不可以修改的！

4.props传过来的若是对象类型的值，修改对象中的属性时Vue不会报错，但不推荐这样做。

## webStorage

1.存储内容大小一般支持5MB左右，（不同浏览器可能还不一样）

2.浏览器端通过Window.sessionStorage和Window.localStorage 属性来实现本地存储机制。

3.相关API：

1. xxxStorage.setItem('key','value');

   该方法接受一个键和值作为参数，会把键值对添加到存储中，如果键名存在，则更新其对应的值。

2. xxxStorage.getItem('key');

   该方法接收一个键名作为参数，返回键名对应的值。

3. xxxStorage.removeItem('key');

   该方法接收一个键名作为参数，并把该键名从存储中删除。

4. xxxStorage.clear()

   该方法会清空存储中的所有数据。

4.备注

1. SessionStorage存储的内容会随着浏览器窗口关闭而消失。
2. LocalStorage存储的内容，需要手动清除才会消失。
3. xxxxStorage.getItem('xxx')如果xxx对应的value获取不到，那么getItem的返回值是null。
4. JSOM.parse(null)的结果依然是null。

## 组件的自定义事件

1. 一种组件间通信的方式，适用于：子组件 ====》 父组件

2. 使用场景：A是父组件，B是子组件，B想给A传数据，那么就要在A中给B绑定自定义事件（事件的回调在A中）。

3. 绑定自定义事件：

   1. 第一种方式，在父组件中：<Demo v-on:jiang="test" />或<Demo @jiang="test" />

   2. 第二种方式，在父组件中：

      ```javascript
      <School ref="getName"/>
      
      mounted() {
         this.$refs.getName.$on('myaddress',this.getSchoolAddress)//可以多次点击
         // this.$refs.getName.$once('myaddress',this.getSchoolAddress)//只能点击一次
        },
      ```

   3. 若想让自定义事件只能触发一次，可以使用once修饰符，或$once方法。

4. 触发自定义事件：this.$emit('myaddress',this.address)

5. 解绑自定义事件：this.$off(['myschool','myaddress'])//解绑多个事件

6. 组件上也可以绑定原生DOM事件，需要用native修饰符。

7. 注意：通过 this.$refs.xxx.$on('myscool',回调)绑定自定义事件时，回调要么配置在methods中，要么用箭头函数，否则this指定出问题！

## 全局事件总线（GlobalEventBus）

1. 一种组件间通信的方式，适用于**任意组件间通信**

2. 安装全局事件总线：

   ```javascript
   new Vue({
    render: h => h(App),
    beforeCreate(){
     Vue.prototype.$bus = this //安装全局事件总线
    }
   }).$mount('#app')
   ```

3. 使用事件总线：

   1. 接收数据：A组件像接收数据，则在A组件中给￥bus绑定自定义事件，事件的<span style="color:red">回调留在A组件自身</span>。

      ```javascript
      methods(){
      	demo(data){.........}
      }
      .......
      mounted(){
          this.$bus.$on('xxxx',this.demo)
      }
      ```

   2. 提供数据：this.$bus.$emit('xxx',数据)

4. 最好在beforeDestroy钩子中，用$off去解绑当前组件所用到的事件。



## 信息订阅与发布（pubsub)

1. 一种组件间通信的方式，适用于<span style="color:red">任意组件间通信</span>。

2. 使用步骤：

   1. 安装pubsub：npm i pubsub-js

   2. 引入：import pubsub from 'pubsub-js'

   3. 接收数据：A组件想接收数据，则在A组件中订阅信息，订阅的<span style="color:red">回调留在A组件自身</span>.。

      ```javascript
      methods:{
          demo(data){........}
      }
      ...........
      mounted(){
          this.pid = pubsub.subscribe('xxx',this.demo)//订阅消息
      }
      ```

   4. 提供数据：pubsub.publish('xxx',数据)

   5. 最好在beforeDestroy钩子中，用pubsub.unsubcribe(pid)去<span style="color:red">取消订阅</span>。

      

## nextTick

1. 语法：this.$nextTick(回调函数)
2. 作用：在下一次DOM更新结束执行其指定的回调。
3. 是么时候用：当改变数据后，要基于更新后的新DOM进行操作时，要在nextTick所指定的回调函数中执行。



## Vue封装的过度与动画

1. 作用：在插入、更新或移除DOM元素时，在合适的时候给元素添加样式类名。

2. 图示

   <img src="C:\Users\86184\AppData\Roaming\Typora\typora-user-images\image-20221106172822276.png" alt="image-20221106172822276" style="zoom: 67%;" />

3. 写法：

   1. 准备好样式：

      - 元素进入的样式：
        1. v-enter:进入的起点
        2. v-enter-active:进入的过程中
        3. v-enter-to:进入的终点
      - 元素离开的样式
        1. v-leave:离开的起点
        2. v-leave-active:离开的过程中
        3. v-leave-to:离开的终点

   2. 使用<transition>包裹要过度的元素，并配置name属性：

      ```html
      <transition name="hello">
          <h1 v-show="isShow">你好啊！！</h1>
      </transition>
      ```

   3. 备注：若有多个元素需要过度，则需要使用：<transition-group>,且每个元素都要指定key值。

## vue脚手架配置代理

​	<span style="font-size:21px"><b>方法一</b></span>

​		在vue.config.js中添加如下配置：

```javascript
devServer:{
   proxy: 'http://localhost:5000'//
 } 
```

说明：

1. 优点：配置简单，请求资源直接发给前端（8080）即可。

2. 缺点：不能配置多个代理，不能灵活控制请求是否走代理。

3. 工作方式：若按照上述配置代理，当请求了前端不存在的资源时，那么请求会转发给服务器（优先匹配前端资源）

   <span style="font-size:21px"><b>方法二</b></span>

   ​		编写vue.config.js配置具体代理规则：

   ```javascript
   module.exports = {
     devServer: {
       proxy: {
         '/api': {
           target: '<url>',
           ws: true,
           changeOrigin: true
         },
         '/foo': {
           target: '<other_url>'
         }
       }
     }
   }
   ```

   说明：

   1. 优点：可以配置多个代理，且可以灵活的控制请求是否走代理。
   2. 缺点：配置略微繁琐，请求资源必须加前缀。



## 插槽

1. ​	作用：让父组件可以向子组件指定位置插入HTML结构，也是一种组件间通信的方式，适用于父组件===》子组件

2. 分类：默认插槽、具名插槽、作用域插槽

3. 使用方式：

   1. 默认插槽

      ```
      父组件：
      <Category>
         <div>html结构</div>
      </Category>
      子组件：
      <div class="category">
         <slot>
          我是一些默认值，当使用者没有传递具体结构时，我会出现		</slot>
      </div>
      ```

   2. 具名插槽

      ```
      父组件：
       <Category>
      	<template slot="center">
      		<div>HTML结构1</div>
      	</template>
      	
      	<template v-slot="footer">
      		<div>HTML结构2</div>
      	</template>
       </Category>
      子组件：
      <template>
      	<div>
      		<slot name="center">插槽默认内容。。。</slot>
      		<slot name="footer">插槽默认内容。。。</slot>
      	</div>
      </template>
      ```

      

   3. 

   











































































