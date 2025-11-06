DELIMITER $$

CREATE PROCEDURE `get_data_2` (in
    parMarka VARCHAR(20),
    parModel VARCHAR(20),
    parCena int
)
BEGIN
  SELECT id, marka, model, cena, rok_produkcji
  FROM auto_table
  WHERE marka = parMarka AND model = parModel AND cena <= parCena
  ORDER BY id;
END $$

