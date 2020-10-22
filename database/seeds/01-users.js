const bcrypt = require('bcryptjs')
exports.seed = function(knex, Promise) {
    return knex('users').insert([
        {
            id:1,
            username: 'FatimaRizvi',
            password: bcrypt.hashSync('password', 4),
            email: 'fatima@fatima.com',
            user_id: 1
        },
        {
            id:2,
            username: 'AndrewMuto',
            password: bcrypt.hashSync('1234', 4),
            email: 'andrew@andrew.com',
            user_id: 2
        }
    ])
}