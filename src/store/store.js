import Vue from "vue";
import Vuex from "vuex";

import todo from "./modules/todo.module";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    todo,
  },
  plugins: [createPersistedState],
});
