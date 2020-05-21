
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('warriorsTable').del()
    .then(function () {
      // Inserts seed entries
      return knex('warriorTable').insert([
        {name: 'sam'},
        {name: 'broba'},
        {name: 'ggrrr'}
      ]);
    });
};
