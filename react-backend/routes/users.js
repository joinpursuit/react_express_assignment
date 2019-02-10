var express = require('express');
var router = express.Router();
const db = require('../DB/queries/usersQueries.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


/* GET users listing. */
router.get("/", db.getAllUsers);

router.get("/:id", db.getSingleUser);

router.post("/", db.addNewUser);

router.patch("/:id", db.updateUser);

router.delete("/:id", db.deleteUser);

module.exports = router;
