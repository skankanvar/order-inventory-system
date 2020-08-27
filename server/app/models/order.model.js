const sql = require("./db.js");

// constructor
const Order = function (order) {
  this.id = order.id;
  this.createdate = order.createdate;
  this.deliverBy = order.deliverBy;
  this.products = order.products;
  this.fulfilled = order.fulfilled;
  this.shippingAddress = order.shippingAddress;
  this.userId = order.userId;
};

Order.create = (newOrder, result) => {
  const str = `INSERT INTO orders (deliverBy, products, fulfilled, shippingAddress, userId) VALUES (${newOrder.deliverBy}, '${newOrder.products}', ${newOrder.fulfilled}, '${newOrder.shippingAddress}',${newOrder.userId})`;
  console.log(str);
  sql.query(
    `INSERT INTO orders (deliverBy, products, fulfilled, shippingAddress, userId) VALUES (${newOrder.deliverBy}, ${newOrder.products}, ${newOrder.fulfilled}, ${newOrder.shippingAddress},${newOrder.userId})`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      console.log("created order: ", { ...newOrder, id: res.insertId });
      result(null, { ...newOrder, id: res.insertId });
    }
  );
};

Order.findById = (id, result) => {
  sql.query(
    `SELECT o.id, o.quantity, o.createdate, o.deliverBy, o.fulfilled, o.shippingAddress, p.name as productName,p.id as productId FROM orders o join products p on p.id = o.productid WHERE o.id = ${id}`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log("found order: ", res);
        result(null, res);
        return;
      }

      // not found Order with the cartid
      result({ kind: "not_found" }, null);
    }
  );
};

Order.updateById = (id, order, result) => {
  sql.query(
    "UPDATE orders SET productid = ?, quantity=?, fulfilled=?, deliverBy=?, shippingAddress=? WHERE id = ?",
    [
      order.productid,
      order.quantity,
      order.fulfilled,
      order.deliverBy,
      order.shippingAddress,
      id,
    ],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Order with the cartid
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated order: ", { ...order, id: id });
      result(null, { ...order, id: id });
    }
  );
};

Order.deleteById = (id, result) => {
  sql.query("DELETE FROM orders WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Order with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted order with id: ", id);
    result(null, res);
  });
};

Order.getAll = (result) => {
  sql.query("SELECT * FROM orders", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("orders: ", res);
    result(null, res);
  });
};

module.exports = Order;
