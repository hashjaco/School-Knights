var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {

});

router.post('/', (req, res, next) => {

});

router.put('/', (req, res, next) => {

})

router.delete('/', (req, res, next) => {

})

// when a random route is inputed
router.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to this API.'
}));
module.exports = router;
