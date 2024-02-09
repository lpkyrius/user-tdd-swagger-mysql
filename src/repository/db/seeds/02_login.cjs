/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  console.log('The password for these users will be each email user (before the @) + 123456')
  await knex('login').del()
  await knex('login').insert([
    {id: 1, hash: '$2a$10$oIzUubT5B3HzFisIV2Lox.cEHIgK1iuhK1lY55Epi/6MSvOqgTZPO', email: 'john@gmail.com'},
    {id: 2, hash: '$2a$10$slHV.iEYLDi8z8OrirHC1.EbHHkAmIEMHtMnaLLWyoit0XsUsY6Hm', email: 'techmary@gmail.com'},
    {id: 3, hash: '$2a$10$Hgee5mySIQu4a14SJ5UtYurslsleS9Er7fht/p91mgjzHjNk.SefW', email: 'techbob@test.com'}
  ]);
};
