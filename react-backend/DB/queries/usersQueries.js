const { db } = require('../index.js')


// Show all users
const getAllUsers = (req, res, next) => {
  db.any("SELECT * FROM users")
  .then(users => {
    res.status(200).json({
      status: 'success',
      users: users,
      message: "Received all USERS!"
    })
  })
  .catch(err => next(err));
}

// Show one user
const getAUser = (req, res, next) => {
  db.any('SELECT * FROM users WHERE username = ${username}',
    req.params)
    .then(data => {
      res.status(200)
        .json({
          status: "Success",
          message: "Get a user",
          data: data
        })
    })
    .catch(err => {
      return next(err)
    })
}

// Add a new user
const createUser = (req, res, next) => {
  db.none(
    "INSERT INTO users(username, email) VALUES(${username}, ${email})",
    req.body
  )
  .then(() => {
    res.status(200).json({
      status: 'success',
      message: 'NEW USER ADDED!'
    })
  })
  .catch(err => next(err));
}

// Edit a user
const editUser =( req, res, next ) => {
  db.none('update users set username =${newName} where username = ${username}',
    req.body)
    .then(()=> {
      res.status(200).json({
        status:'Le Success',
        message:"User Info updated"
      });
    })
    .catch(err => next(err));
}

//Delete User

const deleteUser = ( req, res, next ) => {
  let userId = parseInt(req.params.id)
  db.none ('DELETE FROM users WHERE id=$1', userId)
    .then(res => {
      res.status(200)
        .json({
          status: "success",
          message: "BANHAMMERED a User!"
        })
    })
    .catch(err => next(err))
}


module.exports = {
  getAllUsers,
  getAUser,
  editUser,
  createUser,
  deleteUser
};
