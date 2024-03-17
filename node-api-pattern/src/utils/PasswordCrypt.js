'use strict';

const bcrypt = require('bcryptjs');

class PasswordCrypt {
    constructor() { }

    encript(password) {
        return bcrypt.hashSync(password, 10);
    }

    compare(password, hash) {
        if (bcrypt.compareSync(password, hash))
            return true;

        return false;
    }

}

module.exports = new PasswordCrypt();