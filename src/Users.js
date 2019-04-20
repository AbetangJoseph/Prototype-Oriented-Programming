const DB = require("./DB");
const Order = require("./Orders");
let id = 0;

//GENERATING USER ID STARTING FROM 1
function idGenerator() {
  id == 0 ? (id = 1) : (id = ++id);
  return id;
}

function User(name, email, password) {
  this.id = idGenerator(id);
  this.name = name;
  this.email = email;
  this.password = password;
  this.isAdmin = false;
  this.isDeleted = false;
}

User.prototype.createUser = function() {
  if (this.name == "" || this.email == "" || this.password == "") {
    return "WARNING: All feilds are required";
  } else {
    let user = DB.Users.filter(e => e.email === this.email);
    if (user.length === 0) {
      user_payload = {
        id: this.id,
        name: this.name,
        email: this.email,
        password: this.password,
        isAdmin: this.isAdmin,
        isDeleted: this.isDeleted
      };
      DB["Users"].push(user_payload);
      return "SUCCESS: Account created";
    } else {
      return "ERROR: Email already exists";
    }
  }
};

User.prototype.readSingleUser = function(id) {
  if (typeof id === "number") {
    let user = DB.Users.filter(e => e.id === id);
    if (user.length === 0) {
      return console.log("ERROR: No such User");
    } else {
      return console.log(user[0]);
    }
  } else {
    return console.log("INVALID: ID must be a Number");
  }
};

User.prototype.updateUser = function(name, email, password) {
  if (name == "" || email == "" || password == "") {
    return console.log("WARNING: To update, all feilds must be filled");
  } else {
    DB.Users.map(e => {
      if (e.id === this.id) {
        e.name = name;
        e.email = email;
        e.password = password;
        return console.log("SUCCESS: Record Updated");
      }
    });
  }
};

User.prototype.searchUserByName = function(name) {
  if (name == "" || typeof name !== "string") {
    return console.log("WARNING: Search by name");
  } else {
    let user = DB.Users.filter(e => e.name === name);
    if (user.length === 0) {
      return console.log("False");
    } else {
      return console.log(user);
    }
  }
};

User.prototype.makeOrder = function(...products) {
  if (products.length === 0) {
    return console.log("WARNING: Input cannot be empty");
  } else {
    Order.prototype.createOrder(products, this.id);
  }
};

module.exports = User;

let user1 = new User("Joe", "user1@gmail.com", "pass23");
let user2 = new User("Joe2", "user1@gmail.com2", "pass232");

user1.createUser();
user2.createUser();

user2.makeOrder("razor", "soap", "book");
user1.makeOrder("perfum", "oil");
