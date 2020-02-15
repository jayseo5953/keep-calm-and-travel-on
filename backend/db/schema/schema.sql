-- Drop and recreate Users table (Example)

DROP TABLE IF EXISTS users CASCADE;


CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(55) NOT NULL,
  last_name VARCHAR(55) NOT NULL,
  email VARCHAR(55) NOT NULL,
  password VARCHAR(55) NOT NULL,
);

CREATE TABLE friends(
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  friend_id INTEGER REFERENCES users(id) ON DELETE CASCADE
)

CREATE TABLE trips (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE schedules (
  id SERIAL PRIMARY KEY NOT NULL,
  trip_id INTEGER REFERENCES trips(id) ON DELETE CASCADE
);

CREATE TABLE destinations (
  id SERIAL PRIMARY KEY NOT NULL,
  city VARCHAR(55) NOT NULL,
  country VARCHAR(55) NOT NULL,
  image_url TEXT
);

CREATE TABLE activities (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(55) NOT NULL,
  price_cents INTEGER NOT NULL,
  time_operation VARCHAR(55) NOT NULL,
  latitude DECIMAL(10,8) NOT NULL,
  longtitude DECIMAL(11,8) NOT NULL,
  image_url TEXT,
  destination_id INTEGER REFERENCES destinations(id) ON DELETE CASCADE,
);

CREATE TABLE itineraries (
  id SERIAL PRIMARY KEY NOT NULL,
  schedule_id INTEGER REFERENCES schedules(id) ON DELETE CASCADE,
  activity_id INTEGER REFERENCES activities(id) ON DELETE CASCADE
);
