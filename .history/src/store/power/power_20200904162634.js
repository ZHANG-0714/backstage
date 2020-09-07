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
        // 权限列表
        async grtRights({ commit }) {
            let res = await api.grtRights()
            console.log(commit);
            console.log(res.data);
        }
    }
}