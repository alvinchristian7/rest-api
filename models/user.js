'use strict';
const bcrypt = require('bcrypt')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [4, 128],
          msg: "Password must be between 6 and 128 characters in length"
        }
      }
    },
    role: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Todo)
  };
  User.beforeCreate((user, options)=>{
    var hash = bcrypt.hashSync(user.password, 8);
    user.password = hash
  })
  return User;
};