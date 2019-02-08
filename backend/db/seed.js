const { db } = require('./index.js');
const faker = require('faker');

let users = [];

for(let i = 0; i < 25; i++) {
  let username = faker.name.findName();
  let email = faker.internet.email();
  let str = "( '" + username + "', '" + email + "')";
  users.push(str)
}
