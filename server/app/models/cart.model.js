const sql = require("./db.js");

// constructor
const Cart = function (cart) {
  this.cartid = cart.cartid;
  this.productid = cart.productid;
  this.quantity = cart.quantity;
  this.createddate = cart.createddate;
  this.active = cart.active;
};

Cart.create = (newCart, result) => {
  getActiveOrNextCartId((err, cartid) => {
    if (err) {
      result(err, null);
      return;
    } else {
      newCart.cartid = cartid;
      sql.query("INSERT INTO carts SET ?", newCart, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
        console.log("created cart: ", newCart);
        result(null, newCart);
      });
    }
  });
};

const getActiveOrNextCartId = (result) => {
  sql.query(`SELECT * FROM carts order by cartid desc`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found cart: ", res[0]);
      if (res[0].active) {
        result(err, res[0].cartid);
        // result.cartid = res[0].cartid;
      } else {
        result(err, res[0].cartid + 1);
        // result.cartid = res[0].cartid +1;
      }
      return;
    } else {
      result(err, 1);
      // result.cartid = 1;
    }
  });
};

Cart.findByCartByUserId = (userId, result) => {
  sql.query(`SELECT * FROM cart WHERE userId = ${userId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found cart: ", res);
      result(null, res);
      return;
    }

    // not found Cart with the cartid
    result({ kind: "not_found" }, null);
  });
};

Cart.updateByCartId = (cartid, cart, result) => {
  sql.query(
    "UPDATE carts SET quantity = ?, productid = ?, active = ? WHERE cartid = ?",
    [cart.quantity, cart.productid, cart.active, cartid],
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

      console.log("updated cart: ", { ...cart, cartid: cartid });
      result(null, { ...cart, cartid: cartid });
    }
  );
};

Cart.deleteByCartId = (cartid, result) => {
  sql.query("DELETE FROM carts WHERE cartid = ?", cartid, (err, res) => {
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

    console.log("deleted cart with cartid: ", cartid);
    result(null, res);
  });
};

module.exports = Cart;
