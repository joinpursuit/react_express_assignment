DROP DATABASE IF EXISTS reactexpress;
CREATE DATABASE reactexpress;

\c reactexpress;

DROP TABLE IF EXISTS users;

CREATE TABLE users(
id SERIAL PRIMARY KEY,
username VARCHAR NOT NULL,
phonenumber FLOAT UNIQUE
);

INSERT INTO users(username, phonenumber) VALUES ('Wakanda', 99991), ('America', 23232), ('SteveRogers', 342543654), ('Hoopla', 2345), ('Wuphe', 6543), ('Spooderman', 9999);
