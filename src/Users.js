let DB = require("./tempDB");
let id = 0;

function User(name, email, password) {
  //GENERATING USER ID STARTING FROM 1
  function idGenerator() {
    id == 0 ? (id = 1) : (id = ++id);
    return id;
  }
  this.name = name;
  this.email = email;
  this.password = password;
  this.isAdmin = false;
  this.id = idGenerator();
}

User.prototype.save = function() {
  user = {
    name: this.name,
    email: this.email,
    password: this.password,
    isAdmin: this.isAdmin,
    id: this.id
  };
  DB["Users"].push(user) ? "saved" : "error";
};

User.prototype.readSingleUser = function(id) {
  if (typeof id === "number") {
    let user = DB.Users.filter(e => e.id === id);
    if (user.length === 0) {
      return console.log("No such User");
    } else {
      return console.log(user[0]);
    }
  } else {
    return console.log("Invalid: ID must be a Number");
  }
};


module.exports = User;
