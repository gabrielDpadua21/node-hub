const jwt = require('jsonwebtoken');
const auth = require('../config/auth');

class TokenJWT {
    constructor() { }

    generateToken(_id) {
        return jwt.sign({ id: _id }, auth.secret, {
            expiresIn: 86400
        })
    }

    vericateToken(token) {
        jwt.verify(token, auth.secret, (err, decoded) => {
            if(err) {
                return { "code": -1, "err": err }
            } else {
                return { "code": 0, "decoded": decoded }
            }
        })
    }
}

module.exports = new TokenJWT()