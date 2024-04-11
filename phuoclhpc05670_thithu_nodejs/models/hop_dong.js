const db = require("./Database.js");

module.exports = class Hop_dong {
  constructor() {}
  static getAll(callback) {
    let sql = "SELECT * FROM hop_dong";
    db.query(sql, function (err, data) {
      if (err) throw err;
      callback(data);
    });
  }
  static hop_dongpost(post, callback) {
    db.query("INSERT INTO hop_dong SET ?", post, function (err, data) {
      if (err) {
        throw err;
      } else {
        callback(true);
      }
    });
  }

  static gethop_dongById(id, callback) {
    db.query(`SELECT * FROM hop_dong WHERE id = '${id}'`, function (err, data) {
      if (err) {
        throw err;
      } else {
        callback(data);
      }
    });
  }
  static updatehop_dongs(id, value, callback) {
    db.query(`UPDATE hop_dong SET ten_nguoi_mua=?, ten_nguoi_ban=?, gia_tien=?, ngay_ky=?, trang_thai=? WHERE id = '${id}'`, value, function (err, data) {
      if (err) {
        throw err;
      } else {
        callback(data);
      }
    });
  }
  
static deletehop_dongs(id, callback) {
  db.query(`DELETE FROM hop_dong WHERE id = '${id}'`, function (err, data) {
      if (err) {
          throw err
      } else {
          callback(data);
      }
  });
}
}