const jwt = require('jsonwebtoken');
const secrets = require('../../config/secrets');

const protected = (req, res, next) => {
    try {
        const token = req.headers.authorization;

        if (token) {
            jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
                if (err) {
                    throw new Error(err);
                } else {
                    req.decodedToken = decodedToken;
                    next();
                }
            });
        } else {
            throw new Error(
                'Missing authentication token. You shall not pass!'
            );
        }
    } catch (err) {
        // catches exceptions
        res.status(401).json(err.message);
    }
};

module.exports = protected;
