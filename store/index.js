import axios from "axios";
import cookieparser from "cookieparser";
import JWTDecode from "jwt-decode";

export const state = () => ({
  cartUIStatus: "idle",
  cart: []
});

export const getters = {
  cartCount: state => {
    if (!state.cart.length) return 0;
    return state.cart.reduce((ac, next) => ac + next.quantity, 0);
  },
  cartTotal: state => {
    if (!state.cart.length) return 0;
    return state.cart.reduce((ac, next) => ac + next.quantity * next.price, 0);
  }
};

export const mutations = {
  updateCartUI: (state, payload) => {
    state.cartUIStatus = payload;
  },
  clearCart: state => {
    //this clears the cart
    (state.cart = []), (state.cartUIStatus = "idle");
  },
  addToCart: (state, payload) => {
    let itemfound = state.cart.find(el => el.id === payload.id);
    itemfound
      ? (itemfound.quantity += payload.quantity)
      : state.cart.push(payload);
  }
};

export const actions = {
  nuxtServerInit({ dispatch }, { req }) {
    if (process.server && process.static) return;
    if (!req.headers.cookie) return;

    let { token } = cookieparser.parse(req.headers.cookie);
    dispatch("users/attempt", token);
  }
};
