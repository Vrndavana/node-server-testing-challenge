
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('warriors').del()
    .then(function () {
      // Inserts seed entries
      return knex('warrior').insert([
        {name: 'sam'},
        {name: 'broba'},
        {name: 'ggrrr'}
      ]);
    });
};
