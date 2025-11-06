-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 12 Paź 2022, 20:01
-- Wersja serwera: 10.4.22-MariaDB
-- Wersja PHP: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `firma_nazwisko`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `pensje`
--

CREATE TABLE `pensje` (
  `id` int(2) NOT NULL,
  `id_os` int(2) NOT NULL,
  `pensja` int(6) NOT NULL,
  `od` date NOT NULL,
  `do` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_polish_ci;

--
-- Zrzut danych tabeli `pensje`
--

INSERT INTO `pensje` (`id`, `id_os`, `pensja`, `od`, `do`) VALUES
(1, 1, 1100, '1999-03-01', '1999-06-01'),
(2, 2, 1300, '1999-03-01', NULL),
(3, 3, 1500, '1999-03-01', '2000-05-31'),
(4, 3, 1800, '2000-06-01', NULL),
(5, 4, 1400, '1999-07-01', '2001-04-30'),
(6, 4, 1700, '2001-05-01', NULL),
(7, 5, 1800, '1999-10-01', '2001-09-30'),
(8, 5, 2000, '2001-10-01', NULL),
(9, 6, 1100, '1999-03-01', '2000-03-01'),
(10, 7, 2000, '1999-05-01', NULL),
(11, 8, 2100, '1999-08-01', NULL),
(13, 10, 2500, '2000-04-01', '2001-05-31'),
(14, 10, 3000, '2001-06-01', NULL);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `placowki`
--

CREATE TABLE `placowki` (
  `id_placowki` int(1) NOT NULL,
  `nazwa` varchar(15) COLLATE utf8mb4_polish_ci NOT NULL,
  `miasto` varchar(15) COLLATE utf8mb4_polish_ci NOT NULL,
  `adres` varchar(20) COLLATE utf8mb4_polish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_polish_ci;

--
-- Zrzut danych tabeli `placowki`
--

INSERT INTO `placowki` (`id_placowki`, `nazwa`, `miasto`, `adres`) VALUES
(1, 'H&M', 'Łódź', 'Sukiennicza 14'),
(2, 'Omega', 'Łódź', 'Piotrkowska 79'),
(3, 'Komputroniks', 'Łódź', 'Rojna 10'),
(5, 'Milka', 'Łódź', 'Sukiennicza 14'),
(6, 'C&A', 'Zgierz', 'Łódzka 15'),
(15, 'Lala', 'Sopot', 'Nowa 21'),
(16, 'Krokodyl', 'Szczecin', 'Wierzbowa 7');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `pracownicy`
--

CREATE TABLE `pracownicy` (
  `id_pracownika` int(4) NOT NULL,
  `nazwisko` varchar(20) COLLATE utf8mb4_polish_ci NOT NULL,
  `imie` varchar(20) COLLATE utf8mb4_polish_ci NOT NULL,
  `pesel` char(11) COLLATE utf8mb4_polish_ci DEFAULT NULL,
  `plec` char(1) COLLATE utf8mb4_polish_ci NOT NULL,
  `data_urodzenia` date NOT NULL,
  `data_zatrudnienia` date NOT NULL,
  `zawod` varchar(15) COLLATE utf8mb4_polish_ci NOT NULL,
  `pensja` decimal(10,0) NOT NULL,
  `dodatek` decimal(10,0) DEFAULT NULL,
  `idplacowki` int(1) NOT NULL,
  `idszefa` int(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_polish_ci;

--
-- Zrzut danych tabeli `pracownicy`
--

INSERT INTO `pracownicy` (`id_pracownika`, `nazwisko`, `imie`, `pesel`, `plec`, `data_urodzenia`, `data_zatrudnienia`, `zawod`, `pensja`, `dodatek`, `idplacowki`, `idszefa`) VALUES
(1, 'Smith', 'Jan', NULL, 'm', '1971-01-22', '2003-05-15', 'informatyk', '3000', '0', 4, 0),
(2, 'Kowal', 'Małgorzata', NULL, 'k', '1969-02-12', '2000-02-01', 'sekretarka', '1700', '0', 2, 2),
(3, 'Anusz', 'Anna', NULL, 'k', '1974-08-22', '2003-05-15', 'prawnik', '3000', '0', 1, 90),
(4, 'Chiński', 'Marek', NULL, 'm', '1968-11-14', '2000-02-01', 'księgowy', '2200', '0', 2, 1),
(5, 'Mięta', 'Roman', NULL, 'm', '1963-03-17', '2000-05-07', 'grafik', '2000', '0', 3, 2),
(6, 'Gates', 'Karol', NULL, 'm', '1967-05-18', '2002-01-14', 'akwizytor', '1200', '0', 4, 2),
(7, 'Janasik', 'Anatol', NULL, 'm', '1968-01-21', '2001-10-15', 'menadżer', '3000', '0', 2, 2),
(8, 'Milion', 'Ewa', NULL, 'k', '1963-02-14', '2000-05-07', 'kasjer', '2800', '0', 6, 2),
(9, 'Bosman', 'Bogdan', NULL, 'm', '1980-01-01', '2006-04-01', 'portier', '1300', '0', 5, 10),
(10, 'Kildare', 'Dariusz', NULL, 'm', '1968-02-17', '2001-10-15', 'elektronik', '1400', '0', 5, 2),
(11, 'Holmes', 'Jakub', NULL, 'm', '1968-06-30', '2001-10-15', 'sprzedawca', '1700', '0', 2, 2),
(12, 'Kmicic', 'Jan', NULL, 'm', '1976-10-08', '2005-02-01', 'informatyk', '3000', '0', 1, 1),
(13, 'Potocki', 'Grzegorz', NULL, 'm', '1963-12-22', '2000-05-07', 'akwizytor', '1200', '0', 3, 10),
(14, 'Gigant', 'Grzegorz', NULL, 'm', '1976-11-16', '2005-02-01', 'elektronik', '1850', '0', 1, 10),
(15, 'Inny', 'Stefan', NULL, 'm', '1966-07-06', '2002-01-14', 'grafik', '2200', '0', 1, 14),
(16, 'Rzecki', 'Bogdan', '', 'm', '1968-01-22', '2001-10-15', 'informatyk', '3000', '0', 1, 1),
(17, 'Boss', 'Bohdan', '', 'm', '1966-03-26', '0000-00-00', 'ksiegowy', '1900', '0', 1, 10),
(18, 'Gates', 'Anna', '', 'k', '1970-03-07', '2004-09-03', 'menadżer', '3000', '0', 2, 2),
(19, 'Potocki', 'Stanisław', '', 'm', '1965-01-09', '2007-01-08', 'portier', '1300', '0', 2, 10),
(20, 'Mięta', 'Karol', '', 'm', '1965-04-05', '2006-01-19', 'kasjer', '2500', '0', 2, 0),
(21, 'Bosman', 'Janina', '', 'k', '1967-04-05', '2002-01-14', 'sekretarka', '2000', '0', 2, 0),
(22, 'Smith', 'Jan', '', 'm', '1965-04-25', '2006-01-19', 'sprzedawca', '1400', '0', 2, 2),
(23, 'Różny', 'Maria', '', 'k', '1965-05-22', '2005-08-20', 'sekretarka', '2000', '0', 3, 4),
(24, 'Potocki', 'Anna', '', 'k', '1965-01-10', '2007-01-08', 'kasjer', '2500', '0', 4, 0),
(25, 'Potocki', 'Karol', '', 'm', '1965-01-13', '2007-01-08', 'informatyk', '2500', '0', 4, 1),
(26, 'Milion', 'Roman', '', 'm', '1966-02-10', '2002-01-14', 'portier', '1200', '0', 4, 2),
(27, 'Mięta', 'Karol', '', 'm', '1965-05-16', '0000-00-00', 'menadżer', '3000', '0', 5, 0),
(28, 'Mięta', 'Anatol', '', 'm', '1970-05-07', '2004-09-03', 'księgowy', '1900', '0', 5, 0),
(29, 'Kowalska', 'Ewa', '', 'k', '1981-12-01', '2006-04-01', 'informatyk', '3000', '0', 5, 1),
(30, 'Kmicic', 'Bogdan', '', 'm', '1964-06-13', '2000-05-07', 'grafik', '2000', '0', 5, 1),
(31, 'Kopeć', 'Anna', '', 'k', '1970-10-15', '2003-05-15', 'elektronik', '1400', '0', 5, 90),
(32, 'Janasik', 'Iza', '', 'k', '1969-02-24', '2000-02-04', 'elektronik', '1850', '0', 5, 10),
(33, 'Inny', 'Jan', '', 'm', '1968-02-28', '2001-10-15', 'akwizytor', '1200', '0', 6, 10),
(34, 'Holmes', 'Adam', '', 'm', '1970-12-25', '2003-05-15', 'akwizytor', '1200', '0', 4, 2),
(35, 'Gigant', 'Grzegorz', '', 'm', '1968-02-25', '2001-10-15', 'księgowy', '1400', '0', 3, 4),
(36, 'Gates', 'Stefan', '', 'm', '1965-11-18', '2005-08-20', 'menadżer', '3000', '0', 2, 0),
(37, 'Gates', 'Stanisław', '', 'm', '1968-05-01', '2001-10-15', 'portier', '1200', '0', 1, 4),
(38, 'Chiński', 'Bohdan', '', 'm', '1969-04-05', '2000-02-01', 'kasjer', '2800', '10', 6, 2),
(39, 'Boss', 'Anna', '', 'k', '1965-04-25', '2006-01-19', 'sekretarka', '2000', '0', 2, 0),
(40, 'Bosman', 'Stanisław', '', 'm', '1969-09-17', '2004-09-03', 'sprzedawca', '1700', '0', 2, 10),
(41, 'Bosman', 'Karolina', '', 'k', '1970-09-29', '2004-09-03', 'sekretarka', '2000', '0', 2, 1),
(42, 'Aanusz', 'Jan', '', 'm', '1965-02-02', '2007-01-08', 'kasjer', '2500', '0', 2, 0),
(43, 'Kiel', 'Barbara', '', 'k', '1970-05-09', '2004-09-03', 'informatyk', '3000', '0', 4, 1),
(44, 'Gagatek', 'Zenon', '', 'm', '1967-03-12', '2002-01-14', 'portier', '1300', '0', 4, 0),
(45, 'Borowik', 'Michal', '', 'm', '1970-10-12', '2003-05-15', 'prezes', '3000', '0', 4, 2),
(46, 'Soski', 'Robert', '', '', '1968-07-26', '2000-02-04', 'ksiegowy', '1900', '0', 4, 0),
(47, 'Misiak', 'Jacek', '', 'm', '1967-08-30', '2002-01-14', 'informatyk', '2500', '0', 4, 0),
(48, 'Zysk', 'Maryla', '', 'k', '1965-11-04', '2005-08-20', 'grafik', '2200', '0', 4, 0),
(49, 'Robak', 'Jacek', '', 'm', '1967-02-07', '2002-01-14', 'elektronik', '1850', '0', 4, 10),
(50, 'Soplica', 'Jacek', '', 'm', '1963-01-01', '2005-02-01', 'elektronik', '1400', '0', 4, 10),
(51, 'Sawyer', 'Tomek', '', 'm', '1964-09-13', '2000-05-07', 'ekonom', '1200', '0', 4, 2),
(52, 'Boruta', 'Michal', '', 'm', '1964-12-21', '2007-01-08', 'magazynier', '1600', '0', 4, 10),
(53, 'Jasiak', 'Monika', '', 'k', '1968-08-03', '2000-02-04', 'sprzedawca', '1600', '0', 4, 10),
(54, 'Zysk', 'Anna', '', 'k', '1966-07-03', '2002-01-14', 'sekretarka', '1400', '0', 4, 1),
(55, 'Soplica', 'Jacek', '', 'm', '1965-05-19', '2005-08-20', 'kasjer', '2500', '0', 6, 0),
(56, 'Sawyer', 'Jacek', '', 'm', '1961-03-22', '2005-02-01', 'informatyk', '3000', '0', 6, 1),
(57, 'Robak', 'Marta', '', 'k', '1965-07-16', '2005-08-20', 'portier', '1300', '0', 6, 10),
(58, 'Kowalski', 'Michał', '', 'm', '1963-09-11', '2000-05-07', 'menadżer', '3000', '0', 6, 0),
(59, 'Jasiak', 'Morus', '', 'm', '1968-07-15', '2000-02-01', 'księgowy', '1900', '0', 6, 1),
(60, 'Grześkowiak', 'Saymon', '', 'm', '1969-05-14', '2004-09-03', 'ochroniarz', '1700', '0', 6, 2),
(61, 'Boruta', 'Tomek', '', 'm', '1965-12-25', '2005-08-20', 'ochroniarz', '1400', '0', 6, 10),
(62, 'Szumowski', 'Andrzej', '', 'm', '1955-11-26', '2001-02-01', 'akizytor', '1200', '0', 6, 10),
(63, 'Karpowicz', 'Dorota', '', 'k', '1959-03-27', '2001-02-01', 'rzecznik', '3000', '0', 6, 90),
(64, 'Kilarski', 'Ewa', '', 'k', '1965-12-28', '2005-08-20', 'redaktor', '2000', '0', 6, 0),
(65, 'Waz', 'Fryderyk', '', 'm', '1963-02-26', '2000-05-07', 'księgowy', '2200', '0', 6, 1),
(66, 'Kostrzewski', 'Grzegorz', '', 'm', '1960-10-30', '2004-02-01', 'elektryk', '1200', '0', 4, 10),
(67, 'Gigant', 'Grzegorz', '', 'm', '1970-10-05', '2004-09-03', 'konserwator', '1600', '0', 4, 10),
(68, 'Inny', 'Stefan', '', 'm', '1963-07-20', '2000-05-07', 'operator', '1000', '0', 4, 2),
(69, 'Różny', 'Stanisław', '', 'm', '1987-10-06', '2006-04-01', 'ochroniarz', '1500', '0', 3, 10),
(70, 'Boss', 'Bohdan', '', 'm', '1975-11-04', '2005-02-01', 'informatyk', '2500', '0', 3, 1),
(71, 'Gates', 'Anna', '', 'k', '1967-02-07', '2002-01-14', 'grafik', '2000', '0', 3, 1),
(72, 'Potocki', 'Stanisław', '', 'm', '1963-02-01', '2000-05-07', 'kasjer', '2800', '0', 3, 2),
(73, 'Miota', 'Karol', '', 'm', '1964-11-09', '2007-01-08', 'kalegowy', '1900', '0', 3, 0),
(74, 'Bosman', 'Jan', '', 'm', '1964-04-30', '2000-05-07', 'konserwator', '1000', '0', 3, 10),
(75, 'Inny', 'Anna', '', 'k', '1968-02-28', '2001-10-15', 'kierowca', '1800', '0', 1, 2),
(76, 'Holmes', 'Barbara', '', 'k', '1970-12-25', '2003-05-15', 'sprzedawca', '1500', '0', 1, 1),
(77, 'Gigant', 'Bożena', '', 'k', '1968-02-25', '2001-10-15', 'sekretarka', '2000', '10', 1, 4),
(78, 'Gates', 'Grzegorz', '', 'm', '1979-09-29', '2006-04-01', 'techniczny', '1000', '0', 1, 10),
(79, 'Gatek', 'Jan', '', 'm', '1967-09-18', '2002-01-14', 'kasjer', '2500', '0', 1, 2),
(80, 'Chrust', 'Jan', '', 'm', '1969-05-14', '2004-09-03', 'kasjer', '2500', '0', 1, 2),
(81, 'Bastek', 'Janusz', '', 'm', '1962-05-01', '2005-02-01', 'informatyk', '3000', '0', 1, 1),
(82, 'Boran', 'Karol', '', 'm', '1962-11-18', '2005-02-01', 'porządkowy', '1000', '0', 1, 10),
(83, 'Baran', 'Michal', '', 'm', '1960-04-25', '2001-02-02', 'porządkowy', '1000', '0', 1, 90),
(84, 'Anusz', 'Stanisław', '', 'm', '1965-02-02', '2007-01-08', 'menadżer', '3000', '0', 1, 0),
(85, 'Kiel', 'Stanisław', '', 'm', '1971-05-10', '2003-05-15', 'menadżer', '3000', '0', 2, 1),
(86, 'Gagatek', 'Stefan', '', 'm', '1967-03-11', '2002-01-14', 'księgowy', '1900', '0', 3, 1),
(87, 'Borowik', 'Zenon', '', 'm', '1970-10-12', '2003-05-15', 'techniczny', '1300', '0', 2, 2),
(88, 'Kowalski', 'Marzena', '', 'k', '1963-02-01', '2005-02-01', 'kierowca', '1800', '0', 2, 10),
(89, 'Kaczan', 'Ewa', '', 'k', '1964-11-09', '2007-01-08', 'elektryk', '1200', '0', 2, 10),
(90, 'Wiss', 'Jan', '', 'm', '1964-04-30', '2000-05-07', 'malarz', '1200', '0', 3, 10),
(91, 'Wilk', 'Sabrina', '', 'k', '1957-12-13', '2001-02-01', 'pakowacz', '1000', '0', 4, 10),
(92, 'Paczka', 'Magdalena', '', 'k', '1973-03-16', '2003-05-15', 'informatyk', '3000', '0', 3, 10),
(93, 'Gałązka', 'Katarzyna', '', 'k', '1961-03-02', '2004-02-01', 'prezes', '4000', '0', 3, 0),
(94, 'Karpowicz', 'Mateusz', '', 'm', '1955-05-05', '2001-02-01', 'konserwator', '1600', '0', 3, 10),
(95, 'Mater', 'Krzysztof', '', 'm', '1960-09-07', '2001-02-02', 'pakowacz', '1000', '0', 3, 10),
(96, 'Kulak', 'Józef', '', 'm', '1954-07-21', '2001-02-02', 'porządkowy', '1200', '0', 3, 90),
(97, 'Busz', 'Stanisław', '', 'm', '1965-05-17', '2005-08-20', 'pakowacz', '1000', '0', 3, 2),
(98, 'Karpowicz', 'Anna', '', 'k', '1973-09-11', '2003-05-15', 'elektryk', '1300', '0', 3, 1),
(99, 'Kilarski', 'Barbara', '', 'k', '1968-07-15', '2000-02-01', 'informatyk', '2500', '0', 3, 1),
(100, 'Wax', 'Bohdan', '', 'm', '1959-05-14', '2001-02-01', 'kierowca', '1800', '0', 4, 10),
(101, 'Kurka', 'Grzegorz', '', 'm', '1965-11-21', '2005-08-20', 'asystent', '1200', '10', 4, 2),
(102, 'Jarek', 'Jan', '', 'm', '1955-01-27', '2001-02-01', 'techniczny', '1000', '0', 4, 10),
(103, 'Wanik', 'Kamil', '', 'm', '1960-03-27', '2001-02-01', 'informatyk', '3000', '0', 5, 1),
(104, 'Lisowski', 'Julian', '', 'm', '1964-12-28', '2007-01-08', 'prezes', '3000', '0', 6, 0),
(105, 'Łapa', 'Henryk', '', 'm', '1963-02-26', '2000-05-07', 'ksiegowy', '1900', '0', 3, 1),
(106, 'Miturski', 'Mateusz', '', 'm', '1960-10-30', '2004-02-01', 'informatyk', '2500', '0', 3, 2),
(107, 'Lysiak', 'Helena', '', 'k', '1970-10-05', '2004-09-03', 'sekretarka', '1500', '0', 3, 1),
(108, 'Wnuk', 'Jan', '', 'm', '1963-07-20', '2000-05-07', 'menadżer', '3000', '0', 2, 0),
(109, 'Mazurowski', 'Janusz', '', 'm', '1977-10-06', '0000-00-00', 'menadżer', '3000', '0', 2, 0),
(110, 'Bodek', 'Karol', '', 'm', '1965-11-05', '2005-08-20', 'informatyk', '3000', '0', 2, 1),
(111, 'Magierowicz', 'Stanisław', '', 'm', '1963-12-01', '2000-05-07', 'pakowacz', '1000', '0', 2, 10),
(112, 'Myslicki', 'Stanisław', '', 'm', '1962-11-08', '2005-02-01', 'porządkowy', '1000', '0', 2, 10),
(113, 'Rengifo', 'Stefan', '', 'm', '1984-04-30', '2006-04-01', 'grafik', '1700', '0', 1, 1),
(114, 'Golanczyk', 'Karol', '', 'm', '1959-03-27', '2001-02-01', 'techniczny', '1300', '0', 1, 10),
(115, 'Ludziejewski', 'Kamil', '', 'm', '1965-12-28', '2005-08-20', 'ksiegowy', '2200', '0', 2, 0),
(116, 'Iwaszko', 'Katarzyna', '', 'k', '1963-02-26', '2000-05-07', 'konserwator', '1600', '0', 4, 10),
(117, 'Muraszkowski', 'Michal', '', 'm', '1960-10-30', '2004-02-01', 'kierowca', '1800', '0', 6, 10),
(118, 'Grzegorczyk', 'Kazimierz', '', 'm', '1970-10-05', '2004-09-03', 'sprzedawca', '1500', '0', 4, 10),
(119, 'Abak', 'Karolina', '', 'k', '1957-10-06', '2001-02-01', 'grafik', '2200', '0', 3, 4),
(120, 'Bosman', 'Stefan', '', 'm', '1970-01-01', '2004-09-03', 'portier', '1300', '10', 3, 10),
(121, 'Boss', 'Stanisław', '', 'm', '1966-03-26', '2002-01-14', 'ksiegowy', '1400', '0', 5, 1),
(122, 'Kildare', 'Jan', '', 'm', '1968-02-27', '2001-10-15', 'elektronik', '1400', '0', 5, 2),
(123, 'Gigant', 'Jakub', '', 'm', '1966-11-16', '2002-01-14', 'elektronik', '1400', '0', 5, 4),
(124, 'Potocki', 'Grzegorz', '', 'm', '1963-12-22', '2000-05-07', 'akwizytor', '1200', '0', 5, 10),
(125, 'Holmes', 'Grzegorz', '', 'm', '1968-06-30', '2001-10-15', 'sprzedawca', '1500', '0', 5, 2),
(126, 'Kmicic', 'Dariusz', '', 'm', '1986-10-08', '2006-04-01', 'informatyk', '2500', '0', 5, 2),
(127, 'Rogal', 'Bohdan', '', 'm', '1968-01-22', '2001-10-15', 'informatyk', '3000', '0', 6, 1),
(128, 'Inny', 'Bogdan', '', 'm', '1966-07-06', '2002-01-14', 'grafik', '2000', '0', 6, 1),
(129, 'Adaszynska', 'Barbara', '', 'k', '1973-01-03', '2003-05-15', 'sekretarka', '2000', '0', 6, 2),
(130, 'Cebula', 'Sebastian', '', 'm', '1975-11-02', '2005-02-01', 'informatyk', '3000', '0', 6, 1);

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `pensje`
--
ALTER TABLE `pensje`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_os` (`id_os`);

--
-- Indeksy dla tabeli `placowki`
--
ALTER TABLE `placowki`
  ADD PRIMARY KEY (`id_placowki`);

--
-- Indeksy dla tabeli `pracownicy`
--
ALTER TABLE `pracownicy`
  ADD PRIMARY KEY (`id_pracownika`),
  ADD UNIQUE KEY `id_pracownika` (`id_pracownika`),
  ADD KEY `id_pracownika_2` (`id_pracownika`),
  ADD KEY `idplacowki` (`idplacowki`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `placowki`
--
ALTER TABLE `placowki`
  MODIFY `id_placowki` int(1) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
