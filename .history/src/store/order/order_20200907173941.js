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
        // 订单数据列表
        async getOrders({ commit }, { query, pagenum, pagesize }) {
            console.log(commit);
            let res = await api.getOrders({
                query,
                pagenum,
                pagesize
            })
            console.log(res);
            if (res.meta.status === 200) {
                res.data.map((item, index) => {
                    item.num = index + 1
                })
                // commit('pagingtotal', res.data.total)
                // commit('classification', res.data.result)
            }
        }
    }
}