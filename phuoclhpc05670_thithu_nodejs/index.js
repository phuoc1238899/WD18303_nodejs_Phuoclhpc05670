const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const mysql = require("mysql");
const upload = multer({ dest: "./images" });

const app = express();
const port = 9990;
app.use(bodyParser.urlencoded());

// hiện hình ảnh đã được thêm vào
app.use("/images", express.static(__dirname + "/images"));
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mysql",
  database: "lab3_nodejs",
});
db.connect();

const apiRouters = require('./routers/api');
app.use('/api', apiRouters);

app.listen(port, () => {
  console.log(`Example app listening on port http://127.0.0.1:${port}`);
});