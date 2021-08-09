import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
      
    items: [
      { id: 1, name: "Jack" },
      { id: 2, name: "Petter" },
      { id: 3, name: "Tom" },
    ],
  },

  getters: {
    sortFunc: (state) => {
        console.log(this.items.name)
      return state.items.slice().sort(function(a, b) {
        return a.items.name> b.items.name ? 1 : -1;
      });
      
    },
  },
  mutations: {
    Add_Items: (state, payload) => {
      state.items.push(payload);

    },
  },
  actions: {
    addItems: ({commit}, payload) => {
      console.log(payload)
      commit("Add_Items", payload);
    },
  },
  plugins: [createPersistedState()]
});
