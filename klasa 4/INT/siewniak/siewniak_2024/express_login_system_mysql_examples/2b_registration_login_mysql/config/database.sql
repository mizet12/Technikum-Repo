CREATE DATABASE IF NOT EXISTS `database____`
DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;

USE `database____`;

CREATE TABLE IF NOT EXISTS `users`(
`id` int(11) NOT NULL AUTO_INCREMENT,
`email` varchar(50) UNIQUE NOT NULL,
`password` varchar(255) NOT NULL,
PRIMARY KEY (`id`)
)
ENGINE=InnoDB DEFAULT CHARSET=utf8;