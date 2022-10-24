export const state = () => ({
  token: null
})

export const mutations = {
  setToken(state, token) {
    state.token = token;
  },
  cleanToken(state) {
    state.token = null;
  }
}

export const actions = {
  login({ commit }) {
    commit('setToken', true);
  },
  logout({ commit }) {
    commit('cleanToken');
  }
}

export const getters = {
  hasToken: (state) => !!state.token
}
