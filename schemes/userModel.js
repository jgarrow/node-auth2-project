const db = require('../data/dbConfig');

function findBy(filter) {
    return db('users').where(filter);
}

function find() {
    return db.select('username', 'department').from('users');
}

function add(user) {
    return db('users').insert(user);
}

module.exports = {
    findBy,
    find,
    add,
};
