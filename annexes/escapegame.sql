-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : Dim 28 nov. 2021 à 22:46
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
(1, 'C\'est beau comme village, tu ne trouves pas Tristan ?$Non, pas vraiment, je prefère la Guyane.$Je vais voir Amelie pour qu\'elle vienne avec nous.', 'images/personnes/zarzelli.jpg$images/personnes/fillon.jpg$images/personnes/zarzelli.jpg'),
(2, 'Wow, tu es trop fort, on va vite pouvoir faire du WEB$C\'est génial ! J\'ai si envie d\'avoir de nouvelles connaissances', 'images/personnes/zarzelli.jpg$images/personnes/maginot.jpg'),
(3, 'Haha, il s\'est trompé. Ce n\'est pas comme ça qu\'on va récupérer tout le monde$Mince, nous qui avions si envie de faire du WEB', 'images/personnes/zarzelli.jpg$images/personnes/fougerouse.jpg'),
(4, 'C\'est pas du tout une recette du coin ca !', 'images/personnes/fougerouse.jpg'),
(5, 'miaou miaou$Je crois qu\'on a perdu Amaury$Oui, je crois que c\'est le trajet qui m\'a fatigué...', 'images/personnes/zarzelli.jpg$images/personnes/maginot.jpg$images/personnes/zarzelli.jpg'),
(6, 'J\'espère qu\'on verra Jean Luc !$Mais c\'est qui ce Jean-Luc ?$Mais voyons ! C\'est le père de Félix !', 'images/personnes/beaupuy.jpg$images/personnes/zarzelli.jpg$images/personnes/beaupuy.jpg'),
(7, 'Il faut lui donner un indice, non ?$Non, la question est beaucoup trop facile !', 'images/personnes/maytie.jpg$images/personnes/cornu.jpg'),
(8, 'Ha nous voila enfin chez Félix ! Je ne le vois pas, il faut que tu ailles voir sa mère pour lui demander où il est.', 'images/personnes/heau.jpg'),
(9, 'Baptiste habite loin! Il vaut mieux passer chez Mélodie avant, ca fera moins de détour. Elle habite près de Lyon!', 'images/personnes/heau.jpg'),
(10, 'C\'est pas grave, on va aller le chercher!$Terrible, on va à Oslo! Un avant gout de mon Erasmus !$J\'espère qu\'il y aura de la neige, et que le bus sera coincé pour repartir!', 'images/personnes/zarzelli.jpg$images/personnes/bal.jpeg$images/personnes/baran.jpg'),
(11, 'On est obligé d\'aller la chercher ?$D\'ailleurs, on prononce \"mève\" ou \"maève\" ?', 'images/personnes/bal.jpeg$images/personnes/zarzelli.jpg'),
(12, 'Il faut lui donner un indice, non ?$Non, c\'est terrible le mignibus ensemble, on pourrait se croire dans le bus du wei !', 'images/personnes/cornu.jpg$images/personnes/maytie.jpg'),
(13, 'On rentre enfin ! $On rentre enfin ! $On rentre enfin ! ', 'images/personnes/beaupuy.jpg$images/personnes/riviere.jpg$images/personnes/fougerouse.jpg'),
(14, 'Soit un peu plus poli voyons !', 'images/personnes/zarzelli.jpg'),
(15, 'Mais c\'est où ça Montaigu ?$C\'est entre Nantes et la Roche-Sur-Yon!', 'images/personnes/zarzelli.jpg$images/personnes/fougerouse.jpg'),
(16, 'Bien joué, enfin!', 'images/personnes/zarzelli.jpg'),
(17, 'Eh, j\'ai pas eu le temps de manger! C\'est pas juste!', 'images/personnes/bal.jpeg'),
(18, '', ''),
(19, '', ''),
(20, '', '');

-- --------------------------------------------------------

--
-- Structure de la table `joueur`
--

DROP TABLE IF EXISTS `joueur`;
CREATE TABLE IF NOT EXISTS `joueur` (
  `pseudo` varchar(15) DEFAULT NULL,
  `temps` time DEFAULT NULL,
  `debutchrono` time DEFAULT NULL,
  `finchrono` time DEFAULT NULL,
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  UNIQUE KEY `id` (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=178 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `joueur`
--

INSERT INTO `joueur` (`pseudo`, `temps`, `debutchrono`, `finchrono`, `id`) VALUES
('Ilona', NULL, '21:57:49', '21:57:49', 167),
('Ilona', NULL, '21:56:06', '21:56:06', 166),
('esghstj', '00:00:02', '21:28:47', '21:28:49', 4),
('trqj', '00:00:03', '21:41:42', '21:41:45', 5),
('Amaury', NULL, '22:39:18', '22:39:18', 177),
('Amaury', NULL, '22:30:16', '22:30:16', 176),
('victor', NULL, '22:17:03', '22:17:03', 175),
('Maeve', '00:29:28', '21:23:05', '21:52:33', 165),
('victor', NULL, '22:16:11', '22:16:11', 174),
('victor', NULL, '22:15:46', '22:15:46', 173),
('victor', NULL, '22:12:12', '22:12:12', 172),
('victor', NULL, '22:08:16', '22:08:16', 171),
('coindet', NULL, '22:05:25', '22:05:25', 170),
('Ilona2', '00:03:20', '21:59:41', '22:03:01', 169),
('Ilona', NULL, '21:58:12', '21:58:12', 168);

-- --------------------------------------------------------

--
-- Structure de la table `objet`
--

DROP TABLE IF EXISTS `objet`;
CREATE TABLE IF NOT EXISTS `objet` (
  `objet` varchar(20) NOT NULL,
  `latitude` float NOT NULL,
  `longitude` float NOT NULL,
  `zoommini` int(11) NOT NULL,
  `icone` varchar(150) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `eventDblClick` tinyint(1) DEFAULT NULL,
  `dblClickBus` tinyint(1) DEFAULT NULL,
  `eventDragDrop` tinyint(1) DEFAULT NULL,
  `dragDropEnd` varchar(20) DEFAULT NULL,
  `parole` varchar(1000) DEFAULT NULL,
  `iconeSizeLarg` int(11) DEFAULT NULL,
  `iconeSizeLong` int(11) DEFAULT NULL,
  `bloque` varchar(1) DEFAULT NULL,
  `bloquePar` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=436 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `objet`
--

INSERT INTO `objet` (`objet`, `latitude`, `longitude`, `zoommini`, `icone`, `id`, `eventDblClick`, `dblClickBus`, `eventDragDrop`, `dragDropEnd`, `parole`, `iconeSizeLarg`, `iconeSizeLong`, `bloque`, `bloquePar`) VALUES
('carotteA', 48.805, 2.11988, 15, 'images/objet/carotte.png', 1, 0, 0, 1, '48.7621$2.04996', 'Je suis une carotte', 80, 100, NULL, NULL),
('myrtille', 49.031, 5.98465, 10, 'images/objet/myrtille.png', 6, 0, 0, 1, '\r\n49.012$6.23956', 'Je suis le dessert d\'Ilone', 95, 60, NULL, NULL),
('COINDET', 48.8411, 2.58801, 1, 'images/personnes/coindet.jpg', 11, 0, NULL, 0, NULL, 'Hé Amaury, il est 9h05 et y\'a toujours personne dans mon cours$Va falloir aller les chercher...tu peux t\'en occuper ? Je dois être à l\'école à 11h30 pour acheter mes billets du Hellfest.$Regarde, on dirait qu\'il y a Tristan devant le portail de sécurité de l\'ENSG, il devrait pouvoir t\'aider dans ta quête.\r\n', 80, 80, NULL, NULL),
('ZARZELLI', 48.8413, 2.58689, 1, 'images/personnes/zarzelli.jpg', 12, 0, NULL, 0, NULL, 'Mince, je pensais qu\'ils étaient tous avec toi, j\'ai personne non plus.$J\'ai qu\'ça à faire de toute façon. Je ne sais juste pas par où commencer.$Salut Tristan, il n\'y a pas cours ce matin, personne n\'est venu. Tu pourrais m\'aider à trouver tout le monde ?$Ma parole, on ne peut pas y aller à pied! Je vais essayer de voir avec Jeanine si elle peut nous preter le mignibus : elle travaille dans l\'ENSG. J\'arrive!\r\n', 72, 80, NULL, NULL),
('FILLON', 48.8414, 2.58623, 1, 'images/personnes/fillon.jpg', 14, NULL, NULL, NULL, NULL, 'Oui, bien sûr ! On peut commencer par aller chez Amélie, elle habite à Voisins-le-bretonneux', 65, 82, NULL, NULL),
('MAGINOT', 48.7621, 2.04996, 1, 'images/personnes/maginot.jpg', 17, NULL, 1, 0, NULL, '\r\nJe suis désolé, mais je ne bourgerai pas sans petit déjeuner! J\'ai laissé une carotte au château de Versailles, si on me la ramène, je viens avec vous!$Mmmh, un régal! Double-click moi pour m\'emmener. Allons chez Clément, il habite au Nord-Ouest de Saint-Etienne !', 70, 92, 'O', '1'),
('FOUGEROUSE', 45.6078, 4.06514, 1, 'images/personnes/fougerouse.jpg', 18, NULL, 1, NULL, NULL, 'Coucou, je viens seulement si tu réponds correctement à ma question: Que signifie \"babet\"?$Bravo! La brise est trop forte ici, changeons de mont! Allons à Montaigu, un lapin s\'y cache. Double-click moi pour m\'emmener.\r\n', 70, 92, 'C', 'pomme de pin'),
('MAYTIE', 46.9723, -1.31493, 1, 'images/personnes/maytie.jpg', 19, NULL, 10, NULL, NULL, 'Bonjour, il faut que tu m\'aides! Quelle est la meilleure recette du coin?$MMMM, ca à l\'air vraiment très bon!  En route vers l\'Est, Antoine, le beau gosse, nous attend! Comme pour les autres, pour m\'emmener doucle-click moi dessus, mais n\'oublie pas de récupérer ma peluche que j\'ai oublié au WEI à l\'île d\'Oléron.\r\n\r\n\r\n', 128, 72, 'C', 'prefou'),
('CORNU', 48.4479, 6.6173, 1, 'images/personnes/cornu.jpg', 20, NULL, 1, NULL, NULL, 'Enfin ! Ca fait 1h que je vous attends! Je ne monte que si tu réponds à ma question: Tu préfères ton père ou ta mère?$Et moi ce que je préfère ? Les phenixs bien sûr! On peut aller chez Kevin, ce n\'est pas très très loin, il habite à la Réunion ! N\'oublie pas de récupérer Coco mon perroquet !', 70, 92, 'C', NULL),
('BEAUPUY', -21.3271, 55.4392, 1, 'images/personnes/beaupuy.jpg', 21, NULL, 1, NULL, NULL, '\r\nOh dingue, vous êtes venus! Petite question avant de repartir, que veut dire \'mi aim a ou\'?$Bien joué, on peut passer prendre Léa, elle habite à Saint-Quentin! Emmène-moi, doucle-click moi! N\'oublie pas de récupérer Ori ma peluche, je l\'ai perdu sur l\'île...', 70, 92, 'C', 'je t aime'),
('LETASSEY', 49.8568, 3.28573, 1, 'images/personnes/letassey.jpeg', 22, NULL, 1, NULL, NULL, 'Salut, sauras-tu répondre à ma question: Que veut dire \"Ca drach\"?$Bravo, allons cherchez Vincent et Félix dans les montagnes ! Commençons par Vincent qui habite à Thonon-les-Bains !', 72, 96, 'C', 'il pleut'),
('HEAU', 46.4027, 6.50858, 1, 'images/personnes/heau.jpg', 23, NULL, 1, NULL, NULL, '\r\n\'Oh! Bienvenue dans cette belle région! Connais-tu le grand lac de celle-ci?$Bien joué, c\'est le Lac Léman, situé entre la France et la Suisse. Passons chez Félix, il n\'est pas très loin ! Direction Arith, au Sud d\'Annecy!', 70, 92, 'C', 'leman'),
('MAMANBAL', 45.7134, 6.08851, 1, 'images/personnes/mamanBal.png', 24, NULL, 0, NULL, NULL, 'Quoi? Félix n\'est pas à l\'école? Il n\'est pas rentré hier soir, il faisait soirée chez Baptiste, le vilain!', 88, 102, NULL, NULL),
('BAL', 48.8514, 2.37586, 1, 'images/personnes/bal.jpeg', 27, 0, 1, 0, NULL, 'Oh non, vous nous réveillez!$Mmmh quelle bonne banane! Merci, on peut y aller! Ilona n\'est pas avec vous ? Il faut aller au Sud de Metz pour la trouver !\r\n', 75, 79, 'O', '0'),
('RIVIERE', 48.8509, 2.37775, 1, 'images/personnes/riviere.jpg', 26, 0, 1, 0, NULL, '\r\nOula ! Doucement ! Nous n\'avons pas petit-déjeuné, peux-tu me ramener une carotte et une banane pour mon collègue? Il y a un champ de carotte/banane non loin de la Bastille.$Mmmh trop bon, merci l\'ami! En route, vers la Moselle chez Ilona!', 70, 92, 'O', '2'),
('FLEURY', 45.7682, 4.85477, 1, 'images/personnes/fleury.jpg', 25, 0, 1, 0, NULL, 'Je ne peux pas partir, j\'ai perdu mes clés au parc de la Tête d\'Or, peux-tu me les ramener ?$Merci, on peut y aller je suis prête! Il manque Baptiste, il habite dans le 12ème arrondissement de Paris !\r\n\r\n', 50, 100, 'O', '3'),
('BARAN', 49.012, 6.23956, 1, 'images/personnes/baran.jpg', 28, 0, 1, 0, NULL, '\r\nOlala je suis grave en retard, attendez je mange ma purée de carotte et on y va! Mince, il me manque des myrtilles pour le dessert, il y en a dans la forêt juste à côté. J\'ai également perdu Nono, tu saurais me le trouver ?$Ouf, on peut partir maintenant que j\'ai le ventre plein! En route vers la Saône-et-Loire chez notre ami, Aymeric. ', 70, 92, 'O', '6'),
('PAPADUTREMBLE', 46.725, 4.48894, 1, 'images/personnes/papaDutremble.png', 29, NULL, 0, NULL, NULL, 'Aymeric ? Vous le ratez de peu, il vient de partir pour Oslo!\r\n', 70, 70, NULL, NULL),
('DUTREMBLE', 59.954, 10.7314, 1, 'images/personnes/dutremble.jpg', 30, 0, 1, 0, NULL, '\r\nOh mais que faites-vous ici? Je pars avec vous si tu devines ce qu\'est un brunost ?$Bravo, c\'est un fromage norvégien à pâte brune et au goût caramélisé. Retournons en France, près de Lille chez Maeve!', 70, 92, 'C', 'fromage'),
('BLAREL', 50.7459, 2.16434, 1, 'images/personnes/blarel.jpg', 31, NULL, 1, NULL, NULL, 'Salut! Oh trop cool ce mign\'ibus! Allez, je pars avec vous!$Oh non! CATASTROPHE, j\'ai perdu mon masque, peux-tu m\'aider à le retrouver ? (#COVIDONRESPECTE)\r\n', 70, 92, 'O', '5'),
('JEANNINE', 48.8413, 2.58773, 10, 'images/personnes/jeannine.JPG', 15, NULL, NULL, NULL, NULL, 'B_ _ _ _ _ _$Il n\'a presque plus de combustign dans le mignibus! Je vous le passe mais j\'espère que tu ne vas pas faire le tour du monde avec...', 69, 69, 'C', 'bonjour'),
('ZARZELLI2', 48.8413, 2.58753, 10, 'images/personnes/zarzelli.jpg', 13, NULL, NULL, NULL, NULL, 'Bonjour Jeanine ! Il nous faut le mignibus en urgence !$Allez, monte dans le mignibus, c\'est parti pour Voisins-le-bretonneux!', 72, 80, NULL, NULL),
('MIGNIBUS', 48.841, 2.58652, 15, 'images/bus/bus1.png', 16, NULL, NULL, NULL, NULL, '\r\nJe suis M\'IGN\'ibus! Je suis Mini et IGN, je suis un bus tiptop!', 168, 35, 'O', '21'),
('cle', 45.7775, 4.85512, 12, 'images/objet/cle.png', 3, 0, 0, 1, '\r\n45.7682$4.85477', '\r\nDouble-click moi dessus et je rentrerai dans le trousseau.\r\n', 40, 37, NULL, NULL),
('carotteB', 48.8567, 2.37736, 17, 'images/objet/carotte.png', 2, 0, 0, 1, '48.8509$2.37775', 'Je suis la carotte de Baptiste', 80, 100, NULL, NULL),
('bananeF', 48.8566, 2.38224, 17, 'images/objet/banane.png', 0, 0, 0, 1, '48.8513$2.37585', 'Je suis une banane', 95, 65, NULL, NULL),
('BLAREL2', 50.7459, 2.16434, 10, 'images/personnes/blarelMasque.png', 32, 0, 1, 0, NULL, 'Oh merci beaucoup, ça y est je suis parée à vous suivre! Partons vite, Axel nous attend à Saint-Solen!', 70, 92, NULL, NULL),
('masque', 50.6329, 3.05396, 10, 'images/objet/masque.png', 5, 0, 0, 1, '50.7459$2.16434', 'Je suis le masque de Maeve', 70, 50, NULL, NULL),
('LOSCO', 48.4471, -1.99119, 10, 'images/personnes/losco.jpg', 33, 0, 1, NULL, NULL, '\r\nYo la mif, t\'aurais pas vu mon kader (je crois que je l\'ai forget à l\'intramuros de Saint-Malo)?$Oh tu gères la fougère, je pars avec vous, ambiance à balle dans le bus! Direction corsica, Stella Maria nous attend.', 79, 109, 'O', '4'),
('kader', 48.6492, -2.02623, 15, 'images/objet/kader.png', 4, 0, 0, 1, '\r\n48.4471$-1.99119', 'Je suis le kader d\'Axel', 60, 90, NULL, NULL),
('STEFANINI', 42.3069, 9.29097, 10, 'images/personnes/stefanini.png', 34, NULL, 1, NULL, NULL, '\r\n\r\nOh l\'ENSG en Corse, bienvenue! Je vous rejoins si tu devines ce que veut dire cette phrase corse: \"A sera lione, a mane cuglione\".$Oui, le soir lion, la matin couillon, ça part! Partons vite, Victor nous attend à l\'ENSG!  ', 70, 92, 'C', 'le soir lion, le matin couillon'),
('COINDET2', 48.8414, 2.5883, 17, 'images/personnes/coindet.jpg', 35, NULL, NULL, NULL, NULL, 'Wouah, bravo! Merci à vous d\'être venu à ce super cours de WEB! Oh, mais il manque quelqu\'un!$Youpi, on va commencer le WEB! Alors, parlons projet... ça va fetcher sa mère! Vous avez 1 mois, fini la fête, bonjour les prises de tête!\r\n', 80, 80, NULL, NULL),
('AHR', 48.8417, 2.58882, 10, 'images/personnes/ahr.jpg', 36, NULL, NULL, NULL, NULL, 'Bah moi! Je suis là les amies.s, on peut commencer!$\r\nTu as réussi ta mission dans les temps, pour voir ton score et sortir du jeu, click sur le bouton \"Fin du jeu\".', 70, 92, NULL, NULL),
('BUS', 48.8417, 2.58638, 15, 'images/bus/bus1_20.png', 37, NULL, NULL, NULL, NULL, 'Bah qui?$Ahahah', 300, 95, NULL, NULL),
('Coco', 48.4465, 6.62431, 13, 'images/peluche/coco.png', 9, 1, 0, 0, NULL, 'Je suis Coco.', 25, 25, NULL, NULL),
('Momo', 45.8558, -1.22828, 13, 'images/peluche/momo.jpg', 7, 1, 0, 0, NULL, 'Je suis Momo.', 25, 25, NULL, NULL),
('Nono', 49.0114, 6.2568, 13, 'images/peluche/nono.jpg', 8, 1, 0, 0, NULL, 'Je suis  Nono.', 25, 25, NULL, NULL),
('Orignal', -21.1838, 55.7291, 13, 'images/peluche/orignal.jpeg', 10, 1, 0, 0, NULL, 'Je suis Orignal.', 25, 25, NULL, NULL),
('PAPARODITIS', 48.8408, 2.58747, 10, 'images/personnes/paparoditis.jpg', 38, NULL, NULL, NULL, NULL, 'Elle t\'a dit le chateau de Versailles, regarde bien au Nord/Est de sa maison!$C\'est une pomme de pin, un babet.$Un préfou, meilleur plat du monde!$Euh, là c\'est dur. Quelle question nulle, ralala ce Antoine! Mets ce que tu veux!$Oh ce lover...  je crois que cela veut dire je t\'aime en Créole$Petit accent du nord, je reconnais. \"y drache\" veut dire \"il pleut\" en patois.$Regarde le nom du lac, juste à côté de sa maison.$Double-click sur la maman de Félix pour passer à l\'étape suivante$Le parc du Lion d\'OR se trouve juste à côté de chez Mélodie, au Nord.$N\'oublie pas de nourrir Félix!$$Il y a des myrtilles dans le parc naturel régional de Lorraine, à l\'Ouest de chez Ilona.$Double-click sur le papa de Aymeric pour passer à l\'étape suivante$Mmmmh le bon brunost, c\'est du fromage!$Maeve.... rolala, elle a jamais son masque! Elle l\'a oublié près de Lille.$$	Le coquin, regarde bien, zoom dans l\'intramuros de Saint-Malo.$Petite expression corse qui signifie: \"le soir lion, la matin couillon\".\r\n', 33, 40, NULL, NULL);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
