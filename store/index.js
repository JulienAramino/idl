import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      pages: {},
      drawer: null,
      title: 'Title'
    },
    actions: {
      async nuxtServerInit ({ commit }, { app }) {
        const pages = await app.$axios.$get('http://localhost:3000/content-api/articles')
        commit('setMenu', pages)
      },
      updateMenu ({commit, state, rootState}, data) {
        commit('setMenu', data)
      },
      setDrawer ({commit, state, rootState}, val) {
        commit('setDrawer', val)
      },
      setTitle ({commit, state, rootState}, val) {
        commit('setTitle', val)
      }
    },
    mutations: {
      setTitle (state, val) {
        state.title = val
      },
      setMenu (state, data) {
        state.pages = data
      },
      setDrawer (state, val) {
        state.drawer = val
      }
    }
  })
}

export default createStore
