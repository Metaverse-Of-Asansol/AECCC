const express = require("express");
const auth = require("./routes/auth");
const events = require("./routes/events");
const app = express();
const cookieparser = require("cookie-parser");
require("dotenv").config();
var cors = require("cors");
const cloudinary = require("cloudinary").v2;
const fileupload = require("express-fileupload");
const connect = require("./config/database").connect(); //! DATABASE CONNECTION

const PORT = process.env.PORT;

cloudinary.config({
  //!    ########   Configuring the Cloudinary to Upload MEDIA ########
  cloud_name: "sahebcloud",
  api_key: "778136843168934",
  api_secret: "7ll334sxojyz-gIeKYCZoaJtLxE",
});

// ! MIDDLEWARES
app.use(express.json());
app.use(cookieparser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(
  // ######  Using FILE UPLOAD Middleware to Access the FILE
  fileupload({
    useTempFiles: true, // Creating a Temp Directory Option as TRUE
    tempFileDir: "/tmp/", // Temp Directory PATH
  })
);
app.use(express.urlencoded({ extended: true }));
// ! AUTHENTICATION ROUTE
app.use("/api/v1", auth);
app.use("/api/v1", events);
app.use("/*", (req, res) => {
  res
    .status(404)
    .send(
      `<br><br><h1 style="text-align: center;">404 || content not found</h1>`
    );
});
module.exports = app;
