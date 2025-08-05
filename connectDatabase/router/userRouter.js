const Router = require('express').Router();
const {UserFormAction , CreateUserAction} = require('../controller/UserController');
const {ViewUserAction,DeleteUserAction} = require('../controller/ViewController');


Router.get('/form',UserFormAction);
Router.post('/create',CreateUserAction);
Router.get('/view',ViewUserAction);
Router.get('/delete',DeleteUserAction)

module.exports = Router;