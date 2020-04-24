const express = require('express');

const Users = require('../schemes/userModel');
const protected = require('./middleware/protected');
const router = express.Router();

router.get('/', protected, (req, res) => {
    Users.find()
        .then((users) => res.status(200).json(users))
        .catch((err) =>
            res
                .status(500)
                .json({ message: `Error fetching users`, error: err })
        );
});

module.exports = router;
