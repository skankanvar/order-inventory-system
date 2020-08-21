module.exports = (app) => {
  const user = require("../controllers/user.controller.js");

  // Create a new Order
  app.post("/login", user.findByUser);
};
