# Technologie du Web II:
# Projet 1: Les Stations V'Lille


## Date: 25/03/2020


# Département Informatique de l'ENSG - Géomatique
# Programmation WEB avancée:
# Projet : « Escape game » géographique !

## Auteurs
Ilona Baran et Maeve Blarel

## Date: du 1/11/2021 au 28/11/2021 (4 semaines)

## URL du site
http://localhost/projetweb/pagePrincipale.php

## Le Projet et ses objectifs:
L’objec.f de ce TP est de créer un « escape game », notamment en résolvant des énigmes et en trouvant 
des objets. Le tout, sur une carte web.
Nous avons réalisé un « escape game » qui s'intitule: Tour de promo.

***
Short Description about the project................................
***
![PojetWeb](images/bus/bus1_14.png)

## Langages utilisés
+ HTML5, CSS3
+ JavaScript, AJAX
+ PHP, MySQL

## Pré-requis
+ Installation de MAMP ou de WAMP  
+ Connection internet pour l'affichage de la carte  
+ Utilisation d'un navigateur (évitez Microsoft Edge et Internet explorer)

#### Si vous utilisez MAMP :

#### Récupération du projet #
...\wamp64\www 
................................

### Import de la base de données #
Ouvrir Mamp. 
Aller dans MAMP/Préférences/Web server et vérifier que le "document root" est bien l'emplcament où se trouve le projet récupéré. Dans le cas contraire, veuillez déplacer le projet dans le dossier explicité par le document root ou changer le document root (cela risque d'être plus compliqué).
//Maeve, je n'ai plus mamp, il faudrait que tu dises comment tu fais pour creer un compte d'accès ? 
//Reponse Maeve: Il n'y a pas de compte d'accès à créer sur Mamp

(identifiant + mdp). On peut mettre dans la ligne du jeu escapge game pour le mdp et l'id, ca sera plus simple a gerer ?   Je comprends pas bien la question? mais je crois que c'est une bonne idée
Aller sur http://localhost/phpmyadmin.
Créer une base de données « escape game ».
Importer le fichier espacegame.sql à cet emplacement.  
Ouvrir dans un éditeur de texte le fichier connexion.php, et modifier, au besoin, de telle façon à avoir ce qui suit : $link = mysqli_connect('localhost','nom','nom', 'escapegame'); 
Pensez à remplacer nom par votre prénom.
//photo des 2 lignes PAS SUR DE CA, CA DEPEND DE CHACUN NON?

#### Si vous utilisez WAMP : 

#### Récupération du projet #
...................................

### Import de la base de données #
Aller sur http://localhost/phpmyadmin
Connecter vous sans changer l'identifiant et le mot de passe pré-rentré. Normalement, vous devriez avoir : //capture d'écran avec root, et pas de mdr
Créer une base de données “escapegame”   
Importer le fichier espacegame.sql    
Ouvrir dans un éditeur de texte le fichier connexion.php, et modifier au besoin de telle façon à avoir ce qui suit : $link = mysqli_connect('localhost','root','', 'escapegame');
//photo des 2 lignes 


### Consigne et déroulement du jeu
Le jeu comporte 3 pages :   
- une page principale.   
Vous devrez rentrer un pseudo pour pouvoir commencer à jouer. Celui-ci doit faire entre 1 et 20 caractères.   

- une page de jeu   
Pour pouvoir jouer au jeu, vous devez :   
+ Lorsque vous voyez le bouton "Suivant", vous devez cliquer dessus   
+ Vous devez validez la saisie d'un champ texte en appuyant sur la touche entrée

- une page de fin   
Vous pourrez voir le temps que vous avez mis à réaliser le jeu ainsi que votre position par rapport aux autres joueurs.  
Le retour à la page principale est permis grâce à un bouton. 

## Responsive ?
Oui, il est responsive! (commentaire ilo : HEUUUUUU) (commentaire maeve : ON VA LE RENDRE RESPONSIVE)

## Screenshots 
![Connexion](https://i.imgur.com/BxP73v9.png)

![Screenshot chat](https://i.imgur.com/AyQYan5.png)


### Cahier de bord : Organisation au jour le jour

### Difficultés et solutions techniques rencontrées

#### Nos sources:
La fonction strNoAccent de la page carte.js
