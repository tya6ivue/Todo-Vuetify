const state = {
  items: [
    { id: 1, name: "Jack" },
    { id: 2, name: "Petter" },
    { id: 3, name: "Tom" },
  ],
};
const mutations = {
  Add_Items: (state, payload) => {
    state.items.push(payload);
  },
};

const actions = {
  addItems: ({ commit }, payload) => {
    commit("Add_Items", payload);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
