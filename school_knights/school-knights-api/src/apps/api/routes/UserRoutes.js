var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/users/:information', (req, res, next) => {

});

router.put('/users/:id/:information', (req, res, next) => {

})

router.delete('/users/:id', (req, res, next) => {

})

// when a random route is inputed
router.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to this API.'
}));

module.exports = router;