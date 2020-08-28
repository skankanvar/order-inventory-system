const Enhancement = require("../models/enhancement.model.js");

// Create and Save a new Order
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  const enhancement = new Enhancement({
    productId: req.params.id,
    enhancement: req.body.enhancement,
  });

  Enhancement.create(enhancement, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Enhancement.",
      });
    else res.send(data);
  });
};

// Find a single Order with a cartId
exports.findByProductId = (req, res) => {
  Enhancement.findByProductId(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Product with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message:
            "Error retrieving Enhancements with productId " + req.params.id,
        });
      }
    } else res.send(data);
  });
};

// Update a Order identified by the cartId in the request
// exports.updateById = (req, res) => {
//   // Validate Request
//   if (!req.body) {
//     res.status(400).send({
//       message: "Content can not be empty!",
//     });
//   }

//   Order.updateById(req.params.id, new Order(req.body), (err, data) => {
//     if (err) {
//       if (err.kind === "not_found") {
//         res.status(404).send({
//           message: `Not found Order with id ${req.params.id}.`,
//         });
//       } else {
//         res.status(500).send({
//           message: "Error updating Order with id " + req.params.id,
//         });
//       }
//     } else res.send(data);
//   });
// };

// // Delete a Order with the specified cartId in the request
// exports.deleteById = (req, res) => {
//   Order.deleteById(req.params.id, (err, data) => {
//     if (err) {
//       if (err.kind === "not_found") {
//         res.status(404).send({
//           message: `Not found Order with id ${req.params.id}.`,
//         });
//       } else {
//         res.status(500).send({
//           message: "Could not delete Order with id " + req.params.id,
//         });
//       }
//     } else res.send({ message: `Order was deleted successfully!` });
//   });
// };

// exports.findAll = (req, res) => {
//   Order.getAll((err, data) => {
//     if (err)
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving Products.",
//       });
//     else res.send(data);
//   });
// };
