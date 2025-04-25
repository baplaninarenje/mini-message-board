const { Router } = require('express');
const messageRouter = Router();
const messageController = require('./../controllers/messageController');

messageRouter.get('/:messageId', messageController.get);

module.exports = messageRouter;
