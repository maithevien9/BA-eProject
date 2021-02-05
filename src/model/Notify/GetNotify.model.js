module.exports = function (db, ID, callback) {
  var dataString = "";
  var data = [];
  if (ID === "") {
    dataString = "KHONG_THANH_CONG";
    callback(dataString, data);
  } else {
    if (dataString != "KHONG_THANH_CONG") {
      var sql = `SELECT * FROM Notify where IDUser = ${ID}  ORDER BY CreateAtTime DESC`;
      db.query(sql, function (err, results, fields) {
        if (err) {
          throw err;
        } else {
          data = JSON.parse(JSON.stringify(results));
          dataString = "THANH_CONG";
          callback(dataString, data);
        }
      });
    }
  }
};
