const { Comment, Like, Post, Profile, User } = require("./index");
const { db } = require("./db/connection.js");
const { syncSeed } = require("./seed/seed");

describe("Social Sequelzie Test", () => {
  beforeAll(async () => {
    // the 'sync' method will create tables based on the model class
    // by setting 'force:true' the tables are recreated each time the test suite is run
    //await db.sync({ force: true });
    await syncSeed();
  });

  // Write your tests here

  test("replace with your test", function () {
    expect(true).toBe(true);
  });
});
