//该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
import Home from '../pages/Home'
import About from '../pages/About'
import Show from '../pages/son/Show'
import List from '../pages/son/List'
import Message from '../pages/Message'
import News from '../pages/News'
import Detail from '../pages/Detail'
// 创建并暴露一个路由器
export default new VueRouter({
    routes:[
        {
            name:'guangyu',
            path:'/about',
            component:About,
            children:[
                {
                    path:'show',
                    component:Show
                },
                {
                    path:'list',
                    component:List
                },
            ]
        },
        {
            path:'/home',
            component:Home,
            children:[
                {
                    path:'message',
                    component:Message,
                    children: [
                        {
                            name:'xiangqing',
                            path: 'detail',
                            component: Detail,

                            // props的第一中写法，值为对象中的所有key-value都会以props的形式传给组件。
                            // props:{a:1,b:'helle'},

                             // props的第二中写法，值为布尔值，若只为真，就会把该路由组件收到的所有params参数，以props的形式传给Detail组件。
                            //  props:true,

                             // props的第二中写法，值为函数
                             /* props($router){
                                return {id:$router.query.id,title:$router.query.title}
                             } */
                             //解构赋值的连续写法
                             props({query:{id,title}}){
                                return {id:id,title:title}
                             }
                        }
                    ]
                },
                {
                    path:'news',
                    component:News
                },
            ]
        },
        
    ]
})