module.exports = app => {
    const carts = require("../controllers/cart.controller.js");
  
    // Create a new Product
    app.post("/carts", carts.create);

    // Retrieve a single Product with productId
    app.get("/carts/:cartid", carts.findByCartId);
  
    // Update a Product with productId
    app.put("/carts/:cartid", carts.updateByCartId);
  
    // Delete a Product with productId
    app.delete("/carts/:cartid", carts.deleteByCartId);
  };