const sql = require("./db.js");

const User = function (user) {
  this.id = user.id;
  this.createDate = user.createDate;
  this.userName = user.userName;
  this.password = user.password;
  this.type = user.type;
  this.firstName = user.firstName;
  this.lastName = user.lastName;
};

User.findByUser = ({ userName, password }, result) => {
  sql.query(
    `SELECT id, userName, type FROM user WHERE password = '${password}' AND userName = '${userName}'`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log("found order: ", res);
        result(null, res[0]);
        return;
      }

      // not found Order with the cartid
      result({ kind: "not_found" }, null);
    }
  );
};

module.exports = User;
