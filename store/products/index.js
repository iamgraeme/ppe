import { api } from "@/services/woocommerce";

export const state = () => ({
  products: {},
  isLoading: true
});

export const getters = {
  getProducts: state => {
    return state.products;
  },
  isLoading: state => {
    return state.isLoading;
  }
};

export const mutations = {
  SET_PRODUCTS_BY_ID: (state, data) => {
    state.products = data;
  },
  STOP_LOADING: state => {
    state.isLoading = false;
  }
};

export const actions = {
  productsCategoryId({ commit, dispatch }, id) {
    api
      .get(`products?category=${id}`)
      .then(response => {
        commit("SET_PRODUCTS_BY_ID", response.data);
      })
      .catch(error => {
        console.log("Response Data:", error.response.data);
      })
      .finally(() => {});
  },

  stopLoading({ commit }) {
    console.log("Stop Loading");
    commit("STOP_LOADING");
  }
};
