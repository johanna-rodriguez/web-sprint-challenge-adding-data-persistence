exports.seed = function (knex, Promise) {
  return knex("tasks").insert([
    {
      task_description: "blablablablablabla",
      task_completed: true,
      project_id: 1,
    },
    {
      task_description: "pajaro picon picon",
      task_completed: false,
      project_id: 2,
    },
    {
      task_description: "asereje de ja de jebe",
      task_completed: true,
      project_id: 1,
    },
  ]);
};
