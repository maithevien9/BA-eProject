var jwtDecode = require("jwt-decode");
var dataString = "";
module.exports = function (db, ID, Name, Address, Phone, X, Y, callback) {
   (Name + Address + Phone + X + Y);

  var sql = `UPDATE inforuser SET Name='${Name}', Phone='${Phone}', Address='${Address}', X = '${X}' ,Y = '${Y}' WHERE ID ='${ID}'`;
   (sql);
  db.query(sql, function (err, results, fields) {
    if (err) {
      throw err;
    }
    dataString = "THANH_CONG";
    callback(dataString);
  });
};
