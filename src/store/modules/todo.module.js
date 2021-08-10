const state = {
  items: [
    { id: 1, name: "Jack", isEdit: false },
    { id: 2, name: "Petter", isEdit: false },
    { id: 3, name: "Tom", isEdit: false },
  ],
};
const mutations = {
  ADD_ITEMS(state, payload) {
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
  UPDATE_NEWITEMS(state, payload) {
    if (payload.newItems.trim().length > 0) {
      state.items[payload.index].name = payload.newItems;
      state.items[payload.index].isEdit = false;
    }
  },
};

const actions = {
  addItems({ commit }, payload) {
    commit("ADD_ITEMS", payload);
  },

  toEdit(context, payload) {
    context.commit("TO_EDIT", payload);
  },
  updatenewItems(context, payload) {
    context.commit("UPDATE_NEWITEMS", payload);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
