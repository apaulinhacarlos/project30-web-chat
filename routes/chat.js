const express = require('express');

const router = express.Router({ mergeParams: true });

router.get('/', (_req, res) => {
  res.render('chat');
});

module.exports = router;