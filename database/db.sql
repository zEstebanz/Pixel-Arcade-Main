CREATE DATABASE IF NOT EXISTS pixelarcade;

USE pixelarcade;

CREATE TABLE
    usuarios (
        id INT NOT NULL AUTO_INCREMENT,
        nombre VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        edad INT,
        PRIMARY KEY (id)
    );

DESCRIBE datos;