var faker = require("faker");
const { nanoid } = require("nanoid");

faker.seed(100);

const data = [];
var tagCategory = [
  "SDGs",
  "テレワーク",
  "無料参加",
  "DX",
  "働き方改革",
  "脱炭素",
  "地方創生",
  "投資",
  "土日祝開催",
];
var isClosed = [true, false];

for (let i = 1; i <= 20; i++) {
  let tags = [];
  for (let i = 0; i < 5; i++) {
    tags.push(faker.helpers.randomize(tagCategory));
  }
  uniqTags = [...new Set(tags)];
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
    tags: uniqTags,
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
    tags: tagCategory,
    //tags: [],
  };
};
