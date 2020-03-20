import Cookie from "js-cookie";
import axios from "axios";

export const state = () => ({
  user: {},
  token: "",
  isAuthenticated: false
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
  SET_USER: (state, data) => {
    state.token = data.token;
    state.user = data;
    state.isAuthenticated = true;
  }
};

export const actions = {
  async login({ dispatch }, login) {
    let response = await axios.post(
      "https://api.purplepeopleeater.co.uk/wp-json/jwt-auth/v1/token",
      login
    );

    dispatch("attempt", response.data);
  },
  async attempt({ commit }, data) {
    console.log("from attempt", data);
    Cookie.set("access_token", data.token);
    commit("SET_USER", data);
  }
};
