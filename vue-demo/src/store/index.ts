import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

declare module 'vue/types/vue'{
  interface Vue {
      $myProperty:string
  }
}

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
