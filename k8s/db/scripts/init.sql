CREATE DATABASE gestion;

\c gestion;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(32) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(20) DEFAULT 'USER', -- USER, OWNER, GUIDE
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE restaurants (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    owner_id INT REFERENCES users(id),
    address TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);