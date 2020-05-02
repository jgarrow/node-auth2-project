const express = require('express');
const bcrypt = require('bcryptjs');
const generateToken = require('../utils/generateToken');

const router = express.Router();

const Users = require('../schemes/userModel');

// for endpoints beginning with /api/auth
router.post('/register', (req, res) => {
    const user = req.body;
    const hash = bcrypt.hashSync(user.password, 12);
    user.password = hash;

    Users.add(user)
        .then((saved) => {
            const token = generateToken(user);
            res.status(201).json({ user: saved, token });
        })
        .catch((error) => {
            res.status(500).json(error);
        });
});

router.post('/login', (req, res) => {
    let { username, password } = req.body;

    Users.findBy({ username })
        .first()
        .then((user) => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user);

                res.status(200).json({
                    message: `Welcome ${user.username}!`,
                    token,
                });
            } else {
                res.status(401).json({ message: 'You shall not pass!' });
            }
        })
        .catch((error) => {
            res.status(500).json(error);
        });
});

module.exports = router;
