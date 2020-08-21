module.exports = (app) => {
  const carts = require("../controllers/cart.controller.js");

  // Create a new Product
  //app.post("/cart/users/:id", carts.create);

  // Retrieve products in the cart
  app.get("/cart/users/:id", carts.findByCartUserId);

  // Update a Product with productId
  //app.put("/cart/users/:id", carts.updateByCartId);

  // Delete a Product with productId
  //app.delete("/cart/users/:id", carts.deleteByCartId);
};
