var express = require('express')
var router = express.Router()


    router.post('/', (req, res) => {
        //note here
        res.send('HELLO');
    });

module.exports = router;