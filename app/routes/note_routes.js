var express = require('express')
var router = express.Router()

/* GET home page. */
// requiring our Express functionality, then attaching a "router" var to Express's router method, 
// then using that method when an attempt is made to HTTP get the top level directory of our website. 
// then export our router function back to our app.
router.get('/', function (req, res) {
    res.render('index', { title: 'EXPRESS/NODE/MONGO' });
});
// Create New 
router.post('/', (req, res) => {
    //note here
    console.log(req.body)
    res.send('HELLO');
});

module.exports = router;