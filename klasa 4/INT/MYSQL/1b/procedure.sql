DELIMITER $$

CREATE PROCEDURE `auto_count`()
BEGIN
SELECT marka, COUNT(*) AS liczba FROM auto_table GROUP BY marka;
END $$
