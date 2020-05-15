import { api } from '@/services/woocommerce'

export const state = () => ({
  products: {},
  isLoading: true,
  productAttributes: {},
  product: {}
})

export const getters = {
  currentProduct: state => {
    return state.product
  },
  getProductsAttributes: state => {
    return state.productsAttributes
  },
  getProducts: state => {
    return state.products
  },
  isLoading: state => {
    return state.isLoading
  }
}

export const mutations = {
  RESET_CURRENT_PRODUCT: state => {
    state.product = {}
  },
  RESET_CATEGORY: state => {
    state.products = {}
  },
  SET_CURRENT_PRODUCT: (state, data) => {
    state.product = data
  },
  SET_PRODUCTS_ATTRS_BY_ID: (state, data) => {
    state.productAttributes = data
  },
  SET_PRODUCTS_BY_ID: (state, data) => {
    state.products = data.sort(
      (a, b) => parseFloat(a.price) - parseFloat(b.price)
    )
  },
  PRODUCT_HIGH_TO_LOW: state => {
    state.products = state.products.sort(
      (a, b) => parseFloat(b.price) - parseFloat(a.price)
    )
  },
  PRODUCT_LOW_TO_HIGH: state => {
    state.products = state.products.sort(
      (a, b) => parseFloat(a.price) - parseFloat(b.price)
    )
  },
  SORT_ALPHABETICALLY: state => {
    state.products = state.products.sort(function (a, b) {
      if (a.name < b.name) {
        return -1
      }
      if (a.name > b.name) {
        return 1
      }
      return 0
    })
  },
  STOP_LOADING: state => {
    state.isLoading = false
  }
}

export const actions = {
  // Sorter Functions
  highToLow ({ commit }) {
    commit('PRODUCT_HIGH_TO_LOW')
  },
  lowToHigh ({ commit }) {
    commit('PRODUCT_LOW_TO_HIGH')
  },
  sortAlphabetically ({ commit }) {
    commit('SORT_ALPHABETICALLY')
  },
  // Product Functions
  productsCategoryId ({ commit, dispatch }, id) {
    api
      .get(`products?category=${id}`)
      .then(response => {
        commit('SET_PRODUCTS_BY_ID', response.data)
      })
      .catch(error => {
        console.log('Response Data:', error.response.data)
      })
      .finally(() => {})
  },

  getCurrentProduct ({ commit }, slug) {
    api
      .get(`products/?slug=${slug}`)
      .then(response => {
        console.log(response.data[0])
        commit('SET_CURRENT_PRODUCT', response.data[0])
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        commit('STOP_LOADING')
      })
  },

  // Reset Functions
  resetProduct ({ commit }) {
    commit('RESET_CURRENT_PRODUCT')
  },
  resetCategory ({ commit }) {
    commit('RESET_CATEGORY')
  }
}
