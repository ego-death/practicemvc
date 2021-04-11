const express = require('express');
const router = express.Router();

router.get('/', require('../controls/homeCont').getHomePage);

module.exports = router;