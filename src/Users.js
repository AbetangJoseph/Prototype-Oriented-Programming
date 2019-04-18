let DB = require("./tempDB");

let id = 0;

function User(name, email, password) {
  this.name = name;
  this.email = email;
  this.password = password;
  this.isAdmin = false;
}

User.prototype.createUser = function() {
  //GENERATING USER ID STARTING FROM 1
  function idGenerator() {
    id == 0 ? (id = 1) : (id = ++id);
    return id;
  }
  if (this.name == "" || this.email == "" || this.password == "") {
    return console.log("WARNING: All feilds are required");
  } else {
    let user = DB.Users.filter(e => e.email === this.email);
    if (user.length === 0) {
      user_payload = {
        id: idGenerator(),
        name: this.name,
        email: this.email,
        password: this.password,
        isAdmin: this.isAdmin
      };
      DB["Users"].push(user_payload);
      return console.log("SUCCESS: User created");
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
      }
    });
    return console.log("Success: Record Updated");
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
      return console.log(user[0]);
    }
  }
};

let user1 = new User("e", "gam@.com", "mehha");
let user2 = new User("joe0", "gam@d.com", "mehha");

user1.createUser();
user2.createUser();
// console.log(DB);

module.exports = User;
