DELIMITER $$

CREATE PROCEDURE `insert_auto_1`(
  in parMarka VARCHAR(20),
  in parModel VARCHAR(20),
  in parRokProdukcji INT(4),
  in parCena INT(6),
  in parNrRejestracyjny CHAR(8)
)
BEGIN
  INSERT INTO auto_table(marka, model, rok_produkcji, cena, nr_rejestracyjny)
  VALUES (parMarka, parModel, parRokProdukcji, parCena, parNrRejestracyjny);
END $$
