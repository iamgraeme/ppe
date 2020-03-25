import { api } from "@/services/woocommerce";

export const state = () => ({
  products: {},
  isLoading: true,
  productAttributes: {}
});

export const getters = {
  getProductsAttributes: state => {
    return state.productsAttributes;
  },
  getProducts: state => {
    return state.products;
  },
  isLoading: state => {
    return state.isLoading;
  }
};

export const mutations = {
  SET_PRODUCTS_ATTRS_BY_ID: (state, data) => {
    state.productAttributes = data;
  },
  SET_PRODUCTS_BY_ID: (state, data) => {
    state.products = data.sort(
      (a, b) => parseFloat(a.price) - parseFloat(b.price)
    );
  },
  PRODUCT_HIGH_TO_LOW: (state, data) => {},
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
  },

  getProductsAttributesById({ commit, dispatch }, id) {
    api
      .get(`products/${id}/variations`)
      .then(response => {
        console.log(response.data);
        commit("SET_PRODUCTS_ATTRS_BY_ID", response.data);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {});
  }
};
