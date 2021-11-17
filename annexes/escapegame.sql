-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : mer. 17 nov. 2021 à 00:27
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
  `id` int(11) NOT NULL,
  `eventDblClick` tinyint(1) DEFAULT NULL,
  `dblClickBus` tinyint(1) DEFAULT NULL,
  `eventDragDrop` tinyint(1) DEFAULT NULL,
  `dragDropEnd` tinyint(1) DEFAULT NULL,
  `parole` varchar(1000) DEFAULT NULL,
  `iconeSizeLarg` int(11) DEFAULT NULL,
  `iconeSizeLong` int(11) DEFAULT NULL,
  `bloque` varchar(1) DEFAULT NULL,
  `bloquePar` varchar(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `objet`
--

INSERT INTO `objet` (`objet`, `latitude`, `longitude`, `zoommini`, `icone`, `id`, `eventDblClick`, `dblClickBus`, `eventDragDrop`, `dragDropEnd`, `parole`, `iconeSizeLarg`, `iconeSizeLong`, `bloque`, `bloquePar`) VALUES
('carotte', 48.8514, 2.37613, 2, 'images/carotte.jpg', 1, 1, 0, 1, NULL, 'Je suis une carotte', 76, 48, NULL, NULL),
('mirabelle', 48.8586, 2.38499, 3, 'images/mirabelle.jpg', 2, NULL, NULL, NULL, NULL, 'Je suis une mirabelle', NULL, NULL, NULL, NULL),
('COINDET', 48.8411, 2.58801, 1, 'images/coindet.jpg', 3, 0, NULL, 0, NULL, 'Hé Amaury, il est 9h30 et y\'a personne dans mon cours$Va falloir aller les chercher...tu peux t\'en occuper ? Je dois être à l\'école à 11h30 pour acheter mes billets du Hellfest.$Regarde Amaury, on dirait qu\'il y a Tristan devant le portail de sécurité de l\'ENSG, il devrait pouvoir t\'aider dans ta quête.\r\n', 80, 80, NULL, NULL),
('ZARZELLI', 48.8413, 2.58689, 1, 'images/zarzelli.jpg', 4, 0, NULL, 0, NULL, 'Merde, je pensais qu\'ils étaient tous avec toi, j\'ai personne non plus.$J\'ai qu\'ça à faire de toute façon. Je ne sais juste pas par où commencer.$Salut Tristan, il n\'y a pas cours ce matin, personne n\'est venu. Tu pourrais m\'aider à trouver tout le monde ?$Ma parole, on ne peut pas y aller à pied! Je vais essayer de voir avec Jeanine si elle peut nous preter le mignibus : elle travaille dans l\'ENSG. J\'arrive!\r\n', 72, 80, NULL, NULL),
('FILLON', 48.8414, 2.58623, 1, 'images/fillon.jpg', 5, NULL, NULL, NULL, NULL, 'Oui, bien sûr ! On peut commencer par aller chez Amélie, elle habite à Voisins-le-bretonneux', 80, 80, NULL, NULL),
('MAGINOT', 48.7621, 2.04996, 1, 'images/maginot.jpg', 6, NULL, NULL, NULL, NULL, NULL, 42, 92, NULL, NULL),
('FOUGEROUSE', 45.6078, 4.06514, 1, 'images/fougerouse.jpg', 7, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('MAYTIE', 46.9723, -1.31493, 1, 'images/maytie.jpg', 8, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('CORNU', 48.4479, 6.6173, 1, 'images/cornu.jpg', 9, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('BEAUPUY', -21.3271, 55.4392, 1, 'images/beaupuy.jpg', 10, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('LETASSEY', 49.8568, 3.28573, 1, 'images/letassey.jpeg', 11, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('HEAU', 46.4027, 6.50858, 1, 'images/heau.jpg', 12, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('MAMANBAL', 45.7134, 6.08851, 1, 'images/mamanBal.jpg', 13, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('BAL', 48.8393, 2.40152, 1, 'images/bal.jpeg', 14, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('RIVIERE', 48.8393, 2.40156, 1, 'images/riviere.jpg', 15, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('FLEURY', 45.7682, 4.85477, 1, 'images/fleury.jpg', 16, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('BARAN', 49.012, 6.23956, 1, 'images/baran.jpg', 17, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('PAPADUTREMBLE', 46.725, 4.48894, 1, 'images/papaDutremble.jpg', 18, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('DUTREMBLE', 59.954, 10.7314, 1, 'images/dutremble.jpg', 19, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('BLAREL', 50.7459, 2.16434, 1, 'images/blarel.jpg', 20, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('JEANINE', 48.8413, 2.58773, 10, 'images/jeanine.JPG', 21, NULL, NULL, NULL, NULL, 'Il n\'a presque plus de combustign ! Je vous le passe mais j\'espère que vous n\'allez pas faire le tour du monde.', 69, 69, 'C', 'bonjour'),
('ZARZELLI2', 48.8413, 2.58753, 10, 'images/zarzelli.jpg', 22, NULL, NULL, NULL, NULL, 'Bonjour Jeanine ! Il nous faut le mignibus en urgence !$Allez, monte dans le master, c\'est parti pour Voisins-le-bretonneux!', 72, 80, NULL, NULL),
('MIGNIBUS', 48.841, 2.58652, 15, 'images/bus/bus1.png', 23, NULL, NULL, NULL, NULL, '\r\nJe suis M\'IGN\'ibus! Je suis Mini et IGN, je suis un bus tiptop!', 168, 35, 'O', '21');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
