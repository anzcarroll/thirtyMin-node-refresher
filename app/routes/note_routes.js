var express = require('express')
var router = express.Router()


    router.post('/', (req, res) => {
        //note here
        console.log(req.body)
        res.send('HELLO');
    });

module.exports = router;