/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('maintenance_task').del()
  await knex('maintenance_task').insert([
    {id: 1, user_id: '2',summary: 'tpwqbQP/7HokqRxcUE+xCNL9i93g92WZt5u5ZFIdQRKXypzVU6wuU4y5OuRJRn5D', created_at: '2023-12-01 00:00:01'},
    {id: 2, user_id: '3',summary: '7PdfouBSc/OtHM58uvGu+hAJDWjm63kAV/ptw0ZYSs4=', created_at: '2023-12-02 00:00:01'},
    {id: 3, user_id: '3',summary: 'ihqtClbUNWP3dMPXvsD4ABdXEz66BVSqTYktY4QMGYw=', created_at: '2023-12-03 00:00:01'},
    {id: 4, user_id: '2',summary: 'vCaGRFvgc5iba2jwkR11EibG71uOWoVioKPbgPTvQSg=', created_at: '2023-12-04 00:00:01'},
    {id: 5, user_id: '3',summary: 'JWa6ZY2PxoMBZC1vBpcub6qqQq7t4rYCQkhG6rqG7NnG7Clb8cVgY3Jl7GqfqJV3', created_at: '2023-12-05 00:00:01'},
    {id: 6, user_id: '1',summary: '+YFDmLAjd8H6EKaxx7b3xg==', created_at: '2023-12-06 00:00:01'},
    {id: 7, user_id: '2',summary: 'IIBtlkljfJdAjK3b30V6GQ==', created_at: '2023-12-06 00:00:01'}
  ]);
};

// The original (decrypted data):
// {id: 1, user_id: '2',summary: 'App version upgrade and user training.', created_at: '2023-12-01 00:00:01'},
//     {id: 2, user_id: '3',summary: 'Updating firewall settings.', created_at: '2023-12-02 00:00:01'},
//     {id: 3, user_id: '3',summary: 'Fixing email login issues.', created_at: '2023-12-03 00:00:01'},
//     {id: 4, user_id: '2',summary: 'Recovering user password.', created_at: '2023-12-04 00:00:01'},
//     {id: 5, user_id: '3',summary: 'User forgot his password, recovered now.', created_at: '2023-12-05 00:00:01'},
//     {id: 6, user_id: '1',summary: 'False issue.', created_at: '2023-12-06 00:00:01'},
//     {id: 7, user_id: '2',summary: 'Screen issues.', created_at: '2023-12-06 00:00:01'}
