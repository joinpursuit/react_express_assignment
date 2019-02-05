const pgp = require("pg-promise")({});
const db = pgp("postgres://localhost:5432/userlist");

const getAllUsers = (req, res, next) => {
  db.any("SELECT * FROM users")
    .then(user => {
      res.status(200).json({
        status: "success",
        users: user,
        message: "Got All Users"
      });
    })
    .catch(err => {
      console.log("error", err);
      next();
    });
};

const getSingleUser = (req, res, next) => {
  const user_id = parseInt(req.params.id);
  db.one("SELECT * FROM users WHERE id=$1", [user_id])
    .then(user => {
      res.status(200).json({
        status: "success",
        user: user,
        message: "got single user"
      });
    })
    .catch(err => {
      console.log("error", err);
      next();
    });
};

const createNewUser = (req, res, next) => {
  db.none(
    "INSERT INTO users(name, phonenumber, password) VALUES( ${name}, ${phonenumber}, ${password})",
    req.body
  )
    .then(() => {
      res.status(200).json({
        message: "success"
      });
    })
    .catch(err => {
      console.log("error", err);
      next();
    });
};

const editUser = (req, res, next) => {
  db.any(
    "UPDATE users SET name=${name} phonenumber=${phonenumber} password=${password} WHERE id=${id}",
    {
      name: req.body.name,
      phonenumber: req.body.phonenumber,
      password: req.body.password,
      id: parseInt(req.params.id)
    }
  )
    .then(() => {
      res.status(200).json({
        status: "success",
        message: "user has been updated"
      });
    })
    .catch(err => {
      console.log("error", err);
    });
};

module.exports = { getAllUsers, getSingleUser, createNewUser, editUser };
