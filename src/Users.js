let DB = require("./tempDB");

let id = 0;

function User(name, email, password) {
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
