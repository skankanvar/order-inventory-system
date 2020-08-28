module.exports = (app) => {
  const enhancement = require("../controllers/enhancement.controller.js");

  app.post("/enhancement/products/:id", enhancement.create);

  app.get("/enhancement/products/:id", enhancement.findByProductId);
};
