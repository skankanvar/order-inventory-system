const sql = require("./db.js");

// constructor
const Order = function(order) {
  this.id = order.id;
  this.createdate = order.createdate;
  this.deliverby = order.deliverby;
  this.productid = order.productid;
  this.quantity = order.quantity;
  this.fulfilled = order.fulfilled;
  this.shippingaddress = order.shippingaddress;
};

Order.create = (newOrder, result) => {
    sql.query("INSERT INTO orders SET ?", newOrder, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("created order: ", { ...newOrder, id: res.insertId  });
        result(null, { ...newOrder, id: res.insertId });
        });   
};

Order.findById = (id, result) => {
  sql.query(`SELECT o.id, o.quantity, o.createdate, o.deliverby, o.fulfilled, o.shippingaddress, p.name as productName,p.id as productId FROM orders o join products p on p.id = o.productid WHERE o.id = ${id}`, (err, res) => {
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
  });
};


Order.updateById = (id, order, result) => {
  sql.query(
    "UPDATE orders SET productid = ?, quantity=?, fulfilled=?, deliverby=?, shippingaddress=? WHERE id = ?",
    [order.productid, order.quantity, order.fulfilled, order.deliverby, order.shippingaddress, id],
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

      console.log("updated order: ", {...order, id:id });
      result(null, {...order, id: id });
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

module.exports = Order;