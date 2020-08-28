const sql = require("./db.js");

// constructor
const Enhancement = function (enhancement) {
  this.id = enhancement.id;
  this.productId = enhancement.productId;
  this.enhancement = enhancement.enhancement;
};

Enhancement.create = (newEnhancement, result) => {
  sql.query(
    `INSERT INTO enhancement (productId, enhancement) VALUES (${newEnhancement.productId}, ${newEnhancement.enhancement})`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      console.log("created enhancement: ", {
        ...newEnhancement,
        id: res.insertId,
      });
      result(null, { ...newEnhancement, id: res.insertId });
    }
  );
};

Enhancement.findByProductId = (productId, result) => {
  sql.query(
    `select * from enhancement where productId=${productId}`,
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

      result({ kind: "not_found" }, null);
    }
  );
};

// Enhancement.updateById = (id, order, result) => {
//   sql.query(
//     "UPDATE orders SET productid = ?, quantity=?, fulfilled=?, deliverBy=?, shippingAddress=? WHERE id = ?",
//     [
//       order.productid,
//       order.quantity,
//       order.fulfilled,
//       order.deliverBy,
//       order.shippingAddress,
//       id,
//     ],
//     (err, res) => {
//       if (err) {
//         console.log("error: ", err);
//         result(null, err);
//         return;
//       }

//       if (res.affectedRows == 0) {
//         // not found Order with the cartid
//         result({ kind: "not_found" }, null);
//         return;
//       }

//       console.log("updated order: ", { ...order, id: id });
//       result(null, { ...order, id: id });
//     }
//   );
// };

// Order.deleteById = (id, result) => {
//   sql.query("DELETE FROM orders WHERE id = ?", id, (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(null, err);
//       return;
//     }

//     if (res.affectedRows == 0) {
//       // not found Order with the id
//       result({ kind: "not_found" }, null);
//       return;
//     }

//     console.log("deleted order with id: ", id);
//     result(null, res);
//   });
// };

// Order.getAll = (result) => {
//   sql.query("SELECT * FROM orders", (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(null, err);
//       return;
//     }

//     console.log("orders: ", res);
//     result(null, res);
//   });
// };

module.exports = Enhancement;
