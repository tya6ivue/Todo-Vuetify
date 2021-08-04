import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
    newItems: [],

    loading3: false,
    loading: false,
    snackbar: "",
    text: "Your data is sussesfully added",
    items: [
      { id: 1, name: "Jack" },
      { id: 2, name: "Petter" },
      { id: 3, name: "Tom" },
    ],
  },

  getters: {
    sortFunc: () => {
      console.log(this.state.items);
      return this.state.items.slice().sort(function(a, b) {
        return a.state.items.name > b.state.items.name ? 1 : -1;
      });
    },
  },
  mutations: {
    addItems: (items, payload) => {
      this.state.items.push({
        id: this.state.items.length + 1,
        name: this.state.newItems,
        completed: false,
      });
      console.log(this.newItems);
      this.newItems = "";
    },
  },
  actions: {
    addItems: (context) => {
      context.commit("addItems,paylaod");
    },
  },
});
