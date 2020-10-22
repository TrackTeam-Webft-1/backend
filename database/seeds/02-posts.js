exports.seed = function(knex, Promise) {
    return knex('posts').insert([
        {
            email: 'fatima@fatima.com',
            title: 'First VR Pitch',
            contents: 'Hope you like this idea!',
            donations:'$1000',
            users_id: 1,
            project_id: 1
        },
        {
            email: 'andrew@andrew.com',
            title: 'Second VR Pitch',
            contents: 'What about this one?',
            donations:'$2000',
            users_id: 2,
            project_id: 2
        },
        {
            email: 'fatima@fatima.com',
            title: 'Third VR Pitch',
            contents: 'Ok, maybe this one?',
            donations:'$3000',
            users_id: 1,
            project_id: 3
        },
        {
            email: 'andrew@andrew.com',
            title: `Fourth VR Pitch`,
            contents: 'Definitely this.',
            donations:'$4000',
            users_id: 2,
            project_id: 4
        },
        {
            email: 'fatima@fatima.com',
            title: `Fifth VR Pitch`,
            contents: 'Man, this might not be the best idea.',
            donations:'$5000',
            users_id: 1,
            project_id: 5
        },

    ])
}