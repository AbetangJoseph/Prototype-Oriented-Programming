let DB = require("./tempDB");
let User = require("./Users");
// let Order = require("./Orders");

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

Admin.prototype.getAllOders = function() {
  const allOrders = DB.Orders.map(e => e);
  return console.log(allOrders);
};

Admin.prototype.getOneOrder = function(orderId) {
  let order = DB.Orders.filter(e => e.order_id === orderId && e.isDeleted === false);
  if (order.length === 0) {
    return console.log("INFO: No such order in Database");
  } else {
    return console.log(order[0]);
  }
};





let admin1 = new Admin("admin1", "admin1@gmail.com", "394jr");
admin1.createUser();

admin1.makeOrder("pen", "book", "admin");
// admin1.getAllOders();

admin1.getOneOrder(3);
