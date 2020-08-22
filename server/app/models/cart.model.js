const sql = require("./db.js");

// constructor
const Cart = function (cart) {
  this.id = cart.id;
  this.productId = cart.productId;
  this.quantity = cart.quantity;
  this.userId = cart.userId;
};

Cart.create = (cart, result) => {
  sql.query(
    `INSERT INTO cart (userId, productId, quantity) VALUES ( ${cart.userId}, ${cart.productId}, ${cart.quantity})`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Cart with the cartid
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("inserted new Item for user cart");
      result(null, res);
    }
  );
};

Cart.findByCartByUserId = (userId, result) => {
  sql.query(
    `SELECT c.id AS id, c.userId, c.productId, c.quantity, c.createDate, c.updateDate, p.name, p.description, p.price from cart c INNER JOIN products p ON c.productId = p.id where userId = ${userId}`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.affectedRows == 0) {
        // not inserted
        result({ kind: "not_found" }, null);
        return;
      }

      // not found Cart with the cartid
      result(null, res);
    }
  );
};

Cart.updateByCartId = (id, quantity, result) => {
  sql.query(
    "UPDATE cart SET quantity = ? WHERE id = ?",
    [quantity, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Cart with the cartid
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated cart: ", id);
      result(null, { id, quantity });
    }
  );
};

Cart.deleteByCartId = (id, result) => {
  sql.query("DELETE FROM cart WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Cart with the cartid
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted cart with cartid: ", id);
    result(null, res);
  });
};

module.exports = Cart;
