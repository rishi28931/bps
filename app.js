const http = require('http');
const bodyParser = require('body-parser');
const express = require('express');
const Handlebars = require('handlebars')
const expressHandlebars = require('express-handlebars');
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access')
const app = express();
const mongoose = require("mongoose");
console.log(mongoose.connection.readyState);
const MONGODB_URI = "mongodb+srv://rishabh:2452@cluster0-6298g.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/myapp', { useNewUrlParser: true });


app.engine('handlebars', expressHandlebars({
    handlebars: allowInsecurePrototypeAccess(Handlebars),
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
//app.set('views', 'views');

const adminroutes = require("./routes/admin.js");

//Routes
app.get("/", (req, res) => {
    res.render("index");
})

app.get("/customer/new", (req, res) => {
    res.render("addnew")
})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(adminroutes);

app.use((req, res, next) => {

    res.status(404).send("<h1>not found</h1>");

});

app.listen(process.env.PORT || 3000);
// const server = http.createServer(app);
// server.listen(5000);