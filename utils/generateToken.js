const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets');

const generateToken = (user) => {
    const payload = {
        subject: user.id,
        username: user.username,
    };

    const options = {
        expiresIn: '30m',
    };

    return jwt.sign(payload, secrets.jwtSecret, options);
};

module.exports = generateToken;
