import { api } from '@/services/woocommerce'
export const state = () => ({
  previousOrders: {}
})

export const getters = {
  previousOrders: state => {
    return state.previousOrders
  }
}

export const mutations = {
  SET_PREVIOUS_ORDERS: (state, data) => {
    state.previousOrders = data
  }
}

export const actions = {
  async getCustomerPreviousOrders ({ commit }, customerId) {
    await api
      .get(`orders?customer=${customerId}&per_page=100`)
      .then(response => {
        const { data } = response
        commit('SET_PREVIOUS_ORDERS', data)
      })
      .catch(error => {
        console.log(error)
      })
  }
}
