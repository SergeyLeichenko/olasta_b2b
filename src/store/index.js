import Vue from "vue";
import Vuex from "vuex";
import commonActions from "./actions/actions";
import apiRequests from "./actions/api-requests";
import mutations from "./mutations/mutations";
import getters from "./getters/getters";
import createPersistedState from "vuex-persistedstate";
import user from "./user";

const actions = { ...commonActions, ...apiRequests };

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
    brands: [],
    categories: [],
    orders_list: [],
  },
  mutations,
  actions,
  getters,
  modules: {
    user,
  },
  plugins: [createPersistedState()],
});
