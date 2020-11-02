-- Clear Database
DROP DATABASE IF EXISTS burger_db;

-- Create Database
CREATE DATABASE burger_db;

-- Use Database
USE burger_db;

-- Create Database Table
CREATE TABLE burgers (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    burger_name VARCHAR(50),
    devoured BOOLEAN DEFAULT false
);