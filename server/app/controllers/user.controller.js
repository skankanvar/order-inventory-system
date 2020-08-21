const User = require("../models/user.model");

exports.findByUser = (req, res) => {
  User.findByUser(req.body, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Order with id ${req.body.userName}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving User with id " + req.body.userName,
        });
      }
    } else res.send(data);
  });
};
