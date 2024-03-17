'use strict';

const UserRepository = require('../repositorys/UserRepository');
const TryCatch = require('../utils/TryCatch');
const PasswordCript = require('../utils/PasswordCrypt');
const TokenJWT = require('../utils/Token');

class UserController {

    constructor() { }

    async getAll(req, res) {
        const { page = 1 } = req.query;

        return TryCatch
            .tryAwait(UserRepository.findAll(page), res);
    }

    async getById(req, res) {
        return TryCatch
            .tryAwait(UserRepository.findById(req.params.id), res);
    }

    async create(req, res) {

        const validateUser = await TryCatch
            .tryCallback(UserRepository.findByEmail(req.body.email));


        if (validateUser)
            return res.status(401).json({ "Error": "User already exists", "Mgs": `Email ${validateUser.email} is in database` })

        req.body.password = PasswordCript.encript(req.body.password);

        const user = await TryCatch
            .tryCallback(UserRepository.create(req.body));

        if (user.error)
            return res.status(400).json({ "Error": "Error to create user" });

        return res.status(200).json({ "user": user, "token": TokenJWT.generateToken(user._id) });
    }

    async update(req, res) {
        return TryCatch
            .tryAwait(UserRepository.update(req.params.id, req.body), res);
    }
}

module.exports = new UserController();
