BEGIN;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS fav_fighters;

CREATE TABLE users(
  user_id SERIAL,
  username VARCHAR NOT NULL PRIMARY KEY UNIQUE,
  PASSWORD VARCHAR NOT NULL,
  created_at TIMESTAMP DEFAULT current_timestamp
);

CREATE TABLE fav_fighters(

);

COMMIT;