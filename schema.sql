-- ATTN WINDOWS USERS: Some of you might have an easier time just copying and pasting the lines below in to your mysql shell

-- YOUR CODE GOES HERE
-- CREATE YOUR DATABASE
-- CREATE YOUR TABLES
-- ADD RECORDS TO YOUR TABLE

DROP DATABASE IF EXISTS cows;

CREATE DATABASE cows;

USE cows;

CREATE TABLE cowList (
  id INT NOT NULL AUTO_INCREMENT,
  name  VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE(name)

);