//THIS FILE IS JSUT FOR CODE REVIEW

const User = require("../src/Users");
const Admin = require("../src/Admin");
const Orders = require("../src/Orders");

const user1 = new User("Joseph", "user1@gmail.com", "pass123");
// const user2 = new User("Joseph", "user2@gmail.com", "pass123joe");
const user2 = new User("Victor", "vic@gmail.com", "pass123vic");
const user3 = new User("Amakiri", "amak@gmail.com", "pass123amak");

// const admin1 = new Admin("", "admin@gmail.com", "pass1");
const admin1 = new Admin("admin1", "admin1@gmail.com", "pass1");
const admin2 = new Admin("admin2", "admin2@gmail.com", "pass2");

const user4 = new User("Amakiri", "amak@gmail.com", "pass123amak");

console.log(user1.save());
console.log(user2.save());

console.log(user3.save());

console.log(admin1.save());
console.log(admin2.save());

console.log(user4.save());

// console.log(user1.readSingleUser(0));
console.log(user1.readSingleUser(2));
console.log(admin1.getAllUsers());
console.log(user1.updateUser("David", "David@gmail.com", "safjioa"));
console.log(admin1.getAllUsers());
console.log(admin1.deleteUser(2));
console.log(admin1.getAllUsers());

// console.log(admin1.searchUserByName("Victor"));
// console.log(admin1.searchUserByName("charles"));
console.log(admin1.searchUserByName("Amakiri"));
console.log(user3.makeOrder("black shoe", "mackbook"));
console.log(user1.makeOrder("sugar", "milo", "cake"));
console.log(user3.makeOrder("iphonex", "lenovo 15inch"));
console.log(admin1.getAllOders());

console.log(admin1.getOneOrder(3));

console.log(admin1.UpdateOrder(3, "iphonex", "SamsungS7"));
console.log(admin1.getAllOders());

admin1.deleteOneOrder(2);
console.log(admin1.getAllOders());
console.log(admin1.deleteAllOrders());
console.log(admin1.getAllOders());
console.log(admin1.deleteAllUsers());
console.log(admin1.getAllUsers());
