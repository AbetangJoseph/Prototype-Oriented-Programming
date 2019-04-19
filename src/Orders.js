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

  function idGenerator() {
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
    months[date.getDay() - 1]
  }-${date.getUTCFullYear()}`;
  this.order_id = idGenerator();
  this.products = products;

  order_payload = {
    user_id: this.user_id,
    timeOfOrder: this.timeOfOrder,
    dateOfOrder: this.dateOfOrder,
    order_id: this.order_id,
    products: this.products
  };

  DB["Orders"].push(order_payload);
  return console.log("SUCCESS: Successfully saved");
}

Order.prototype.createOrder = function(products, id) {
  new Order(products, id);
};

module.exports = Order;
