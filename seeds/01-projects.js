
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Pass the sprint challenge'},
        {name: 'Build a boat', description: 'Building a boat is a project, right?'}
      ]);
    });
};
