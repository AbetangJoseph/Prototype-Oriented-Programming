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
  let user = DB.Users.filter(
    e => e.id === id && e.isDeleted === false && e.isAdmin === false
  );
  if (user.length === 0) {
    return "INFO: No such user";
  } else {
    user.map(e => (e.isDeleted = true));
    return "SUCCESS: User Deleted";
  }
};

Admin.prototype.deleteAllUsers = function() {
  let user = DB.Users.filter(e => e.isAdmin === false && e.isDeleted === false);
  if (user.length === 0) {
    return "INFO: No users in Database";
  } else {
    user.map(e => (e.isDeleted = true));
    return "SUCCESS: Users Deleted";
  }
};

Admin.prototype.getAllOders = function() {
  return Order.prototype.getAllOders();
};

Admin.prototype.getOneOrder = function(orderId) {
  if (typeof orderId === "number") {
    return Order.prototype.getOneOrder(orderId);
  } else {
    return "WARNING: Id must be a number";
  }
};

Admin.prototype.UpdateOrder = function(orderId, changeFrom, changeTo) {
  return Order.prototype.UpdateOrder(orderId, changeFrom, changeTo);
};

Admin.prototype.deleteOneOrder = function(orderId) {
  if (typeof orderId === "number") {
    return Order.prototype.deleteOneOrder(orderId);
  } else {
    return "WARNING: Id must be a number";
  }
};

Admin.prototype.deleteAllOrders = function() {
  return Order.prototype.deleteAllOrders();
};

module.exports = Admin;

// let admin1 = new Admin("admin1", "admin1@gmail.com", "394jr");
// admin1.createUser();

// admin1.makeOrder("pen", "book", "admin");
