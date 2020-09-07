import api from '../../http/api'
import router from '../../router'
import { Message } from 'element-ui'
router.options.routes

export default {
    // 开启命名空间 这个文件就是单独的一个vuex的模块
    namespaced: true,
    state: {
        menus: []
    },
    mutations: {
        setMenus(state, data) {
            state.menus = data
        }
    },
    actions: {
        //所有的请求都写在actions里面
        // actions 里面的方法可以传两个参数，第一个参数是整个store(vuex对象) 第二个参数是请求的参数
        async getMenus({ commit }) {
            let res = await api.getMenus()
            if (res.meta.status === 200) {
                res.data.unshift('首页')
                res.data.map(item => {
                    router.options.routes.map(item1 => {
                        if (item.children) {
                            item1.children.map(item2 => {
                                if (item2.name === item.path) {
                                    item.icon = item2.meta.icon
                                }
                            })
                        }
                    })
                })
                // router.options.routes.map(item => {
                //     if (item.children) {
                //         router.options.routes = item
                //     }
                // })
                // 提交mutation
                commit('setMenus', res.data)
            }
            console.log(res.data);
            console.log(router.options.routes);
        },
        //登录
        async login({ commit }, { username, password }) {
            let res = await api.login({
                username,
                password
            })
            console.log(commit);
            console.log(res);
            if (res.meta.status === 200) {
                console.log(res);
                // 存储信息
                localStorage.setItem('adminToken', res.data.token)
                localStorage.setItem('adminUser', JSON.stringify(res.data))
                // 跳转路由
                router.push('/')
                // 提示用户
                Message.success('登录成功')
            } else {
                Message.error(res.meta.msg)
            }
        }
    },
}