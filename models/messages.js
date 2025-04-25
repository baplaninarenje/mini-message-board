const { v4: uuidv4 } = require('uuid');

const messages = [
  {
    id: uuidv4(),
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    id: uuidv4(),
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

async function getMessages() {
  return messages;
}

async function postMessage(messageText, messageUser) {
  messages.push({
    id: uuidv4(),
    text: messageText,
    user: messageUser,
    added: new Date(),
  });
}

async function getMessageById(messageId) {
  return messages.find((message) => message.id === messageId);
}

module.exports = { getMessages, postMessage, getMessageById };
