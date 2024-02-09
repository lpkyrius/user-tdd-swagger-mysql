/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('users', function (table) {
        table.increments('id');
        table.string('email', 100).notNullable();
        table.string('role', 1).notNullable();
    })
    .alterTable('users', function(t) {
        t.unique('email')
    })
    .createTable('login', function (table) {
        table.increments('id');
        table.string('hash', 100).notNullable();
        table.string('email', 100).notNullable();
        table.foreign('email').references('email').inTable('users');
    })
    .alterTable('login', function(t) {
        t.unique('email')
    })
    .createTable('refresh_tokens', function (table) {
        table.increments('id');
        table.integer('user_id').unsigned().notNullable();
        table.string('refresh_token', 200).notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.foreign('user_id').references('id').inTable('users');
    })
    .createTable('maintenance_task', function (table) {
        table.increments('id');
        table.integer('user_id').unsigned().notNullable();
        table.string('summary', 2500).notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.foreign('user_id').references('id').inTable('users');
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
    .dropTable("maintenance_task")
    .dropTable("refresh_tokens")
    .dropTable("login")
    .dropTable("users");
};
