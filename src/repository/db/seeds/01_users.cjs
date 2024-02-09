/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {id: 1, email: 'john@gmail.com', role: '1'},
    {id: 2, email: 'techmary@gmail.com', role: '2'},
    {id: 3, email: 'techbob@test.com', role: '2'},
  ]);
};
