var express = require('express');
var router = express.Router();
var employee = require('./employee');

router.use('/employee', employee);



module.exports = router;