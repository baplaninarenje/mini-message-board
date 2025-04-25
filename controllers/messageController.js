const messagesModel = require('../models/messages');

module.exports = {
  get: async (req, res) => {
    const { messageId } = req.params;
    const message = await messagesModel.getMessageById(messageId);
    if (!message) {
      res.status(404).send('message not found');
      return;
    }
    res.render('message', { title: 'Message Detail', message });
  },
};
