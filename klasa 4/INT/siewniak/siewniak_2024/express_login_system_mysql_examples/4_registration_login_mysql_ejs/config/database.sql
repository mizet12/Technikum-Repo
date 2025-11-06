CREATE DATABASE IF NOT EXISTS `db_ejs_1`
DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `db_ejs_1`;

CREATE TABLE IF NOT EXISTS `accounts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) UNIQUE NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
)
ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

