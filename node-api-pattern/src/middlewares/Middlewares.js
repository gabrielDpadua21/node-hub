'use strict';

const TokenJWT = require('../utils/Token');
const jwt = require('jsonwebtoken');
const auth = require('../config/auth');

class Middlewares {
    constructor(){}

    async authentication(req, res, next) {

        const authHeader = req.headers.authorization;

        if(!authHeader)
            return res.status(401).json({"error": "No token provided"});

        const parts = authHeader.split(' ');

        if(!parts.length === 2)
            return res.status(401).json({"error": "Token error"});

        const [scheme, token] = parts;

        if(!/^Bearer$/i.test(scheme))
            return res.status(401).json({"error": "Token malformatted"});

        /*const verification = TokenJWT.vericateToken(token);

        if(verification.code < 0)
            return res.status(401).json({"error": "Token invalid"});

        req.userId = verification.decoded.id */

        jwt.verify(token, auth.secret, (err, decoded) => {
            if(err) {
                return res.status(401).json({"error": "Token invalid"})
            } else {
                req.userId = decoded.id
                return next();
            }
        })

        

    }
}

module.exports = new Middlewares()