import api from '../../http/api'
import router from '../../router'
import { Message } from 'element-ui'

export default {
    // 开启命名空间 这个文件就是单独的一个vuex的模块
    namespaced: true,
    state: {
        menus: []
    },
    mutations: {
        seMenus(state, data) {
            state.menus = data
        }
    },
    actions: {
        //所有的请求都写在actions里面
        // actions 里面的方法可以传两个参数，第一个参数是整个store(vuex对象) 第二个参数是请求的参数
        async getMenus({ commit }, { username, password }) {
            let res = await api.getMenus()
            if (res.meta.status === 200) {
                // 提交mutation
                commit('setMenus', res.data)
            }
        },
        async login({ commit }, { username, password }) {
            let res = await api.login({
                username,
                password
            })
            if (res.meta.status === 200) {
                // 存储信息
                localStorage.setItem('adminToken',res.data.toke)
            }
        }
    },
}