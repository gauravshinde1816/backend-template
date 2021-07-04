const express = require("express");
const app = express();
const connectDB = require("./config/db");
const path = require("path");

//middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

//connect to database
connectDB();

//routes
app.get("/", (req, res) => {
  res.render("index");
});

//listen to PORT
const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`server started at ${PORT}`);
});
