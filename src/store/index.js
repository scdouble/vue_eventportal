import { createStore } from "vuex";

import { nanoid } from "nanoid";

const testData = [];
for (let i = 1; i <= 10; i++) {
  testData.push({
    id: i,
    title: `Event Title1 #${i}`,
    description: `This is Event #${i}`,
    datetime: "2021/08/10",
    place: `丸ビル${i}F`,
    speakers: ["Person1", "Person2", "Person3"],
  });
}

const actions = {};

const mutations = {};

const state = {
  events: testData,
  eventsTotal: testData.length,
};

const getters = {
  eventById: (state) => (id) => {
    return state.events.find((event) => event.id === id);
  },
};

export default createStore({
  actions,
  mutations,
  state,
  getters,
});
