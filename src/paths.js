const User = require("../src/Users");
const Admin = require("../src/Admin");
const Orders = require("../src/Orders");

const user1 = new User("", "user1@gmail.com", "pass123");
const user2 = new User("Joseph", "user2@gmail.com", "pass123joe");
const user3 = new User("Victor", "vic@gmail.com", "pass123vic");

const admin1 = new Admin("", "admin@gmail.com", "pass1");
const admin2 = new Admin("admin2", "admin2@gmail.com", "pass2");
const admin3 = new Admin("admin3", "admin3@gmail.com", "pass3");

const user1MissingInput = user1.save();
const user2Save = user2.save();
user3.save();

const admin1MissingInput = admin1.save();
const admin2Save = admin2.save();
admin3.save();

const user4 = new User("Amakiri", "amak@gmail.com", "pass123amak");
user4.save();

user3.makeOrder("black shoe", "mackbook");
user2.makeOrder("sugar", "milo", "cake");

module.exports = {
   User,
   Admin,
   Orders,
   user1,
   user2,
   user3,
   admin1,
   admin2,
   admin3,
   user1MissingInput,
   user2Save,
   admin1MissingInput,
   admin2Save
};
