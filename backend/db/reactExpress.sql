DROP DATABASE IF EXISTS reactExpress;
CREATE DATABASE reactExpress;

\c reactExpress;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR NOT NULL,
  email VARCHAR NOT NULL
);
