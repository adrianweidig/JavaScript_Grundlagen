-- Voraussetzungen
CREATE DATABASE IF NOT EXISTS bdbi02xx_weidig;
USE bdbi02xx_weidig;

-- Aufgabe 1 a)
CREATE TABLE IF NOT EXISTS user_table
(
    id       INT PRIMARY KEY AUTO_INCREMENT,
    name     VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- Aufgabe 1 b)
CREATE TABLE IF NOT EXISTS todo_table
(
    id     INT PRIMARY KEY AUTO_INCREMENT,
    UserId INT          NOT NULL,
    Datum  DATE         NOT NULL,
    todo   VARCHAR(255) NOT NULL,
    FOREIGN KEY (UserId) REFERENCES user_table (id)
);

-- Aufgabe 1 c)
INSERT INTO user_table (name, password)
VALUES ('Thea', '0000'),
       ('Lara', '1111'),
       ('Luisa', '2222');
