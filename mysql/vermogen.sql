-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 11, 2021 at 10:30 PM
-- Server version: 5.7.32
-- PHP Version: 8.0.0

CREATE DATABASE vermogen;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;


USE vermogen;
--
-- Database: `energie`
--

-- --------------------------------------------------------

--
-- Table structure for table `standen`
--

CREATE TABLE `standen` (
  `id` int(11) NOT NULL,
  `apparaat` varchar(20) NOT NULL,
<<<<<<< HEAD
  `stand` DECIMAL(11,2) NOT NULL
=======
<<<<<<< HEAD
  `stand` DECIMAL(11,2) NOT NULL
=======
<<<<<<< HEAD
  `stand` DECIMAL(11,2) NOT NULL
=======
  `stand` int(11) NOT NULL
>>>>>>> 0d199971b1f103fc59618242142346ec8eda88c8
>>>>>>> 430ba5e0fe850dc416787ca7e9b624033ffb4a73
>>>>>>> 707f1cec545e68b25acb0ecdc839beb79b058b06
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `standen`
--
ALTER TABLE `standen`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `standen`
--
ALTER TABLE `standen`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
<<<<<<< HEAD
  
=======
<<<<<<< HEAD
  
=======
<<<<<<< HEAD
  
=======
>>>>>>> 0d199971b1f103fc59618242142346ec8eda88c8
>>>>>>> 430ba5e0fe850dc416787ca7e9b624033ffb4a73
>>>>>>> 707f1cec545e68b25acb0ecdc839beb79b058b06
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
