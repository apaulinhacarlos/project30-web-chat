const express = require('express');
const chatController = require('../controllers/chat');
// const middleware = require('../middleware');

const router = express.Router({ mergeParams: true });

router.get('/', chatController.chat);

module.exports = router;