const express = require("express");
const mongoose = require("mongoose");

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnesstracker", {
    useNewUrlParser: true,
    useFindAndModify: false
});

mongoose.connect(MONGODB_URI);

app.use(express.static("public"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});