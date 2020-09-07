import api from '../../http/api'
import dayjs from "dayjs";
// import router from '../../router'
// import { Message } from 'element-ui'

export default {
    // 开启命名空间 这个文件就是单独的一个vuex的模块
    namespaced: true,
    state: {
        tabulation: []
    },
    mutations: {
        listing(state, data) {
            state.tabulation = data
        }
    },
    actions: {
        // 订单数据列表
        async getOrders({ commit }, { query, pagenum, pagesize, user_id, pay_status, is_send, order_fapiao_title, order_fapiao_company, order_fapiao_content, consignee_addr }) {
            console.log(commit);
            let res = await api.getOrders({
                query,
                pagenum,
                pagesize,
                user_id,
                pay_status,
                is_send,
                order_fapiao_title,
                order_fapiao_company,
                order_fapiao_content,
                consignee_addr
            })
            console.log(res.data);
            if (res.meta.status === 200) {
                res.data.goods.map((item, index) => {
                    item.num = index + 1
                    item.update_time = dayjs(item.update_time).format("YYYY-MM-DD hh:mm:ss")
                })
                commit('listing', res.data.goods)
            }
        }
    }
}