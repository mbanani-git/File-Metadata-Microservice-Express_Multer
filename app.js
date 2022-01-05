const express = require("express");
const app = express();

require("dotenv").config();
const route = require("./routes/route");
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 }));
app.use(express.static("./public"));
app.use(express.json());
app.use(express.urlencoded());
app.use("/", route);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    app.listen(port, () => {
      console.log("server is listening on port 3000..");
    });
  } catch (error) {
    console.log(error);
  }
};
start();
