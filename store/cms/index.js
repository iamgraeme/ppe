import axios from 'axios'

export const state = () => ({
  pages: {},
  currentPage: {}
})

export const getters = {
  getCurrentCmsPage: state => {
    return state.currentPage
  }
}

export const mutations = {
  SET_CURRENT_CMS_PAGE: (state, data) => {
    state.currentPage = data
  },
  SET_CMS_PAGES: (state, data) => {
    state.pages = data
  }
}

export const actions = {
  async retrieveAllPages ({ commit }) {
    await axios
      .get('https://api.purplepeopleeater.co.uk/wp-json/wp/v2/pages')
      .then(response => {
        commit('SET_CMS_PAGES', response.data)
      })
      .catch(error => {
        console.log(error)
      })
  },
  async retrievePageById ({ commit }, id) {
    await axios
      .get(`https://api.purplepeopleeater.co.uk/wp-json/wp/v2/pages/${id}`)
      .then(response => {
        commit('SET_CURRENT_CMS_PAGE', response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }
}
