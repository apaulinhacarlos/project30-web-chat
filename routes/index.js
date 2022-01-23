const express = require('express');
const chat = require('./chat');

const router = express.Router({ mergeParams: true });

router.use('/', chat);

module.exports = router;