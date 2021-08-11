var faker = require("faker");
const { nanoid } = require("nanoid");

faker.seed(100);

const data = [];
var tags = ["SDGs", "テレワーク", "無料参加", "DX"];
var isClosed = [true, false];

for (let i = 1; i <= 10; i++) {
  let tag = faker.helpers.randomize(tags);
  let isClose = faker.helpers.randomize(isClosed);
  data.push({
    id: nanoid(),
    title: faker.lorem.sentence(3),
    //description: `This is Event #${i}`,
    description: faker.lorem.paragraphs(3),
    datetime: faker.date.recent(),
    streetAddress: faker.address.streetAddress() || "Online",
    speakers: [
      { speakerId: nanoid(), speakerName: faker.name.findName() },
      { speakerId: nanoid(), speakerName: faker.name.findName() },
      { speakerId: nanoid(), speakerName: faker.name.findName() },
    ],
    createdDate: faker.date.recent(),
    dueDate: faker.date.between(faker.date.recent(), faker.date.future(30)),
    tags: tag,
    img: faker.image.imageUrl(),
    isClosed: isClose,
    eventOrganizer: faker.company.companyName(),
    fee: "29,800" || "Free",
    qa: faker.internet.exampleEmail(),
    programs: [
      { id: "", time: "", content: "" },
      { id: "", time: "", content: "" },
    ],
  });
}

module.exports = function() {
  return {
    events: data,
    tags: tags,
    //tags: [],
  };
};
