DROP DATABASE IF EXISTS userlist;
CREATE DATABASE userlist;

\c userlist;

CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  phonenumber VARCHAR,
  password VARCHAR NOT NULL
);

INSERT INTO users (name, phoneNumber, password)
VALUES ('Carina', '1113335555' ,'password1'), ('Channing','2224446666', 'password2'), ('Thomas','3336667799', 'password3')
