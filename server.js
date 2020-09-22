const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(path.join(__dirname, "/public")));

const PORT = process.env.PORT || 8090;

// Parse request body as JSON
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
const routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});