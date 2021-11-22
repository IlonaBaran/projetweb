-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : lun. 22 nov. 2021 à 10:05
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
  `bloquePar` varchar(40) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `objet`
--

INSERT INTO `objet` (`objet`, `latitude`, `longitude`, `zoommini`, `icone`, `id`, `eventDblClick`, `dblClickBus`, `eventDragDrop`, `dragDropEnd`, `parole`, `iconeSizeLarg`, `iconeSizeLong`, `bloque`, `bloquePar`) VALUES
('carotteA', 48.805, 2.11988, 15, 'images/carotte.png', 1, 0, 0, 1, '48.7621$2.04996', 'Je suis une carotte', 80, 100, NULL, NULL),
('myrtille', 49.031, 5.98465, 15, 'images/myrtille.png', 6, 0, 0, 1, '\r\n49.012$6.23956', 'Je suis le dessert d\'Ilone', 95, 60, NULL, NULL),
('COINDET', 48.8411, 2.58801, 1, 'images/coindet.jpg', 11, 0, NULL, 0, NULL, 'Hé Amaury, il est 9h30 et y\'a personne dans mon cours$Va falloir aller les chercher...tu peux t\'en occuper ? Je dois être à l\'école à 11h30 pour acheter mes billets du Hellfest.$Regarde Amaury, on dirait qu\'il y a Tristan devant le portail de sécurité de l\'ENSG, il devrait pouvoir t\'aider dans ta quête.\r\n', 80, 80, NULL, NULL),
('ZARZELLI', 48.8413, 2.58689, 1, 'images/zarzelli.jpg', 12, 0, NULL, 0, NULL, 'Merde, je pensais qu\'ils étaient tous avec toi, j\'ai personne non plus.$J\'ai qu\'ça à faire de toute façon. Je ne sais juste pas par où commencer.$Salut Tristan, il n\'y a pas cours ce matin, personne n\'est venu. Tu pourrais m\'aider à trouver tout le monde ?$Ma parole, on ne peut pas y aller à pied! Je vais essayer de voir avec Jeanine si elle peut nous preter le mignibus : elle travaille dans l\'ENSG. J\'arrive!\r\n', 72, 80, NULL, NULL),
('FILLON', 48.8414, 2.58623, 1, 'images/fillon.jpg', 14, NULL, NULL, NULL, NULL, 'Oui, bien sûr ! On peut commencer par aller chez Amélie, elle habite à Voisins-le-bretonneux', 80, 80, NULL, NULL),
('MAGINOT', 48.7621, 2.04996, 1, 'images/maginot.jpg', 17, NULL, 1, 0, NULL, '\r\nJe suis désolé, mais je ne bourgerai pas sans petit déjeuner! J\'ai laissé une carotte au château de Versailles, si on me la ramène, je viens avec vous!$Mmmh, un régal! Double-click moi pour m\'emmener.', 70, 92, 'O', '1'),
('FOUGEROUSE', 45.6078, 4.06514, 1, 'images/fougerouse.jpg', 18, NULL, 1, NULL, NULL, 'Coucou, je viens seulement si vous répondez à ma question: Que signifie \"babet\"?$Bravo! La brise est trop forte ici, changeons de mont! Allons à Montaigu, un lapin s\'y cache. Double-click moi pour m\'emmener.\r\n', 70, 92, 'C', 'pomme de pin'),
('MAYTIE', 46.9723, -1.31493, 1, 'images/maytie.jpg', 19, NULL, 1, NULL, NULL, 'Bonjour, il faut que tu m\'aides! Quelle est la meilleure recette du coin?$MMMM, ca à l\'air vraiment très bon!  En route vers l\'Est, Antoine, le beau gosse, nous attend! Comme pour les autres, pour m\'emmener doucle-click moi dessus.\r\n\r\n\r\n', 128, 72, 'C', 'prefou'),
('CORNU', 48.4479, 6.6173, 1, 'images/cornu.jpg', 20, NULL, 1, NULL, NULL, 'Enfin ! Ca fait 1h que je vous attends! Je ne monte que si vous répondez à ma question: Tu préfères ton père ou ta mère?$Yep ! On peut aller chez Kevin, c\'est pas très très loin !', 70, 92, 'C', NULL),
('BEAUPUY', -21.3271, 55.4392, 1, 'images/beaupuy.jpg', 21, NULL, 1, NULL, NULL, '\r\nOh dingue, vous êtes venus! Petite question avant de repartir, que veut dire \'mi aim a ou\'?$Bien joué, on peut passer prendre Léa, elle habite sur le chemin pour rentrer! Emmène-moi, doucle-click moi!', 70, 92, 'C', 'je t aime'),
('LETASSEY', 49.8568, 3.28573, 1, 'images/letassey.jpeg', 22, NULL, 1, NULL, NULL, 'Salut, sauras-tu répondre à ma question: Que veut dire \"Avec toute cette drach, in a pas fini d\'marcher dins l\'berdoule\"?$Bravo, allons cherchez Vincent et Félix dans les montagnes ! Commençons par Vincent qui habite à Thonon-les-Bains !', 72, 96, 'C', 'b'),
('HEAU', 46.4027, 6.50858, 1, 'images/heau.jpg', 23, NULL, 1, NULL, NULL, '\r\n\'Oh! Bienvenu dans cette belle région! Connaissez-vous le grand lac de celle-ci?$Bien joué, c\'est le Lac Léman, situé entre la France et la Suisse. Passons chez Félix, il n\'est pas très loin ! Dircetion les Alpes des plaines chez Felix ! Il habite près de Chambéry.', 70, 92, 'C', 'lac leman'),
('MAMANBAL', 45.7134, 6.08851, 1, 'images/mamanBal.jpg', 24, NULL, 0, NULL, NULL, 'Quoi? Félix n\'est pas à l\'école? Il n\'est pas rentré hier soir, il faisait soirée chez Baptiste, le vilain!', 88, 102, NULL, NULL),
('BAL', 48.8514, 2.37586, 1, 'images/bal.jpeg', 27, 0, 1, 0, NULL, 'Oh non, vous nous réveillez!$Mmmh quelle bonne banane! Merci, on peut y aller! Ilona n\'est pas avec vous ? Il faut aller au Sud de Metz pour la trouver !\r\n', 75, 79, 'O', '0'),
('RIVIERE', 48.8509, 2.37775, 1, 'images/riviere.jpg', 26, 0, 1, 0, NULL, '\r\nOula ! Doucement ! Nous n\'avons pas petit-déjeuné, pouvez-vous me ramener une carotte (#BDEdeMERDE) et une banane pour mon collègue?. Il y a un champ de carotte/banane non loin de la Bastille.$Mmmh trop bon, merci l\'ami! En route, vers l\'Est chez Ilona!', 56, 100, 'O', '2'),
('FLEURY', 45.7682, 4.85477, 1, 'images/fleury.jpg', 25, 0, 1, 0, NULL, 'Je ne peux pas partir, j\'ai perdu mes clés au parc de la Tête d\'Or, peux-tu me les ramener ?$Merci, on peut y aller je suis prête! Il manque Baptiste, il habite dans le 12ème arrondissement de Paris !\r\n\r\n', 50, 100, 'O', '3'),
('BARAN', 49.012, 6.23956, 1, 'images/baran.jpg', 28, 0, 1, 0, NULL, 'Olala je suis grave en retard, attendez je mange ma purée de carotte et on y va! Mince, il me manque une mirabelle pour le dessert, il y en a dans la forêt juste à côté!$Ouf, on peut partir maintenant qu\'on a le ventre plein!\r\n', 56, 100, 'O', '6'),
('PAPADUTREMBLE', 46.725, 4.48894, 1, 'images/papaDutremble.jpg', 29, NULL, 0, NULL, NULL, 'Vous le ratez de peu, il vient de partir pour Oslo!\r\n', 70, 45, NULL, NULL),
('DUTREMBLE', 59.954, 10.7314, 1, 'images/dutremble.jpg', 30, 0, 1, 0, NULL, '\r\nOh mais que faites-vous ici? Je pars avec vous si vous devinez ce qu\'est un brunost ?$Bravo, c\'est un fromage norvégien à pâte brune et au goût caramélisé.', 60, 120, 'C', 'fromage'),
('BLAREL', 50.7459, 2.16434, 1, 'images/blarel.jpg', 31, NULL, 1, NULL, NULL, 'Salut! Oh trop cool ce mign\'ibus! Allez je pars avec vous!$Oh non! CATASTROPHE, j\'ai perdu mon masque, pouvez-vous m\'aider (#COVIDONRESPECTE).\r\n', 70, 92, 'O', '5'),
('JEANINE', 48.8413, 2.58773, 10, 'images/jeanine.JPG', 15, NULL, NULL, NULL, NULL, 'Il n\'a presque plus de combustign ! Je vous le passe mais j\'espère que vous n\'allez pas faire le tour du monde.', 69, 69, 'C', 'bonjour'),
('ZARZELLI2', 48.8413, 2.58753, 10, 'images/zarzelli.jpg', 13, NULL, NULL, NULL, NULL, 'Bonjour Jeanine ! Il nous faut le mignibus en urgence !$Allez, monte dans le master, c\'est parti pour Voisins-le-bretonneux!', 72, 80, NULL, NULL),
('MIGNIBUS', 48.841, 2.58652, 15, 'images/bus/bus1.png', 16, NULL, NULL, NULL, NULL, '\r\nJe suis M\'IGN\'ibus! Je suis Mini et IGN, je suis un bus tiptop!', 168, 35, 'O', '21'),
('cle', 45.7775, 4.85512, 12, 'images/cle.png', 3, 0, 0, 1, '\r\n45.7682$4.85477', '\r\nDouble-click moi dessus et je rentrerai dans le trousseau.\r\n', 60, 55, NULL, NULL),
('carotteB', 48.8567, 2.37736, 17, 'images/carotte.png', 2, 0, 0, 1, '48.8509$2.37775', 'Je suis la carotte de Baptiste', 80, 100, NULL, NULL),
('bananeF', 48.8566, 2.38224, 17, 'images/banane.png', 0, 0, 0, 1, '48.8513$2.37585', 'Je suis une banane', 95, 65, NULL, NULL),
('BLAREL2', 50.7459, 2.16434, 10, 'images/blarelMasque.png', 32, 0, 1, 0, NULL, 'Oh merci beaucoup, ça y est je suis paré à vous suivre! Partons vite, notre cassis nous attend!', 70, 92, NULL, NULL),
('masque', 48.8644, 2.34416, 10, 'images/masque.png', 5, 0, 0, 1, '50.7459$2.16434', 'Je suis le masque de Maeve', 120, 95, NULL, NULL),
('LOSCO', 48.4471, -1.99119, 10, 'images/losco.jpg', 33, 0, 1, NULL, NULL, '\r\nYo la mif, t\'aurais pas vu mon kader (je crois que je l\'ai forget à l\'intramuros de Saint-Malo)?$Oh tu gères la fougère, je pars avec vous, ambiance à balle dans le bus! Direction corsica, Stella Maria nous attend.', 79, 109, 'O', '4'),
('kader', 48.6492, -2.02623, 15, 'images/kader.png', 4, 0, 0, 1, '\r\n48.4471$-1.99119', 'Je suis le kader d\'Axel', 60, 90, NULL, NULL),
('STEFANINI', 42.3069, 9.29097, 10, 'images/stefanini.png', 34, NULL, 1, NULL, NULL, '\r\n\r\nOh l\'ENSG en Corse, bienvenu! Je vous rejoins si vous devinez cette phrase corse: \"A sera lione, a mane cuglione\".$Oui, le soir lion, la matin couillon, ça part! Partons vite, Victor nous attend!  ', 70, 92, 'C', 'l'),
('COINDET2', 48.8414, 2.5883, 17, 'images/coindet.jpg', 35, NULL, NULL, NULL, NULL, 'Wouah, bravo! Merci à vous d\'être venu à ce super cours de WEB! Oh, mais il manque quelqu\'un!$Youpi, on va commencer le WEB! Alors, parlons projet... ça va fetcher sa mère! Vous avez 1 mois, fini la fête, bonjour les prises de tête!\r\n', 80, 80, NULL, NULL),
('AHR', 48.8417, 2.58882, 10, 'images/ahr.jpg', 36, NULL, NULL, NULL, NULL, 'Bah moi! Je suis là les amies.s, on peut commencer!', 70, 92, NULL, NULL),
('BUS', 48.8417, 2.58766, 10, 'images/bus/bus1_14.png', 37, NULL, NULL, NULL, NULL, 'Bah qui?$Ahahah', 245, 65, NULL, NULL),
('Coco', 48.8412, 2.58739, 10, 'images/coco.png', 9, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('Momo', 48.8412, 2.58739, 10, 'images/momo.png', 7, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('Nono', 48.8412, 2.58739, 10, 'images/nono.png', 8, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('Autre', 48.8412, 2.58739, 10, 'images/autre.png', 10, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=435;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
