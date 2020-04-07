import { api } from "@/services/woocommerce";

export const state = () => ({
  pages: {},
  categories: {},
});

export const getters = {
  getNavigationItems: (state) => {
    return state.categories;
  },
};

export const mutations = {
  SET_NAVIGATION_ITEMS: (state, data) => {
    state.categories = data.filter(function (category) {
      return category.id !== 15;
    });
  },
};

export const actions = {
  async navigationItems({ commit }) {
    await api
      .get("products/categories")
      .then((response) => {
        commit("SET_NAVIGATION_ITEMS", response.data);
      })
      .catch((error) => {
        console.log("from navigation", error);
      });
  },
};
