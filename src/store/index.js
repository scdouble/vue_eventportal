import { createStore } from "vuex";

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
        context.commit("SET_TOAST", {
          toastVisible: true,
          toastMessage: "Data loaded successfully",
          toastType: "success",
        });
      },
      (error) => {
        context.commit("SET_TOAST", {
          toastVisible: true,
          toastMessage: `Error in loading data from server: ${error.message}`,
          toastType: "error",
        });
      }
    );
  },
};

const mutations = {
  SET_EVENTS(state, events) {
    state.events = events;
  },

  SET_TOAST(state, toast) {
    state.toastVisible = toast.toastVisible;
    state.toastMessage = toast.toastMessage;
    state.toastType = toast.toastType;
  },

  DISMISS_TOAST(state) {
    state.toastVisible = false;
  },
};

const state = {
  events: [],
  // eventsTotal: testData.length,
  searchTerm: "",

  //
  toastVisible: false,
  toastMessage: "",
  toastType: "", //error, success, info
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
