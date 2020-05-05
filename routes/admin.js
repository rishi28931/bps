const express = require('express');
const path = require("path");
const rootDir = require('../util/path.js');


const router = express.Router();
router.use('/add-bill', (req, res, next) => {
    // res.sendfile(path.join(__dirname, "../", "views", 'bill.html'));
    // res.sendfile(path.join(rootDir, "views", 'bill.html'));
    res.render()
});
router.post('/bi', (req, res, next) => {
    res.send("<h1>bill</h1>");

});
router.get('/', (req, res, next) => {
    console.log("in another middleware");
    res.send("<h1>hi</h1>");


});

module.exports = router;