var express = require('express');
var router = express.Router();
var controllers = require('./controllers');


router.get('/read', controllers.read);

router.post('/write', controllers.write);

router.put('/delete/:id', controllers.delete);


// router.get('/', function (req, res) {
//   Testleave.findAll().then((res)=>{
//     console.log(res)
//     res.send('hi !');
//   })
// })
  
  
module.exports = router;
