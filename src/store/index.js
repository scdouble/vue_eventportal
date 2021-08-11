import { createStore } from "vuex";
import Axios from "axios";
import axios from "axios";

const baseUrl = "http://localhost:3500";
const eventsUrl = `${baseUrl}/events`;
const tagsUrl = `${baseUrl}/tags`;

const actions = {
  async getEventData(context) {
    // context.commit("SET_EVENTS", (await axios.get(eventsUrl)).data);
    await axios.get(eventsUrl).then(
      (response) => {
        context.commit("SET_EVENTS", response.data);
      },
      (error) => {
        errMsg: error.message;
      }
    );
  },
};

const mutations = {
  SET_EVENTS(state, events) {
    state.events = events;
  },
};

const state = {
  events: [],
  // eventsTotal: testData.length,
  searchTerm: "",
};

const getters = {
  eventById: (state) => (id) => {
    return state.events.find((event) => event.id === id);
  },
  events: (state) => [...state.events],

  eventsFilteredByTag: (state) => (tag) => {
    return state.events.filter((event) => event.tags === tag);
  },
};

export default createStore({
  actions,
  mutations,
  state,
  getters,
});
