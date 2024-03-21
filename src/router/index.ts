import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path:'/login',
        name:'Login',
        meta:{
            title:'登录',
            keepAlive:true,
            requireAuth:false
        },
        component:()=>import('@/pages/login.vue')
    },{
        path:'/',
        redirect:'/manage',
    },{
        path:'/manage',
        name:'Manage',
        meta:{
            title:'首页',
            keepAlive:true,
            requireAuth:true
        },
        component:()=>import('@/pages/index.vue'),
        beforeEnter: (to, from, next) => {
            if (!localStorage.getItem('token')) {
                to.path === '/login'? next() : router.push('/login')
            } else {
              next()
            }
          },
        children:[
        ]
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router