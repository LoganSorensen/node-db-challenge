
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {name: 'Boat', description: "It's a boat."},
        {name: 'Fax machine'}
      ]);
    });
};
