import Vue from 'vue'
import Vuex from 'vuex'
import user from './user/user'
import role from './role/role'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user,
    role
  }
})
