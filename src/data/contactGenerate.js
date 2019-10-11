import faker from 'faker';

const generateContacts = () => {
  function randomGenerate(initialValue, finalValue) {
    return (
      Math.floor(Math.random() * (finalValue - initialValue)) + initialValue
    );
  }

  function generateHourAndMinute() {
    const hour = randomGenerate(0, 23);
    const minute = randomGenerate(0, 59);
    const formatedHour = hour < 10 ? `0${hour}` : `${hour}`;
    const formatedMinute = minute < 10 ? `0${minute}` : `${minute}`;

    return `${formatedHour}:${formatedMinute}`;
  }

  function generateRandomStatus() {
    switch (randomGenerate(0, 3)) {
      case 0:
        return 'sended';
      case 1:
        return 'received';
      case 2:
        return 'viewed';
      default:
        return '';
    }
  }

  function generateMessages() {
    const messages = [];
    for (let i = 0; i < randomGenerate(20, 45); i += 1) {
      messages.push({
        mine: faker.random.boolean(),
        text: faker.lorem.text(),
        hour: generateHourAndMinute(),
        status: generateRandomStatus(),
      });
    }

    return messages;
  }

  const contacts = [];
  for (let i = 0; i < randomGenerate(15, 35); i += 1) {
    contacts.push({
      name: faker.name.findName(),
      lastSeen: `last seen today at ${generateHourAndMinute()}`,
      messages: generateMessages(),
    });
  }
  return contacts;
};

export default generateContacts;
