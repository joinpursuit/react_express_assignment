const express = require('express');
const router = express.Router();
const {
  getAllUsers,
  getSingleUser,
  createNewUser,
  editUser,
} = require('../db/usersQueries.js');

router.get('/', getAllUsers);
router.get('/:id', getSingleUser);
router.post('/', createNewUser);
router.patch('/:id', editUser);

module.exports = router;
