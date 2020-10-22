const { table } = require("../dbConfig");

exports.up = function (knex) {
    return knex.schema.createTable("users", (users) => {
      users.increments("id").primary();
      users.increments("user_id")
      users.string("username", 255).notNullable().unique();
      users.string("password", 255).notNullable();
      users.string("email", 255);
      posts
      .integer("user_id")
      .unsigned()
      .notNullable()
    });
  };
  
  exports.down = function (knex, Promise) {
      return knex.schema.dropTableIfExists('users')
  };
