import api from '../../http/api'
// import router from '../../router'
// import { Message } from 'element-ui'

export default {
    // 开启命名空间 这个文件就是单独的一个vuex的模块
    namespaced: true,
    state: {
        // power: []
    },
    mutations: {
        // jurisdiction(state, data) {
        //     state.power = data
        // }
    },
    actions: {
        // 商品分类数据列表
        async getCategories({ commit }, type) {
            let res = await api.grtRights(type)
            console.log(commit);
            console.log(res.data);
            if (res.meta.status === 200) {
                res.data.map((item, index) => {
                    item.num = index + 1
                })
                // commit('jurisdiction', res.data)
            }
        }
    }
}