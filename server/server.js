const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");

app.use(cors());
app.use(express.json()); // Allows JSON Objects to be posted
app.use(express.urlencoded({ extended: true })); // Allows URL Encoded Objects to be

// Require mongoose Configuration
require("./config/mongoose.config.js");

// Require Routes
require("./routes/Notes.routes.js")(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
