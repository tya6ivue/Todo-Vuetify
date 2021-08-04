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
});
