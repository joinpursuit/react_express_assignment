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
      next(err);
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
      next(err);
    });
};

const createNewUser = (req, res, next) => {
  db.none(
    "INSERT INTO users(name, phonenumber) VALUES( ${name}, ${phonenumber})",
    req.body
  )
    .then(() => {
      res.status(200).json({
        message: "success"
      });
    })
    .catch(err => {
      console.log("error", err);
      next(err);
    });
};

const editUser = (req, res, next) => {
  db.none(
    "UPDATE users SET name=${name} phonenumber=${phonenumber}  WHERE id=${id}",
    {
      name: req.body.name,
      phonenumber: req.body.phonenumber,
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
