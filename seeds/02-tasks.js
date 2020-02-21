
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {description: 'Find boat materials', completed: true, project_id: 2},
        {description: 'Put materials together in the shape of a boat', project_id: 2},
        {description: 'Congrats, you now have a boat.', project_id: 2},
        {description: 'Complete the sprint challenge', project_id: 1},
        {description: 'Print out code', project_id: 1},
        {description: 'Fax the code to Lambda', project_id: 1},
      ]);
    });
};
