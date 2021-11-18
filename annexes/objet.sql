-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : jeu. 18 nov. 2021 à 19:28
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
  `dragDropEnd` varchar(20) DEFAULT NULL,
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
('carotte', 48.8514, 2.37613, 2, 'images/carotte.png', 1, 0, 0, 1, '48.7621$2.04996', 'Je suis une carotte', 80, 100, NULL, NULL),
('mirabelle', 48.8586, 2.38499, 3, 'images/mirabelle.jpg', 2, NULL, NULL, NULL, NULL, 'Je suis une mirabelle', NULL, NULL, NULL, NULL),
('COINDET', 48.8411, 2.58801, 1, 'images/coindet.jpg', 3, 0, NULL, 0, NULL, 'Hé Amaury, il est 9h30 et y\'a personne dans mon cours$Va falloir aller les chercher...tu peux t\'en occuper ? Je dois être à l\'école à 11h30 pour acheter mes billets du Hellfest.$Regarde Amaury, on dirait qu\'il y a Tristan devant le portail de sécurité de l\'ENSG, il devrait pouvoir t\'aider dans ta quête.\r\n', 80, 80, NULL, NULL),
('ZARZELLI', 48.8413, 2.58689, 1, 'images/zarzelli.jpg', 4, 0, NULL, 0, NULL, 'Merde, je pensais qu\'ils étaient tous avec toi, j\'ai personne non plus.$J\'ai qu\'ça à faire de toute façon. Je ne sais juste pas par où commencer.$Salut Tristan, il n\'y a pas cours ce matin, personne n\'est venu. Tu pourrais m\'aider à trouver tout le monde ?$Ma parole, on ne peut pas y aller à pied! Je vais essayer de voir avec Jeanine si elle peut nous preter le mignibus : elle travaille dans l\'ENSG. J\'arrive!\r\n', 72, 80, NULL, NULL),
('FILLON', 48.8414, 2.58623, 1, 'images/fillon.jpg', 5, NULL, NULL, NULL, NULL, 'Oui, bien sûr ! On peut commencer par aller chez Amélie, elle habite à Voisins-le-bretonneux', 80, 80, NULL, NULL),
('MAGINOT', 48.7621, 2.04996, 1, 'images/maginot.jpg', 6, NULL, 1, 0, NULL, '\r\nJe suis désolé, mais je ne bourgerai pas sans petit déjeuner! J\'ai laissé une carotte au château de Versailles, si on me la ramène, je viens avec vous!$Mmmh, un régal! Double-click moi pour m\'emmener.', 70, 92, 'O', '1'),
('FOUGEROUSE', 45.6078, 4.06514, 1, 'images/fougerouse.jpg', 7, NULL, 1, NULL, NULL, 'Coucou, je viens seulement si vous répondez à ma question: Que signifie \"babet\"?$Bravo! La brise est trop forte ici, changeons de mont! Allons à Montaigu, un lapin s\'y cache. Double-click moi pour m\'emmener.\r\n', 70, 92, 'C', 'pomme de pin'),
('MAYTIE', 46.9723, -1.31493, 1, 'images/maytie.jpg', 8, NULL, 1, NULL, NULL, 'Bonjour, il faut que tu m\'aides! Quelle est la meilleure recette du coin?$MMMM, ca à l\'air vraiment très bon!  En route vers l\'Est, Antoine, le beau gosse, nous attend! Comme pour les autres, pour m\'emmener doucle-click moi dessus.\r\n\r\n\r\n', 128, 72, 'C', 'prefou'),
('CORNU', 48.4479, 6.6173, 1, 'images/cornu.jpg', 9, NULL, 1, NULL, NULL, 'Enfin ! Ca fait 1h que je vous attends! Je ne monte que si vous répondez à ma question: Tu préfères ton père ou ta mère?$Yep ! On peut aller chez Kevin, c\'est pas très très loin !', 70, 92, 'C', NULL),
('BEAUPUY', -21.3271, 55.4392, 1, 'images/beaupuy.jpg', 10, NULL, 1, NULL, NULL, '\r\nOh dingue, vous êtes venus! Petite question avant de repartir, que veut dire \'mi aim a ou\'?$Bien joué, on peut passer prendre Léa, elle habite sur le chemin pour rentrer! Emmène-moi, doucle-click moi!', 70, 92, 'C', 'je t aime'),
('LETASSEY', 49.8568, 3.28573, 1, 'images/letassey.jpeg', 11, NULL, 1, NULL, NULL, 'Salut, sauras-tu répondre à ma question: Que veut dire \"Avec toute cette drach, in a pas fini d\'marcher dins l\'berdoule\"?$Bravo, allons cherchez Vincent et Félix dans les montagnes ! Commençons par Vincent qui habite à Thonon-les-Bains !', 72, 96, 'C', 'b'),
('HEAU', 46.4027, 6.50858, 1, 'images/heau.jpg', 12, NULL, 1, NULL, NULL, '\r\n\'Oh! Bienvenu dans cette belle région! Connaissez-vous le grand lac de celle-ci?$Bien joué, c\'est le Lac Léman, situé entre la France et la Suisse. Passons chez Félix, il n\'est pas très loin ! Dircetion les Alpes des plaines chez Felix ! Il habite près de Chambéry.', 70, 92, 'C', 'lac leman'),
('MAMANBAL', 45.7134, 6.08851, 1, 'images/mamanBal.jpg', 13, NULL, 0, NULL, NULL, 'Quoi? Félix n\'est pas à l\'école? Il n\'est pas rentré hier soir, il faisait soirée chez Baptiste, le vilain!', 88, 102, NULL, NULL),
('BAL', 48.8393, 2.40152, 1, 'images/bal.jpeg', 15, NULL, 1, NULL, NULL, NULL, 75, 79, NULL, NULL),
('RIVIERE', 48.8393, 2.40156, 1, 'images/riviere.jpg', 16, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('FLEURY', 45.7682, 4.85477, 1, 'images/fleury.jpg', 14, 0, 1, 0, NULL, 'Je ne peux pas partir, j\'ai perdu mes clés au parc de la Tête d\'Or, peux-tu me les ramener ?$Merci, on peut y aller je suis prête! Il manque Baptiste, il habite dans le 12ème arrondissement de Paris !\r\n\r\n', 60, 120, 'O', '24'),
('BARAN', 49.012, 6.23956, 1, 'images/baran.jpg', 17, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('PAPADUTREMBLE', 46.725, 4.48894, 1, 'images/papaDutremble.jpg', 18, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('DUTREMBLE', 59.954, 10.7314, 1, 'images/dutremble.jpg', 19, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('BLAREL', 50.7459, 2.16434, 1, 'images/blarel.jpg', 20, NULL, NULL, NULL, NULL, NULL, 70, 92, NULL, NULL),
('JEANINE', 48.8413, 2.58773, 10, 'images/jeanine.JPG', 21, NULL, NULL, NULL, NULL, 'Il n\'a presque plus de combustign ! Je vous le passe mais j\'espère que vous n\'allez pas faire le tour du monde.', 69, 69, 'C', 'bonjour'),
('ZARZELLI2', 48.8413, 2.58753, 10, 'images/zarzelli.jpg', 22, NULL, NULL, NULL, NULL, 'Bonjour Jeanine ! Il nous faut le mignibus en urgence !$Allez, monte dans le master, c\'est parti pour Voisins-le-bretonneux!', 72, 80, NULL, NULL),
('MIGNIBUS', 48.841, 2.58652, 15, 'images/bus/bus1.png', 23, NULL, NULL, NULL, NULL, '\r\nJe suis M\'IGN\'ibus! Je suis Mini et IGN, je suis un bus tiptop!', 168, 35, 'O', '21'),
('cle', 45.7775, 4.85512, 10, 'images/cle.png', 24, 1, 0, 0, NULL, '\r\nDouble-click moi dessus et je rentrerai dans le trousseau.\r\n', 60, 55, NULL, NULL);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=142;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
