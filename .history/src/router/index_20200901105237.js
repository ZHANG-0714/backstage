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
      name: 'users',
      title: "用户管理",
    },
    children: [
      {
        path: '/users/users',
        name: 'users',
        component: () => import('../views/Users.vue'),
        meta: {
          icon: 'el-icon-folder-opened',
          title: "用户列表",
        }
      }
    ]
  },
  // 权限管理
  {
    path: '/ration',
    component: Public,
    meta: {
      icon: 'el-icon-folder',
      name: 'ration',
      title: "权限管理",
    },
    children: [
      {
        path: '/ration/role',
        name: 'role',
        component: () => import('../views/Role.vue'),
        meta: {
          icon: 'el-icon-c-scale-to-original',
          title: "角色列表"
        }
      },
      {
        path: '/ration/ration',
        name: 'ration',
        component: () => import('../views/Power.vue'),
        meta: {
          icon: 'el-icon-c-scale-to-original',
          title: "权限列表"
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
