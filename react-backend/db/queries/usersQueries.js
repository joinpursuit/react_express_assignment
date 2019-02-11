const {db} = require("./index.js")

// REMEMBER  middleware functions
const getAllUsers = (req, res, next) => {
  db.any("SELECT * FROM users")
    .then(data => {
      console.log(data)
      res.status(200);

      res.json({
        status: "success",
        message: "got a all users",
        body: data
      });
    })
    .catch(err => next(err));
};

const getSingleUser = (req, res, next) => {
  // the number entered in the wildcard for id. that way when choosing from one of the database
  // we return a single user.
  let userId = parseInt(req.params.id);
  db.one("SELECT * FROM users WHERE id = $1", [userId])
    .then(data => {
      res.status(200);
      res.json({
        status: "success",
        message: "got a single user",
        body: data
      });
    })
    .catch(err => next(err));
};

const createUser = (req, res, next) => {
  db.none('INSERT INTO users(username,phonenumber) VALUES(${username},${phonenumber})', req.body)
    .then(() => {
      res.status(200)
        .json({
          status: 'success',
          message: 'congrats new user '
        })
    })
    .catch(err => {
      console.log(err)
      return next(err)})
}

const updateUser = (req, res, next) => {
  db.none('UPDATE users SET username=${username}, phonenumber=${phonenumber} WHERE id=${id}',{
    username: req.body.username,
    phonenumber:req.body.phonenumber,
    id: parseInt(req.params.id)
  })
  .then(() => {
    res.status(200)
      .json({
        status: 'success',
        message: 'Updated a USER!'
      })
  })
  .catch(err => next(err))
}


module.exports = {getAllUsers,getSingleUser,createUser,updateUser}
