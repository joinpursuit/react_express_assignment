DROP DATABASE IF EXISTS reactexpress;
CREATE DATABASE reactexpress;

\c reactexpress;

DROP TABLE IF EXISTS reactexpress;

CREATE TABLE users(
id SERIAL PRIMARY KEY,
username VARCHAR NOT NULL
);

INSERT INTO users(username)VALUES ('Wakanda'), ('America'), ('SteveRogers'), ('Hoopla'), ('Wuphe'), ('Spooderman')
