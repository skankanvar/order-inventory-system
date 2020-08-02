module.exports = (app) => {
  const orders = require("../controllers/order.controller.js");

  // Create a new Order
  app.post("/orders", orders.create);

  // Get All Orders
  app.get("/orders", orders.findAll);

  // Retrieve a single Order with OrderId
  app.get("/orders/:id", orders.findById);

  // Update a Order with OrderId
  app.put("/orders/:id", orders.updateById);

  // Delete a Order with OrderId
  app.delete("/orders/:id", orders.deleteById);
};
