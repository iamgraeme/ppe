import { api } from "@/services/woocommerce";

export const state = () => ({
  reviews: {}
});

export const getters = {};

export const mutations = {
  //   SET_REVIEWS_BY_PRODUCT_ID: (state, data) => {
  //     state.reviews = data;
  //   }
};

export const actions = {
  getReviewsByProdId({ commit }, id) {
    api
      .get("products/reviews")
      .then(response => {
        const { data } = response;

        const reviewsFromProductId = data.filter(review => review.id === id);

        console.log(reviewsFromProductId);
        //commit("SET_REVIEWS_BY_PRODUCT_ID", reviewsFromProductId);
      })
      .catch(error => {
        console.log("Response Data:", error.response.data);
      })
      .finally(() => {});
  }
};
