import api from '../../http/api'
// import router from '../../router'
// import { Message } from 'element-ui'

export default {
    // 开启命名空间 这个文件就是单独的一个vuex的模块
    namespaced: true,
    state: {

    },
    mutations: {

    },
    actions: {
        // 角色列表
        async getRoles({ commit }) {
            let res = await api.getRoles()
            console.log(commit);
            console.log(res);
        }
    }
}