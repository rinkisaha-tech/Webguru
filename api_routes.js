const express = require('express');
const router = express.Router();
const ApiController = require('../controller/api-controller');

router.get('/user/list', ApiController.getUser);
router.post('/user/add', ApiController.addUser);
router.get('/user/info/:id', ApiController.getSingleData);
router.post('/user/update', ApiController.updateUser);
router.get('/user/delete/:id', ApiController.deleteUser);

module.exports = {
    route: router
}