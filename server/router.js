const express = require('express');
const router = express.Router();

router.get('/', (_req, res) => res.send('Welcome to the Surviral API').status(200));

module.exports = router;