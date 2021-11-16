const express = require("express");
const app = express();
const connectDB = require("./config/db");
const path = require("path");
const indexRoutes = require("./routes/index");
const { auth } = require('express-openid-connect');

//auth0 config
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: 'http://localhost:5000',
  clientID: '3zD8aC3HRFETFK54wq6DEImFzA6yjnym',
  issuerBaseURL: 'https://dev-ct5t0z6i.us.auth0.com'
};

//middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(auth(config));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");


//connect to database
connectDB();

//routes
app.use("/" , indexRoutes)


//listen to PORT
const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`server started at ${PORT}`);
});
