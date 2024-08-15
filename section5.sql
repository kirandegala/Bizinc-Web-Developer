-- Section 5: PostgreSQL [Mandatory]
-- 1. Coding Challenge: Basic SQL Queries

-- Create table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(50)
);

-- Insert a sample user
INSERT INTO users (name, email) VALUES ('John Doe', 'john@example.com');

-- Retrieve all users
SELECT * FROM users;


-- 2. Conceptual Question: Primary Key
-- A primary key uniquely identifies each row in a table. It's important because it ensures that records are unique and facilitates fast searches and relationships between tables.

