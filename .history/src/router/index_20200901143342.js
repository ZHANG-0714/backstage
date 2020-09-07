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
  {
    path: '/users',
    redirect: '/users/users'
  },
  {
    path: '/rights',
    redirect: '/rights/role'
  },
  {
    path: '/rights',
    redirect: '/rights/rights'
  },
  {
    path: '/commodity',
    redirect: '/commodity/commodity'
  },
  {
    path: '/commodity',
    redirect: '/commodity/sort'
  },
  {
    path: '/commodity',
    redirect: '/commodity/goods'
  },
  {
    path: '/orders',
    redirect: '/orders/orders'
  },
  {
    path: '/record',
    redirect: '/record/record'
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
    path: '/rights',
    component: Public,
    meta: {
      icon: 'el-icon-folder',
      name: 'rights',
      title: "权限管理",
    },
    children: [
      {
        path: '/rights/role',
        name: 'role',
        component: () => import('../views/Role.vue'),
        meta: {
          icon: 'el-icon-setting',
          title: "角色列表"
        }
      },
      {
        path: '/rights/rights',
        name: 'rights',
        component: () => import('../views/Power.vue'),
        meta: {
          icon: 'el-icon-c-scale-to-original',
          title: "权限列表"
        }
      }
    ]
  },


  // 商品管理
  {
    path: '/commodity',
    component: Public,
    meta: {
      icon: 'el-icon-goods',
      name: 'commodity',
      title: "商品管理",
    },
    children: [
      {
        path: '/commodity/commodity',
        name: 'commodity',
        component: () => import('../views/Commodity.vue'),
        meta: {
          icon: 'el-icon-help',
          title: "商品列表"
        }
      },
      {
        path: '/commodity/sort',
        name: 'sort',
        component: () => import('../views/Sort.vue'),
        meta: {
          icon: 'el-icon-bell',
          title: "分类参数"
        }
      },
      {
        path: '/commodity/goods',
        name: 'goods',
        component: () => import('../views/Goods.vue'),
        meta: {
          icon: 'el-icon-date',
          title: "商品分类"
        }
      }
    ]
  },

  // 订单管理
  {
    path: '/orders',
    component: Public,
    meta: {
      icon: 'el-icon-s-order',
      name: 'orders',
      title: "订单管理",
    },
    children: [
      {
        path: '/orders/orders',
        name: 'orders',
        component: () => import('../views/Order.vue'),
        meta: {
          icon: 'el-icon-folder-add',
          title: "订单列表",
        }
      }
    ]
  },

  // 数据统计
  {
    path: '/record',
    component: Public,
    meta: {
      icon: 'el-icon-message',
      name: 'record',
      title: "数据统计",
    },
    children: [
      {
        path: '/record/record',
        name: 'record',
        component: () => import('../views/Record.vue'),
        meta: {
          icon: 'el-icon-position',
          title: "数据报表",
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
