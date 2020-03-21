import Cookie from "js-cookie";
import axios from "axios";

import { productsByCategory } from "@/services/woocommerce";

export const state = () => ({
  user: {},
  token: "",
  isAuthenticated: false,
  email: ""
});

export const getters = {
  isAuthenticated: state => {
    return state.isAuthenticated;
  },

  loggedInUser: state => {
    return state.user;
  }
};

export const mutations = {
  SET_EMAIL: (state, email) => {},
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_USER: (state, data) => {
    state.user = data;
    state.isAuthenticated = true;
  },

  DELETE_USER: state => {
    state.user = {};
    state.token = "";
    state.isAuthenticated = false;
  }
};

export const actions = {
  async login({ dispatch }, login) {
    let response = await axios.post(
      "https://api.purplepeopleeater.co.uk/wp-json/jwt-auth/v1/token",
      login
    );

    dispatch("attempt", response.data.token);
  },
  async attempt({ commit }, token) {
    Cookie.set("access_token", token);
    commit("SET_TOKEN", token);
    try {
      let response = await axios.get(
        "https://api.purplepeopleeater.co.uk/wp-json/wp/v2/users/me",
        {
          headers: {
            Authorization: "Bearer " + token
          }
        }
      );
      commit("SET_USER", response.data);
    } catch (e) {
      commit("SET_TOKEN", null);
      commit("SET_USER", null);
    }
  },
  async logout({ commit }) {
    Cookie.remove("access_token");
    localStorage.removeItem("token");
    commit("DELETE_USER");
  }
};
