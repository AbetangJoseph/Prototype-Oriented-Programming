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
      return "SUCCESS: Account saved";
    } else {
      return "ERROR: Email already exists";
    }
  }
};

User.prototype.readSingleUser = function(id) {
  if (typeof id === "number") {
    let user = DB.Users.find(e => e.id === id);
    if (!user) {
      return "INFO: No such User";
    } else {
      return user;
    }
  } else {
    return "INVALID: ID must be a Number";
  }
};

User.prototype.updateUser = function(name, email, password) {
  if (name == "" || email == "" || password == "") {
    return "WARNING: To update, all feilds must be filled";
  } else {
    DB.Users.map(e => {
      if (e.id === this.id) {
        e.name = name;
        e.email = email;
        e.password = password;
      }
    });
    return "SUCCESS: Record Updated";
  }
};

User.prototype.searchUserByName = function(name) {
  if (name == "" || typeof name !== "string") {
    return "WARNING: Search by name";
  } else {
    let user = DB.Users.filter(e => e.name === name);
    if (user.length === 0) {
      return "False";
    } else {
      return user[0];
    }
  }
};

User.prototype.makeOrder = function(...products) {
  if (products.length === 0) {
    return "WARNING: Input cannot be empty";
  } else {
    return Order.prototype.createOrder(products, this.id);
  }
};

module.exports = User;
