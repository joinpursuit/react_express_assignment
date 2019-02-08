DROP DATABASE IF EXISTS userlist;
CREATE DATABASE userlist;

\c userlist;

CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  name VARCHAR UNIQUE NOT NULL,
  phonenumber VARCHAR UNIQUE
);

INSERT INTO users (name, phoneNumber)
VALUES ('Carina', '1113335555' ), ('Channing','2224446666'), ('Thomas','3336667799')
