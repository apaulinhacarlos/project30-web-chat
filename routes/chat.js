const express = require('express');
const messagesControllers = require('../controllers');

const router = express.Router({ mergeParams: true });

router.get('/', messagesControllers.findAll);

module.exports = router;