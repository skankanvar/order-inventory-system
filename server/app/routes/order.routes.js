module.exports = app => {
    const orders = require("../controllers/order.controller.js");
  
    // Create a new Product
    app.post("/orders", orders.create);

    // Retrieve a single Product with productId
    app.get("/orders/:id", orders.findById);
  
    // Update a Product with productId
    app.put("/orders/:id", orders.updateById);
  
    // Delete a Product with productId
    app.delete("/orders/:id", orders.deleteById);
  };