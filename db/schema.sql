BEGIN;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS fav_fighters;

CREATE TABLE users(
  user_id SERIAL,
  username VARCHAR NOT NULL PRIMARY KEY UNIQUE,
  password VARCHAR NOT NULL,
  created_at TIMESTAMP DEFAULT current_timestamp
);

CREATE TABLE fav_fighters(
  search_id SERIAL PRIMARY KEY,
  id INT NOT NULL,
  wins INT NOT NULL,
  losses INT NOT NULL,
  draws INT NOT NULL,
  last_name TEXT NOT NULL,
  first_name TEXT NOT NULL,
  weight_class TEXT NOT NULL,
  fighter_status TEXT NOT NULL,
  fighter_img TEXT NOT NULL,
  nickname TEXT NOT NULL
);

COMMIT;
