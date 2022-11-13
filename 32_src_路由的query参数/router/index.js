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
                            path: 'detail',
                            component: Detail,
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