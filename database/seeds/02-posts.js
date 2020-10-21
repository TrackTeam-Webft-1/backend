exports.seed = function(knex, Promise) {
    return knex('posts').insert([
        {
            email: 'lol@lol.com',
            title: 'First VR Pitch',
            contents: 'Hope you like this idea!',
            donations:'$1000',
            users_id: 1
        },
        {
            email: 'lmao@lmao.com',
            title: 'Second VR Pitch',
            contents: 'What about this one?',
            donations:'$2000',
            project_id: 2
        },
        {
            email: 'rofl@rofl.com',
            title: 'Third VR Pitch',
            contents: 'Ok, maybe this one?',
            donations:'$3000',
            project_id: 3
        },
        {
            email: 'idk@idk.com',
            title: `Fourth VR Pitch`,
            contents: 'Definitely this.',
            donations:'$4000',
            project_id: 4
        },
        {
            email: 'bob@bob.com',
            title: `Fifth VR Pitch`,
            contents: 'Man, this might not be the best idea.',
            donations:'$5000',
            project_id: 1
        },

    ])
}