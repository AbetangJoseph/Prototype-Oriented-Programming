let DB = require("./DB");

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

Order.prototype.getAllOders = function() {
  const allOrders = DB.Orders.filter(e => e.isDeleted === false);
  if (allOrders.length === 0) {
    return console.log("INFO: No order in Database");
  } else {
    return console.log(allOrders);
  }
};

Order.prototype.getOneOrder = function(orderId) {
  let order = DB.Orders.filter(
    e => e.order_id === orderId && e.isDeleted === false
  );
  if (order.length === 0) {
    return console.log("INFO: No such order in Database");
  } else {
    return console.log(order[0]);
  }
};

Order.prototype.UpdateOrder = function(orderId, changeFrom, changeTo) {
  if (orderId === "" || changeFrom === "" || changeTo === "") {
    return console.log("WARNING: All inputs are required");
  } else {
    let orderObject = DB.Orders.find(
      e => e.order_id === orderId && e.isDeleted === false
    );
    if (orderObject === undefined)
      return console.log("Item to change not found");

    if (orderObject.products.indexOf(changeFrom) === -1)
      return console.log("Item to change not found");

    orderObject.products.map((item, i) =>
      item === changeFrom ? (orderObject.products[i] = changeTo) : item
    );
  }
};

Order.prototype.deleteOneOrder = function(orderId) {
  let order = DB.Orders.filter(
    e => e.order_id === orderId && e.isDeleted === false
  );
  if (order.length === 0) {
    return console.log("INFO: No such order in Database");
  } else {
    order.map(e => (e.isDeleted = true));
    console.log(`SUCCESS: Order with id ${orderId} has been deleted`);
    return `SUCCESS: Order with id ${orderId} has been deleted`;
  }
};

Order.prototype.deleteAllOrders = function() {
  DB.Orders.map(e => (e.isDeleted = true));
};

module.exports = Order;
