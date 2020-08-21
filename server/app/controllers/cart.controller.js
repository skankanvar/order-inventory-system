const Cart = require("../models/cart.model.js");

// Create and Save a new Cart
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Create a Cart
  const cart = new Cart({
    cartid: req.body.cartid,
    createddate: new Date(),
    productid: req.body.productid,
    quantity: req.body.quantity,
    active: req.body.active,
  });

  // Save Cart in the database
  Cart.create(cart, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Cart.",
      });
    else res.send(data);
  });
};

// Find a single Cart with a cartId
exports.findByCartUserId = (req, res) => {
  Cart.findByCartByUserId(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Cart not found with userId ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Cart with userId " + req.params.id,
        });
      }
    } else res.send(data);
  });
};

// Update a Cart identified by the cartId in the request
exports.updateByCartId = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  Cart.updateByCartId(req.params.cartid, new Cart(req.body), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Cart with cartid ${req.params.cartid}.`,
        });
      } else {
        res.status(500).send({
          message: "Error updating Cart with cartid " + req.params.cartid,
        });
      }
    } else res.send(data);
  });
};

// Delete a Cart with the specified cartId in the request
exports.deleteByCartId = (req, res) => {
  Cart.deleteByCartId(req.params.cartid, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Cart with cartid ${req.params.cartid}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete Cart with cartid " + req.params.cartid,
        });
      }
    } else res.send({ message: `Cart was deleted successfully!` });
  });
};
