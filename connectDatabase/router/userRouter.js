const Router = require('express').Router();
const {UserFormAction , CreateUserAction} = require('../controller/UserController')

Router.get('/form',UserFormAction);
Router.post('/create',CreateUserAction);

module.exports = Router;