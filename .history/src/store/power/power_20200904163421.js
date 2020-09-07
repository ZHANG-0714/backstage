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
        async grtRights({ commit },{type}) {
            let res = await api.grtRights({type})
            console.log(commit);
            console.log(res.data);
        }
    }
}