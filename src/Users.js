let DB = require("./tempDB");

let id = 0;

function User(name, email, password) {
  //GENERATING USER ID STARTING FROM 1
  function idGenerator() {
    id == 0 ? (id = 1) : (id = ++id);
    return id;
  }
  this.id = idGenerator();
  this.name = name;
  this.email = email;
  this.password = password;
  this.isAdmin = false;
  this.isDeleted = false;
}

User.prototype.createUser = function() {
  if (this.name == "" || this.email == "" || this.password == "") {
    return console.log("WARNING: All feilds are required");
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
      return console.log("SUCCESS: Account created");
    } else {
      return console.log("ERROR: Email already exists");
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

module.exports = User;
