let DB = require("./tempDB");
let User = require("./Users");

function Admin(name, email, password) {
  User.call(this, name, email, password); //APPLYING THE INSTANCE VARIABLES OF USER OBJECT ON ADMIN
  this.isAdmin = true;
}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin;

Admin.prototype.getAllUsers = function() {
  let user = DB.Users.filter(e => e.isAdmin === false && e.isDeleted === false);
  if (user.length === 0) {
    return console.log("INFO: No users in Database");
  } else {
    return console.log(user);
  }
};
Admin.prototype.deleteUser = function(id) {
  let user = DB.Users.filter(e => e.id === id && e.isAdmin === false);
  if (user.length === 0) {
    return console.log("ERROR: No such user");
  } else {
    console.log("SUCCESS: User Deleted");
    return user.map(e => (e.isDeleted = true));
  }
};

Admin.prototype.deleteAllUsers = function() {
  let user = DB.Users.filter(e => e.isAdmin === false && e.isDeleted === false);
  if (user.length === 0) {
    return console.log("INFO: No users in Database");
  } else {
    console.log("SUCCESS: Users Deleted");
    return user.map(e => (e.isDeleted = true));
  }
};
