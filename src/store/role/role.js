import api from '../../http/api'
// import router from '../../router'
// import { Message } from 'element-ui'

export default {
    // 开启命名空间 这个文件就是单独的一个vuex的模块
    namespaced: true,
    state: {
        part: []
    },
    mutations: {
        setyPart(state, data) {
            state.part = data
        }
    },
    actions: {
        // 角色列表
        async getRoles({ commit }) {
            let res = await api.getRoles()
            // console.log(commit);
            console.log(res.data);
            if (res.meta.status === 200) {
                res.data.map((item, index) => {
                    item.num = index + 1
                })
                commit('setyPart', res.data)
            }
        }
    }
}