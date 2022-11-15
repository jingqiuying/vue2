//该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
import Home from '../pages/Home'
import About from '../pages/About'
import Message from '../pages/Message'
import News from '../pages/News'
import Detail from '../pages/Detail'
// 创建并暴露一个路由器
const router = new VueRouter({
    mode:'history',
    routes: [
        {
            name: 'guangyu',
            path: '/about',
            component: About,
            meta:{title:'关于',isAuth:true},
           
        },
        {
            name: 'jia',
            path: '/home',
            component: Home,
            meta:{title:'主页'},
            children: [
                {
                    name:'xinxi',
                    path: 'message',
                    component: Message,
                    meta:{isAuth:true,title:'信息'},
                    children: [
                        {
                            name: 'xiangqing',
                            path: 'detail',
                            component: Detail,
                            meta:{isAuth:true,title:'详情'},
                            //解构赋值的连续写法
                            props({ query: { id, title } }) {
                                return { id: id, title: title }
                            }
                        }
                    ]
                },
                {
                    name: 'xinwen',
                    meta: { isAuth: true, title: '新闻' },
                    path: 'news',
                    component: News,
                    //独享路由守卫
                    /* beforeEnter: (to, from, next) => {
                        console.log('独享路由守卫', to, from);
                        if (to.meta.isAuth) {
                            if (localStorage.getItem('id') === 'jiangqiuying') {
                                next()
                            } else {
                                alert('学校名不对，没权限')
                            }
                        } else {
                            next()
                        }
                    } */
                },
            ]
        },

    ]
})
//全局前置路由守卫————初始化的时候被调用、每次路由切换之前被调用
/* router.beforeEach((to,from,next)=>{
    console.log('前置路由守卫',to,from);
    
    if (to.meta.isAuth) {
        if (localStorage.getItem('id') === 'jiangqiuying') {
            next()
        } else {
            alert('学校名不对，没权限')
        }
    } else {
        next()
    }
}) */
//全局后置路由守卫————初始化的时候被调用、每次路由切换之前被调用
router.afterEach((to,from)=>{
    console.log('后置路由守卫',to,from);
    document.title = to.meta.title || '练习系统'
})
export default router