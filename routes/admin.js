const express = require('express');
const router = express.Router();
router.use('/add-bill', (req, res, next) => {
    res.send("<h1>bill</h1>");

});
router.post('/bi', (req, res, next) => {
    res.send("<h1>bill</h1>");

});
router.get('/', (req, res, next) => {
    console.log("in another middleware");
    res.send("<h1>hi</h1>");


});

module.exports = router;