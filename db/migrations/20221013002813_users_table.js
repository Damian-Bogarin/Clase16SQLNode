const knex = require('knex');


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {

    const exist = await knex.schema.hasTable('users');
    if(!exist) {
        return knex.schema.createTable('users', (table) => {
        table.increments('id'); //Así definimos el primary key
        table.string('name', 255).notNullable().defaultTo('fulano');
        table.string('lastname');
        table.integer('age');
        table.string('dni').notNullable().unique();

        });
    }
    
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    const exist = await knex.schema.hasTable('users');
    if(exist) {
        return knex.schema.dropTable('users');
    }
};
