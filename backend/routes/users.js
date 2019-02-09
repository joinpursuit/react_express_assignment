const express = require('express');
const router = express.Router();
const {
  getAllUsers,
  getSingleUser,
  createNewUser,
  editUser,
  deleteUser,
} = require('../db/usersQueries.js');

router.get('/', getAllUsers);
router.get('/:id', getSingleUser);
router.post('/', createNewUser);
router.patch('/:id', editUser);
router.delete('/:id', deleteUser);

module.exports = router;
