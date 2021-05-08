require("dotenv").config();
const express  = require("express");
const bodyParser = require("body-parser");

const app      = express();
const PORT     = process.env.PORT || 4747;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.listen(PORT, () => {
   console.log(app.get("env").toUpperCase() + " Server started on port " + (PORT));
});
