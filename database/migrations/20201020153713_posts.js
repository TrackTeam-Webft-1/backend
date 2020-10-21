exports.up = function (knex) {
    return knex.schema.createTable("posts", (posts) => {
      posts.increments().primary();
      posts.string("email", 255).notNullable();
      posts.string("title", 255).notNullable();
      posts.string("contents", 5000).notNullable();
      posts.string("donations", 10).notNullable();
      posts
      .integer("project_id")
      .unsigned()
      .notNullable();
      posts
      .integer("users_id")
      .unsigned()
      .notNullable()
      .references("id");
    });
  };
  
  exports.down = function (knex) {
      return knex.schema.dropTableIfExists('posts')
  };