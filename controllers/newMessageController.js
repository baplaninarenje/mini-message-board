const messagesModel = require('../models/messages');

module.exports = {
  get: async (req, res) => {
    res.render('form');
  },
  post: async (req, res) => {
    const { messageText, messageUser } = req.body;

    await messagesModel.postMessage(messageText, messageUser);

    res.redirect('/');
  },
};
