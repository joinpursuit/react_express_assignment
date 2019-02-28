const pgp = require('pg-promise')({});
const db = pgp(process.env.DATABASE_URL|| 'postgres://localhost:5432/reactexpress');

module.exports = { db }

// const db = pgp('postgres://localhost:5432/reactexpress');
