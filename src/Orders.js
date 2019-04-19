let DB = require("./tempDB");

let date = new Date();

let order_id = 0;

function Order(products, id) {
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  function OrderIdGenerator() {
    order_id == 0 ? (order_id = 1) : (order_id = ++order_id);
    return order_id;
  }
  this.user_id = id;
  this.timeOfOrder = date.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });
  this.dateOfOrder = `${date.getDate()}-${
    months[date.getMonth()]
  }-${date.getUTCFullYear()}`;
  this.order_id = OrderIdGenerator();
  this.products = products;
  this.isDeleted = false;

  order_payload = {
    user_id: this.user_id,
    timeOfOrder: this.timeOfOrder,
    dateOfOrder: this.dateOfOrder,
    order_id: this.order_id,
    isDeleted: this.isDeleted,
    products: this.products
  };

  DB["Orders"].push(order_payload);

  return console.log("SUCCESS: Order was successful");
}

Order.prototype.createOrder = function(products, id) {
  new Order(products, id);
};

module.exports = Order;
