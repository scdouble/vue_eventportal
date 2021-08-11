import { createStore } from "vuex";

import { nanoid } from "nanoid";
var faker = require("faker");

const testData = [];
var categories = ["Watersports", "Soccer", "Chess", "Running"];
var isClosed = [true, false];
for (let i = 1; i <= 10; i++) {
  testData.push({
    id: nanoid(),
    title: faker.lorem.sentence(3),
    //description: `This is Event #${i}`,
    description: faker.lorem.paragraphs(3),
    datetime: faker.date.recent(),
    streetAddress: faker.address.streetAddress() || "Online",
    speakers: [
      {
        speakerId: nanoid(),
        speakerName: faker.name.findName(),
      },
      { speakerId: nanoid(), speakerName: faker.name.findName() },
      { speakerId: nanoid(), speakerName: faker.name.findName() },
    ],
    createdDate: faker.date.recent(),
    dueDate: faker.date.between(faker.date.recent(), faker.date.future(30)),
    categories: categories,
    img: faker.image.imageUrl(),
    isClosed: faker.helpers.randomize(isClosed),
    eventOrganizer: faker.company.companyName(),
    fee: "29,800" || "Free",
    qa: faker.internet.exampleEmail(),
    programs: [],
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
  events: (state) => [...state.events],
};

export default createStore({
  actions,
  mutations,
  state,
  getters,
});
