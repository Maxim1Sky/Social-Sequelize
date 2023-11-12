const { DataTypes, db, Model } = require("../db/connection");

class Profile extends Model {}

Profile.init({
  bio: DataTypes.STRING,
  profilePicture: DataTypes.STRING,
  birthday: DataTypes.STRING,
});

module.exports = Profile;
