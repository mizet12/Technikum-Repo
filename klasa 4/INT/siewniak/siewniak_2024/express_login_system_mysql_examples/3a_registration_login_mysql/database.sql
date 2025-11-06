CREATE DATABASE IF NOT EXISTS `database__`
DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `database__`;

CREATE TABLE `registration` (
  `id` int(10) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `username` varchar(30) UNIQUE DEFAULT NULL,
  `password` varchar(20) DEFAULT NULL

) ENGINE=InnoDB DEFAULT CHARSET=utf8;
