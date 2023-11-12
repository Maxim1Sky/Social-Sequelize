// const Restaurant = require("./models/Restaurant");
const { Like, Comment, Post, Profile, User } = require("../index");
const {
  likeSeed,
  commentSeed,
  postSeed,
  profileSeed,
  userSeed,
} = require("./seedData");
const { db } = require("../db/connection");

const syncSeed = async () => {
  await db.sync({ force: true });
  // CREATE YOUR STUFF
  await Like.bulkCreate(likeSeed);
  await Comment.bulkCreate(commentSeed);
  await Post.bulkCreate(postSeed);
  await Profile.bulkCreate(profileSeed);
  await User.bulkCreate(userSeed);
};

//syncSeed();
module.exports = { syncSeed };
