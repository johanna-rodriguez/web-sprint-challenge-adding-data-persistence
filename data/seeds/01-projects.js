exports.seed = function (knex, Promise) {
  return knex("projects").insert([
    {
      project_name: "p1",
      project_description: "moon project",
      project_completed: false,
    },
    {
      project_name: "p2",
      project_description: "earth project",
      project_completed: true,
    },
    {
      project_name: "p3",
      project_description: "jupiter project",
      project_completed: false,
    },
  ]);
};
