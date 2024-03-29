import Cookie from 'cookie'

export const state = () => ({
  cartUIStatus: 'idle',
  cart: []
})

export const getters = {
  cartCount: state => {
    if (!state.cart.length) return 0
    return state.cart.reduce((ac, next) => ac + next.quantity, 0)
  },
  cartTotal: state => {
    if (!state.cart.length) return 0
    return state.cart.reduce((ac, next) => ac + next.quantity * next.price, 0)
  }
}

export const mutations = {
  updateCartUI: (state, payload) => {
    state.cartUIStatus = payload
  },
  clearCart: state => {
    // this clears the cart
    ;(state.cart = []), (state.cartUIStatus = 'idle')
  },
  addToCart: (state, payload) => {
    const itemfound = state.cart.find(el => el.id === payload.id)
    itemfound
      ? (itemfound.quantity += payload.quantity)
      : state.cart.push(payload)
  }
}

export const actions = {
  clearTheCart ({ commit }) {
    commit('clearCart')
  },
  nuxtServerInit ({ dispatch }, { req }) {
    if (process.server && process.static) return
    if (!req.headers.cookie) return

    const cookies = Cookie.parse(req.headers.cookie || '')
    const token = cookies.access_token || ''

    console.log(token)
    if (token) return dispatch('users/attempt', token)
  }
}
