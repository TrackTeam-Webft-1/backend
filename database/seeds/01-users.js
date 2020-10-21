const bcrypt = require('bcryptjs')
exports.seed = function(knex, Promise) {
    return knex('users').insert([
        {
            username: 'FatimaRizvi',
            password: bcrypt.hashSync('password', 4),
            email: 'fatima@fatima.com',
        },
        {
            username: 'AndrewMuto',
            password: bcrypt.hashSync('1234', 4),
            email: 'andrew@andrew.com',
        }
    ])
}