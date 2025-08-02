const express = require('express');
const Router = express.Router();
const mainController = require('../controller/mainController');


Router.get('/home',mainController.homeController);
Router.get('/about',mainController.aboutController);

module.exports = Router;