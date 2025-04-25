const { Router } = require('express');
const newMessageRouter = Router();
const newMessageController = require('./../controllers/newMessageController');

newMessageRouter.get('/', newMessageController.get);
newMessageRouter.post('/', newMessageController.post);

module.exports = newMessageRouter;
