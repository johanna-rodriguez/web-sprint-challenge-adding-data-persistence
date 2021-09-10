exports.seed = function (knex, Promise) {
  return knex("resources").insert([
    {
      resource_name: "r1",
      resource_description: "water",
    },
    {
      resource_name: "r2",
      resource_description: "fire",
    },
    {
      resource_name: "r3",
      resource_description: "air",
    },
  ]);
};
