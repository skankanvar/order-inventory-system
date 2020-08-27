const Order = require("../models/order.model.js");
const { json } = require("body-parser");

// Create and Save a new Order
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Create a Order
  const order = new Order({
    products: JSON.stringify(req.body.products),
    fulfilled: req.body.fulfilled,
    deliverBy: req.body.deliverBy,
    shippingAddress: JSON.stringify(req.body.shippingAddress),
    userId: req.params.id,
  });

  // Save Order in the database
  Order.create(order, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Order.",
      });
    else res.send(data);
  });
};

// Find a single Order with a cartId
exports.findById = (req, res) => {
  Order.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Order with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Order with id " + req.params.id,
        });
      }
    } else res.send(data);
  });
};

// Update a Order identified by the cartId in the request
exports.updateById = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  Order.updateById(req.params.id, new Order(req.body), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Order with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error updating Order with id " + req.params.id,
        });
      }
    } else res.send(data);
  });
};

// Delete a Order with the specified cartId in the request
exports.deleteById = (req, res) => {
  Order.deleteById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Order with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete Order with id " + req.params.id,
        });
      }
    } else res.send({ message: `Order was deleted successfully!` });
  });
};

exports.findAll = (req, res) => {
  Order.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Products.",
      });
    else res.send(data);
  });
};
