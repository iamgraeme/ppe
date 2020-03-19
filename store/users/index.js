import Cookie from "js-cookie";
import axios from "axios";

export const state = () => ({
  user: null,
  token: "",
  isAuthenticated: false
});

export const mutations = {
  SET_USER: (state, account) => {
    state.user = account;
    state.isAuthenticated = true;
  }
};

export const actions = {
  async login({ commit }, account) {},
  async register({ commit }, account) {},
  async resetPassword({ commit }, email) {},
  async updateEmailAddress({ commit }, email) {},
  async updateDisplayName({ commit }, displayName) {},
  async deleteUserAccount({ commit }, boo) {}
};
