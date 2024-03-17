'use strict';

const LoginRoutes = require('express').Router()
const LoginController = require('../controllers/LoginController');

//Rotas abertas

//TODO: Api de cadastro de usuario

LoginRoutes.post('/login', LoginController.LoginAutenticate);

//TODO: Api de authenticação para utilização da api

module.exports = LoginRoutes;