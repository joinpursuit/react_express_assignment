DROP DATABASE IF EXISTS leusers;
CREATE DATABASE leusers;

\c leusers;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR UNIQUE NOT NULL
);

INSERT INTO users(username) VALUES ('Jon'), ('Andres'), ('Jacky'),('Tyson');
