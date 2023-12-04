/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("lists").del();
  await knex("lists").insert([
    { task: "洗濯物をたたむ", status: 1 },
    { task: "夕飯の支度", status: 1 },
    { task: "買い物", status: 2 },
  ]);
};
