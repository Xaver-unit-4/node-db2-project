exports.up = function (knex) {
  // DO YOUR MAGIC
  return knex.schema.createTable('cars', table => {
    table.increments()
    table.string('vin', 17).notNullable().unique()
    table.string('make', 50).notNullable()
    table.string('model', 50).notNullable()
    table.integer('mileage').unsigned().notNullable()
    table.string('title', 50).defaultTo('unknown')
    table.string('transmission', 50).defaultTo('unknown')
  })
};

exports.down = function (knex) {
  // DO YOUR MAGIC
  return knex.schema.dropTableIfExists('cars')
};
