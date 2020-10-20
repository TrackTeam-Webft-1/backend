exports.seed = function(knex, Promise) {
    return knex('users').insert([
        {
            username: 'FatimaRizvi',
            password: 'password',
            email: 'fatima@fatima.com',
        },
        {
            username: 'AndrewMuto',
            password: '12345',
            email: 'andrew@andrew.com',
        }
    ])
}