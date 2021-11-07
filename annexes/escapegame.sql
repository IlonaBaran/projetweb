-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : sam. 06 nov. 2021 à 12:10
-- Version du serveur :  5.7.24
-- Version de PHP : 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `escapegame`
--

-- --------------------------------------------------------

--
-- Structure de la table `joueur`
--

CREATE TABLE `joueur` (
  `position` int(11) NOT NULL,
  `pseudo` varchar(15) NOT NULL,
  `temps` time NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `joueur`
--

INSERT INTO `joueur` (`position`, `pseudo`, `temps`) VALUES
(1, 'ilona', '00:05:18'),
(2, 'maeve', '00:04:54');

-- --------------------------------------------------------

--
-- Structure de la table `objet`
--

CREATE TABLE `objet` (
  `objet` varchar(20) NOT NULL,
  `latitude` float NOT NULL,
  `longitude` float NOT NULL,
  `zoommini` int(11) NOT NULL,
  `icone` varchar(150) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `objet`
--

INSERT INTO `objet` (`objet`, `latitude`, `longitude`, `zoommini`, `icone`, `id`) VALUES
('carotte', 48.8886, 2.34844, 2, 'images/carotte.jpg', 1),
('mirabelle', 48.8586, 2.38499, 3, 'images/mirabelle.jpg', 2),
('COINDET', 48.8411, 2.58801, 1, 'images/coindet.jpg', 3),
('ZARZELLI', 48.8413, 2.58689, 1, 'images/zarzelli.jpg', 4),
('FILLON', 48.8406, 2.58723, 1, 'images/fillon.jpg', 5),
('MAGINOT', 48.7621, 2.04996, 1, 'images/maginot.jpg', 6),
('FOUGEROUSE', 45.6078, 4.06514, 1, 'images/fougerouse.jpg', 7),
('MAYTIE', 46.9723, -1.31493, 1, 'images/maytie.jpg', 8),
('CORNU', 48.4479, 6.6173, 1, 'images/cornu.jpg', 9),
('BEAUPUY', -21.3271, 55.4392, 1, 'images/beaupuy.jpg', 10),
('LETASSEY', 49.8568, 3.28573, 1, 'images/letassey.jpeg', 11),
('HEAU', 46.4027, 6.50858, 1, 'images/heau.jpg', 12),
('MAMANBAL', 45.7134, 6.08851, 1, 'images/mamanBal.jpg', 13),
('BAL', 48.8393, 2.40152, 1, 'images/bal.jpeg', 14),
('RIVIERE', 48.8393, 2.40156, 1, 'images/riviere.jpg', 15),
('FLEURY', 45.7682, 4.85477, 1, 'images/fleury.jpg', 16),
('BARAN', 48.9576, 6.14312, 1, 'images/baran.jpg', 17),
('PAPADUTREMBLE', 46.725, 4.48894, 1, 'images/papaDutremble.jpg', 18),
('DUTREMBLE', 59.954, 10.7314, 1, 'images/dutremble.jpg', 19),
('BLAREL', 50.7459, 2.16434, 1, 'images/blarel.jpg', 20);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `objet`
--
ALTER TABLE `objet`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `objet`
--
ALTER TABLE `objet`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;