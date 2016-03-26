CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id INT AUTO_INCREMENT PRIMARY KEY,
  message VARCHAR(100),
  created_at TIMESTAMP DEFAULT NOW(),
  PRIMARY KEY(ID)
);

/* Create other tables and define schemas for them here! */
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  userName VARCHAR(30),
  created_at TIMESTAMP DEFAULT NOW(),
  PRIMARY KEY(ID)
);

CREATE TABLE lobbys (
  id INT AUTO_INCREMENT PRIMARY KEY,
  lobby VARCHAR(30),
  created_at TIMESTAMP DEFAULT NOW()
);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/


