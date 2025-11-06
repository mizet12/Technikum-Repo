-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 15 Gru 2022, 19:45
-- Wersja serwera: 10.4.25-MariaDB
-- Wersja PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `rekru`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `kierunki`
--

CREATE TABLE `kierunki` (
  `ID_kierunku` int(11) NOT NULL,
  `ID_szkoly` int(11) NOT NULL,
  `NazwaK` varchar(20) NOT NULL,
  `prog` decimal(3,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `kierunki`
--

INSERT INTO `kierunki` (`ID_kierunku`, `ID_szkoly`, `NazwaK`, `prog`) VALUES
(1, 1, 'Technik elektronik', '3.25'),
(2, 1, 'Technik informatytk', '3.00'),
(3, 1, 'Technik programista', '5.00');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `szkoly`
--

CREATE TABLE `szkoly` (
  `ID_szkoly` int(11) NOT NULL,
  `NazwaSzkoly` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `szkoly`
--

INSERT INTO `szkoly` (`ID_szkoly`, `NazwaSzkoly`) VALUES
(1, 'ZSEiI'),
(2, 'Technikum nr.8');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `uczen`
--

CREATE TABLE `uczen` (
  `ID_ucznia` int(11) NOT NULL,
  `Imie` varchar(20) NOT NULL,
  `Nazwisko` varchar(30) NOT NULL,
  `pesel` varchar(11) NOT NULL,
  `srednia` float NOT NULL,
  `ID_kierunku` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `uczen`
--

INSERT INTO `uczen` (`ID_ucznia`, `Imie`, `Nazwisko`, `pesel`, `srednia`, `ID_kierunku`) VALUES
(25, 'Michał', 'Wiliński', '123', 5, 3),
(26, 'Michał', 'Wiliński', '123', 5, 3),
(27, 'Michał', 'Wiliński', '123', 5, 3),
(28, 'Michał', 'Wiliński', '123', 5, 3),
(29, 'Michał', 'Wiliński', '123', 5, 3),
(30, 'Michał', 'Wiliński', '123', 5, 3),
(31, 'Michał', 'Wiliński', '123', 5, 3),
(32, 'Michał', 'Wiliński', '123', 5, 3),
(33, 'łachim', 'iksńiliW', '312', 5, 1);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `uczen_n`
--

CREATE TABLE `uczen_n` (
  `ID_ucznia` int(11) NOT NULL,
  `Imie` varchar(20) NOT NULL,
  `Nazwisko` varchar(30) NOT NULL,
  `pesel` varchar(11) NOT NULL,
  `srednia` float NOT NULL,
  `ID_kierunku` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `uczen_n`
--

INSERT INTO `uczen_n` (`ID_ucznia`, `Imie`, `Nazwisko`, `pesel`, `srednia`, `ID_kierunku`) VALUES
(1, 'łachim', 'iksńiliW', '123', 3, 3),
(2, 'łachim', 'iksńiliW', '123', 3, 3),
(3, 'łachim', 'iksńiliW', '123', 3, 3),
(4, 'łachim', 'iksńiliW', '123', 3, 3),
(5, 'łachim', 'iksńiliW', '123', 3, 3),
(6, 'łachim', 'iksńiliW', '123', 3, 3),
(7, 'łachim', 'iksńiliW', '123', 3, 3),
(8, 'łachim', 'iksńiliW', '123', 3, 3),
(9, 'łachim', 'iksńiliW', '123', 3, 3),
(10, 'łachim', 'iksńiliW', '123', 3, 3);

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `kierunki`
--
ALTER TABLE `kierunki`
  ADD PRIMARY KEY (`ID_kierunku`);

--
-- Indeksy dla tabeli `szkoly`
--
ALTER TABLE `szkoly`
  ADD PRIMARY KEY (`ID_szkoly`);

--
-- Indeksy dla tabeli `uczen`
--
ALTER TABLE `uczen`
  ADD PRIMARY KEY (`ID_ucznia`);

--
-- Indeksy dla tabeli `uczen_n`
--
ALTER TABLE `uczen_n`
  ADD PRIMARY KEY (`ID_ucznia`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `kierunki`
--
ALTER TABLE `kierunki`
  MODIFY `ID_kierunku` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT dla tabeli `szkoly`
--
ALTER TABLE `szkoly`
  MODIFY `ID_szkoly` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT dla tabeli `uczen`
--
ALTER TABLE `uczen`
  MODIFY `ID_ucznia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT dla tabeli `uczen_n`
--
ALTER TABLE `uczen_n`
  MODIFY `ID_ucznia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
