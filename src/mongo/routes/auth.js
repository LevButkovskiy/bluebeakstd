const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());

const authController = require('../controllers/auth');

router.post('/', authController.authenticateUser);

module.exports = router;
