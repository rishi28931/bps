const http = require('http');
const bodyParser = require('body-parser');
const express = require('express');
const expresshbs = require("express-handlebars");
const app = express();
app.engine('hb', expresshbs())
app.set('view-engine', 'hb');
app.set('views', 'views');
const adminroutes = require("./routes/admin.js");




app.use(bodyParser.urlencoded({ extended: false }));
app.use(adminroutes);

app.use((req, res, next) => {

    res.status(404).send("<h1>not found</h1>");

});

app.listen(3000);
// const server = http.createServer(app);
// server.listen(5000);