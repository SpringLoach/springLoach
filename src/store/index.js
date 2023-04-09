import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    subTop: false,
  },
  mutations: {
    updateTopState(state, value) {
      state.subTop = value;
    },
  },
  actions: {},
  modules: {},
});
