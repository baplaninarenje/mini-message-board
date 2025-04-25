const messagesModel = require('../models/messages');

module.exports = {
  get: async (req, res) => {
    const messages = await messagesModel.getMessages();

    if (!messages) {
      res.status(404).send('messages not found');
      return;
    }
    res.render('index', { title: 'Mini Messageboard', messages: messages });
  },
};
