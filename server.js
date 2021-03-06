var mysql = require("mysql");
var express = require("express");
var bodyParser = require("body-parser");

const cors = require("cors");
const jwt = require("jsonwebtoken");
var fileUpload = require("express-fileupload");
const app = express();
var Router = require("./src/Controllers/Router");
const db = require("./src/Connect/Connect");
const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");


const options = {
  swaggerDefinition: {
    info: {
      version: "1.0.0",
      title: "Customer API",
      description: "Customer API Information",
      contact: {
        name: "Amazing Developer",
      },
      servers: ["http://localhost:5000"],
    },
  },
  // ['.routes/*.js']
  apis: [
    "./src/Controllers/User/Login.js",
    "./src/Controllers/User/Register.js",
    "./src/Controllers/User/ChangInfor.js",
    "./src/Controllers/User/CheckLogin.js",
    "./src/Controllers/Recyclables/NewRecyclables.js",
    "./src/Controllers/Recyclables/ChangStatusRecy.js",
    "./src/Controllers/Gift/GetGift.js",
    "./src/Controllers/Notify/CreateNotity.js",
    "./src/Controllers/Notify/GetNotify.js",
    "./src/Controllers/User/GetInfor.js",
    "./src/Controllers/Recyclables/GetRycyclables.js",
    "./src/Controllers/Recyclables/GetRycycalbleDetail.js",
    "./src/Controllers/Recyclables/recyclablesFull.js",
  ],
};
const swaggerSpec = swaggerJSDoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(express.static('public'));
app.use(cors());
app.use(fileUpload());
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.get("/", function (req, res) {
  res.send("hello");
});
Router(app);

app.listen(8001);
