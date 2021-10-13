const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());

const buhbuhController = require('../controllers/buhbuh');

router.post('/', buhbuhController.addAction);

module.exports = router;
