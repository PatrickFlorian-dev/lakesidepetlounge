// Variables / Imports
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 4111;

// Configure express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use('/', require('./routes/api'));

// Server Start
app.listen(PORT, console.log("Server has started at port localhost:" + PORT))
