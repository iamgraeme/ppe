import { api } from '@/services/woocommerce'
import axios from 'axios'

export const state = () => ({
  pages: {},
  categories: {},
  footerLinks: []
})

export const getters = {
  getNavigationItems: state => {
    return state.categories
  },
  footerLinks: state => {
    return state.footerLinks
  }
}

export const mutations = {
  SET_NAVIGATION_ITEMS: (state, data) => {
    state.categories = data.filter(function (category) {
      return category.id !== 15
    })
  },
  SET_FOOTER_LINKS: (state, data) => {
    state.footerLinks = data
  }
}

export const actions = {
  async navigationItems ({ commit }) {
    await api
      .get('products/categories')
      .then(response => {
        commit('SET_NAVIGATION_ITEMS', response.data)
      })
      .catch(error => {
        console.log('from navigation', error)
      })
  },
  async getFooterLinks ({ commit }) {
    await axios
      .get(
        'https://api.purplepeopleeater.co.uk/wp-json/menus/v1/locations/footer'
      )
      .then(response => {
        // console.log('from footer', response.data.items)
        commit('SET_FOOTER_LINKS', response.data.items)
      })
      .catch(error => {
        console.log(error)
      })
  }
}
