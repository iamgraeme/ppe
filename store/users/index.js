import Cookie from 'js-cookie'
import axios from 'axios'

export const state = () => ({
  user: {
    email: ''
  },
  token: '',
  isAuthenticated: false
})

export const getters = {
  isAuthenticated: state => {
    return state.isAuthenticated
  },

  loggedInUser: state => {
    return state.user
  }
}

export const mutations = {
  SET_EMAIL: (state, email) => {
    state.user.email = email
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_USER: (state, data) => {
    state.user = data
    state.isAuthenticated = true
  },

  DELETE_USER: state => {
    state.user = {}
    state.token = ''
    state.isAuthenticated = false
  }
}

export const actions = {
  async login ({ commit, dispatch }, login) {
    const response = await axios.post(
      'https://api.purplepeopleeater.co.uk/wp-json/jwt-auth/v1/token',
      login
    )
    console.log(response.data)
    commit('SET_EMAIL', login.username)
    dispatch('attempt', response.data.token)
  },
  async attempt ({ commit }, token) {
    Cookie.set('access_token', token)
    commit('SET_TOKEN', token)
    try {
      const response = await axios.get(
        'https://api.purplepeopleeater.co.uk/wp-json/wp/v2/users/me',
        {
          headers: {
            Authorization: 'Bearer ' + token
          }
        }
      )
      commit('SET_USER', response.data)
    } catch (e) {
      commit('SET_TOKEN', null)
      commit('SET_USER', null)
    }
  },
  async logout ({ commit }) {
    Cookie.remove('access_token')
    localStorage.removeItem('token')
    commit('DELETE_USER')
  }
}
