const {
    testleave: Testleave,
  } = require('../../models');
  
  module.exports.read =  (req, res, next) => {
  Testleave.findAll({
    where: {deleted: false}}
  ).then((result)=>{
    res.json(result)
  }).catch((err)=>{
    console.log(err)
  })
};

module.exports.write =  (req, res, next) => {
  Testleave.create({
    "employeeName": req.body.employeeName,
    "joinDate": req.body.joinDate,
    "leaveDate": req.body.leaveDate,
    "leaveReason": req.body.leaveReason,
    "file": "파일",
    "createdAt": null, 
    "deleted":req.body.deleted,
  }).then((result)=>{
    res.json(result)
  }).catch((err)=>{
    console.log(err)
  })
};

module.exports.delete =  (req, res, next) => {
  const { id } = req.params;
  console.log(id)
  Testleave.update({"deleted":true},{
    where: {id}
  }).then((result)=>{
    res.json(result)
  }).catch((err)=>{
    console.log(err)
  })
};






// module.exports.read = async (req, res, next) => {

    
//   Testleave.findAll().then((res)=>{
//     console.log(res,'readddddddddddddddddddddddddddddddddddddddddddddddd')
//   })
// };