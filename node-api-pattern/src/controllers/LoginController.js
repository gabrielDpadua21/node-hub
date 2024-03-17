'use strict'


const UserRepository = require('../repositorys/UserRepository');
const TryCatch = require('../utils/TryCatch');
const PasswordCrypt = require('../utils/PasswordCrypt');
const TokenJWT = require('../utils/Token');


class LoginController {
    constructor() { }

    async LoginAutenticate(req, res) {
        const user = await TryCatch
            .tryCallback(UserRepository.findaByEmailPassword(req.body.email));

        if (!user)
            return res.status(404).json({ "Error": "User not found", "Mgs": `Email ${req.body.email} is not found` })

        if (!PasswordCrypt.compare(req.body.password, user.password))
            return res.status(403).json({ "Error": "Invalid Password" });

        user.password = undefined;

        return res.status(200).json({ "user": user, "token": TokenJWT.generateToken(user._id) });
    }
}


module.exports = new LoginController();