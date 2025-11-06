DROP DATABASE IF EXISTS auto_database;

CREATE DATABASE auto_database
	DEFAULT CHARACTER SET utf8
	DEFAULT COLLATE utf8_polish_ci;

USE auto_database;

CREATE TABLE IF NOT EXISTS auto_table (
    id INT(3) NOT NULL AUTO_INCREMENT,
    marka VARCHAR(20),
    model VARCHAR(20),
    rok_produkcji INT(4),
    cena INT(6),
    nr_rejestracyjny CHAR(8) NOT NULL UNIQUE,
    PRIMARY KEY (id)
)
