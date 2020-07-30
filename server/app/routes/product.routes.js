module.exports = app => {
    const products = require("../controllers/product.controller.js");
  
    // Create a new Product
    app.post("/products", products.create);
  
    // // Retrieve a single Product with name
    // app.get("/products?searchTerm=:name", products.findByName);

    // Retrieve all Products
    app.get("/products", products.findAllOrByName);
  
    // Retrieve a single Product with productId
    app.get("/products/:id", products.findById);
  
    // Update a Product with productId
    app.put("/products/:id", products.update);
  
    // Delete a Product with productId
    app.delete("/products/:id", products.delete);
  
    // Create a new Product
    app.delete("/products", products.deleteAll);
  };