exports.up = function (knex, Promise) {
  return knex.schema.createTable("googleNews", table => {
    table.increments("id").primary()
    table.string("news")
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("googleNews")
};