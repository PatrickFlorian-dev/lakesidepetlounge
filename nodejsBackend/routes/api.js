const express = require('express');
const { addClientApi, searchClientByEmailApi } = require('../controllers/apiController');
const router = express.Router();
router.post('/addClient', addClientApi);
router.post('/searchClientByEmail', searchClientByEmailApi);
module.exports = router;
