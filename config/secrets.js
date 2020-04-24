module.exports = {
    jwtSecret:
        process.env.JWT_SECRET ||
        'everything changed when the fire nation attacked',
};
