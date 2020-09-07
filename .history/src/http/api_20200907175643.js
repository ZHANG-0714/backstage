import service from './index'

export default {
    login({ username, password }) {
        return service.post('/login', {
            username,
            password
        })
    },
    getMenus() {
        return service.get('menus')
    },
    getUsers({ query, pagenum, pagesize }) {
        return service.get(`/users ? query = ${query}&pagenum=${pagenum}&pagesize=${pagesize}`)
    },
    getReports() {
        return service.get('reports/type/1')
    },
    getRoles() {
        return service.get('/roles')
    },
    grtRights(type) {
        return service.get(`rights/${type}`)
    },
    getCategories({ type, pagenum, pagesize }) {
        return service.get(`/categories?type=${type}&pagenum=${pagenum}&pagesize=${pagesize}`)
    },
    getOrders({ query, pagenum, pagesize, user_id, pay_status, is_send, order_fapiao_title, order_fapiao_company, order_fapiao_content, consignee_addr }) {
        return service.get(`/orders ? query=${query}&pagenum=${pagenum}&pagesize=${pagesize}&user_id=${user_id}&pay_status=${pay_status}&is_send=${is_send}&order_fapiao_title=${order_fapiao_title}&order_fapiao_company=${order_fapiao_company}&order_fapiao_content=${order_fapiao_content}&consignee_addr=${consignee_addr}`)
    }
    // getOrders({ query, pagenum, pagesize, user_id,
    //     pay_status, is_send, order_fapiao_title,
    //     order_fapiao_company, order_fapiao_content, consignee_addr }) {
    //     return service.get(`/orders?query=${query}&pagenum=${pagenum}&pagesize=${pagesize}&user_id=${user_id}&pay_status=${pay_status}&is_send=${is_send}&order_fapiao_title=${order_fapiao_title}&order_fapiao_company=${order_fapiao_company}&order_fapiao_content=${order_fapiao_content}&consignee_addr=${consignee_addr}`)
    // },
} 