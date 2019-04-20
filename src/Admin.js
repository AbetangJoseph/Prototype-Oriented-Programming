let DB = require("./DB");
let User = require("./Users");
let Order = require("./Orders");

function Admin(name, email, password) {
  User.call(this, name, email, password); //APPLYING THE INSTANCE VARIABLES OF USER OBJECT ON ADMIN
  this.isAdmin = true;
  
}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin;

Admin.prototype.getAllUsers = function() {
  let user = DB.Users.filter(e => e.isAdmin === false && e.isDeleted === false);
  if (user.length === 0) {
    return "INFO: No users in Database";
  } else {
    return user;
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

Admin.prototype.getAllOders = function() {
  Order.prototype.getAllOders();
};

Admin.prototype.getOneOrder = function(orderId) {
  Order.prototype.getOneOrder(orderId);
};

Admin.prototype.UpdateOrder = function(orderId, changeFrom, changeTo) {
  Order.prototype.UpdateOrder(orderId, changeFrom, changeTo);
};

Admin.prototype.deleteOneOrder = function(orderId) {
  Order.prototype.deleteOneOrder(orderId);
};

Admin.prototype.deleteAllOrders = function() {
  Order.prototype.deleteAllOrders();
};

module.exports = Admin;

// let admin1 = new Admin("admin1", "admin1@gmail.com", "394jr");
// admin1.createUser();

// admin1.makeOrder("pen", "book", "admin");
