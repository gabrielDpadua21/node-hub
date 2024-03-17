'use strict';

const UserRoutes = require('express').Router()
const UserController = require('../controllers/UserController');
const Middleware = require('../middlewares/Middlewares');

// ROTAS DE USUÁRIOS

UserRoutes.use(Middleware.authentication)

UserRoutes.get('/users', UserController.getAll);
UserRoutes.get('/users/:id', UserController.getById);
UserRoutes.post('/users', UserController.create);
UserRoutes.put('/users/:id', UserController.update);

//TODO: api de cadastro de usuario para utlização da api

module.exports = UserRoutes;