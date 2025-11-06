DELIMITER $$

CREATE PROCEDURE `get_data_1`()
BEGIN
  SELECT id, marka, model, rok_produkcji, cena
  FROM auto_table
  ORDER BY id;
END $$
