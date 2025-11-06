CREATE DATABASE IF NOT EXISTS `login_data_2` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `login_data_2`;

CREATE TABLE IF NOT EXISTS `data_table` (
  `id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `username` varchar(50) UNIQUE NOT NULL,
  `password` varchar(255) NOT NULL
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8;

INSERT INTO `data_table` (`id`, `username`, `password`)
VALUES (1, 'piotr', 'piotr');
