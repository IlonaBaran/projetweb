-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : jeu. 25 nov. 2021 à 10:24
-- Version du serveur :  5.7.31
-- Version de PHP : 7.3.21

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
-- Structure de la table `discussion`
--

DROP TABLE IF EXISTS `discussion`;
CREATE TABLE IF NOT EXISTS `discussion` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `dialogueBus` varchar(1000) NOT NULL,
  `imageBus` varchar(1000) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `discussion`
--

INSERT INTO `discussion` (`id`, `dialogueBus`, `imageBus`) VALUES
(1, 'C\'est beau comme village, tu ne trouves pas Tristan ?$Non, pas vraiment, je prefère la Guyane.$Je vais voir Amelie pour qu\'elle vienne avec nous.', 'images/zarzelli.jpg$images/fillon.jpg$images/zarzelli.jpg'),
(2, 'Wow, tu es trop fort, on va vite pouvoir faire du WEB$C\'est génial ! J\'ai si envie d\'avoir de nouvelles connaissances', 'images/zarzelli.jpg$images/maginot.jpg'),
(3, 'Haha, il s\'est trompé. C\'est pas comme ça qu\'on va récupérer tout le monde$Mince, nous qui avions si envie de faire du WEB', 'images/zarzelli.jpg$images/fougerouse.jpg'),
(4, 'C\'est pas du tout une recette du coin ca !', 'images/fougerouse.jpg'),
(5, 'miaou miaou$Je crois qu\'on a perdu Amaury$miaou miou', 'images/zarzelli.jpg$images/maginot.jpg$images/zarzelli.jpg'),
(6, 'J\'espère qu\'on verra Jean Luc !$Mais c\'est qui ce Jean-Luc ?$Mais voyons ! C\'est le père de Félix !', 'images/beaupuy.jpg$images/zarzelli.jpg$images/beaupuy.jpg'),
(7, 'Il faut lui donner un indice, non ?$Non, la question est beaucoup trop facile !', 'images/maytie.jpg$images/cornu.jpg'),
(8, 'Ha nous voila enfin chez Félix ! Je ne le vois pas, je vais aller voir sa mère pour lui demander où est Félix.', 'images/heau.jpg'),
(9, 'Baptiste habite loin! Il vaut mieux passer chez Mélodie avant, ca fera moins de détour. Elle habite près de Lyon!', 'images/heau.jpg'),
(10, 'C\'est pas grave, on va aller le chcerche!$Terrible, on va à Oslo! Un avant gout de mon Erasmus !$J\'espère qu\'il y aura de la neige, et que le bus sera coincé pour repartir!', 'images/zarzelli.jpg$images/bal.jpeg$images/baran.jpg'),
(11, 'On est obligé d\'aller la chercher ?$D\'ailleurs, on prononce \"mève\" ou \"maève\" ?', 'images/bal.jpeg$images/zarzelli.jpg'),
(12, 'Il faut lui donner un indice, non ?$Non, c\'est terrible le mignibus ensemble, on pourrait se croire dans le bus du wei !', 'images/fleury.jpg$images/bal.jpeg'),
(13, 'On rentre enfin ! $On rentre enfin ! $On rentre enfin ! ', 'images/beaupuy.jpg$images/riviere.jpg$images/fougerouse.jpg'),
(14, '', ''),
(15, '', ''),
(16, '', ''),
(17, '', ''),
(18, '', ''),
(19, '', ''),
(20, '', '');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
