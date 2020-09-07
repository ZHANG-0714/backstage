import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Public from '../views/Public.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    redirect: '/'
  },
  // 首页
  {
    path: '/',
    component: Public,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,  //首页
        meta: {
          title: "首页",
          icon: 'el-icon-s-home'
        }
      }
    ]
  },
  // 用户管理
  {
    path: '/users',
    component: Public,
    meta: {
      icon: 'el-icon-user',
      name: 'users'
    },
    children: [
      {
        path: '/users/users',
        name: 'users',
        component: () => import('../views/Users.vue'),
        meta: {
          icon: 'el-icon-folder-opened'
        }
      }
    ]
  },


  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),  //登录
    meta: {
      title: "登录"
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router