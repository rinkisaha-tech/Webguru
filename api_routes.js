const express = require('express');
const router = express.Router();
const ApiController = require('../controller/api-controller');

router.get('/user/list', ApiController.getUser);
router.post('/user/add', ApiController.addUser);

module.exports = {
    route: router
}