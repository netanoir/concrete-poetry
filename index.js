const path = require('path');
const express = require('express');

const config = require("./config");

const app = express();

// static file server
app.use( express.static('public') );

app.get("/", (req, res, next) => {
    res.send("hello lovely");
});

app.listen(config.PORT, () => {
    console.log(`see the love at: http://localhost:${config.PORT}`);
})
