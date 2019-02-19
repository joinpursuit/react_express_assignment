var express = require('express');
var router = express.Router();

const{getAllUsers,getSingleUser,createUser,updateUser} = require("../db/queries/usersQueries.js")
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('this is something else');
// });
router.get('/',getAllUsers);
router.get("/:id", getSingleUser)
router.post("/",createUser)
router.put('/:id', updateUser)

module.exports = router;
