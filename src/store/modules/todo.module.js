const state = {
  items: [
    { id: 1, name: "Jack", isEdit: false },
    { id: 2, name: "Petter", isEdit: false },
    { id: 3, name: "Tom", isEdit: false },
  ],
};
const mutations = {
  Add_Items: (state, payload) => {
    state.items.push(payload);
  },

  TO_EDIT(state, payload) {
    for (let i = 0; i < state.items.length; i++) {
      if (i == payload) {
        state.items[payload].isEdit = true;
      } else {
        state.items[i].isEdit = false;
      }
    }
  },
  UPDATE_newItems: (state, payload) => {
    if (payload.newItems.trim().length > 0) {
      state.items[payload.index].name = payload.newItems;
      state.items[payload.index].isEdit = false;
    } else {
      alert("enter some value");
    }
  },
};

const actions = {
  addItems: ({ commit }, payload) => {
    commit("Add_Items", payload);
  },

  toEdit: (context, payload) => {
    context.commit("TO_EDIT", payload);
  },
  updatenewItems: (context, payload) => {
    context.commit("UPDATE_newItems", payload);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
