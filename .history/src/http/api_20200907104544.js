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
        return service.get(`/categories ? type=${type}&pagenum=${pagenum}&pagesize=${pagesize}`)
    }
} 