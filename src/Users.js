const DB = require("./DB");
const Order = require("./Orders");
let id = 0;

//GENERATING USER ID STARTING FROM 1
function idGenerator() {
   id == 0 ? (id = 1) : (id = ++id);
   return id;
}

function User(name, email, password) {
   this.id = idGenerator();
   this.name = name;
   this.email = email;
   this.password = password;
   this.isAdmin = false;
   this.isDeleted = false;
}

User.prototype.save = function() {
   if (this.name == "" || this.email == "" || this.password == "")
      return "WARNING: All feilds are required";

   let user = DB.Users.filter(e => e.email === this.email);
   if (user.length !== 0) return "ERROR: Email already exists";
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
};

User.prototype.readSingleUser = function(id) {
   if (typeof id !== "number") return "INVALID: ID must be a Number";
   let user = DB.Users.find(e => e.id === id);
   return !user ? "INFO: No such User" : user;
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
      let user = DB.Users.filter(e => e.name === name && e.isDeleted === false);
      if (user.length === 0) {
         return "INFO: No such user";
      } else {
         console.log("SUCCESS: Record Found");

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
