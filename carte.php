<!DOCTYPE html>
  <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <title>EscapeGameOnEstLa</title>
      <link rel="stylesheet" href="css/commun.css">
      <link rel="stylesheet" href="css/styleCarte.css">

      <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
      integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
      crossorigin=""></script>
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
      integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
      crossorigin=""/>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap" rel="stylesheet">
    </head>

    <body>
    <div id="contener1">
        <div id="logo"><img src = "images/logo.jpg"></div>
        <div id="titre">L'escape Game de Maeve et Ilona</div>
    </div>

    <!-- <img src="images/bus.jpg"> -->      

    <div id="contener2">
      <div id="map">ICI</div>
      <div id="bus">
        <img src="images/bus/bus1.png" id="testimage">
      </div>

      <div id="inventaire">
        <div id ="titreInventaire">Inventaire</div>
        <div id="objet1">objet 1</br></div>
        <div id="objet2">objet 2</br></div>
        <div id="objet3">objet 3</br></div>
        <div id="objet4">objet 4</br></div>
      </div>

      <div id="niveaux">Progression du jeu
          <div id="progressbar">
              <div id="indicator"></div>
          </div>
          <div id="progressnum">0</div>
      </div>

      <div id="deroulmentJeu">
        <div id="deroulmentTitre">Déroulement du jeu</div>
        <div id="message">
          <p> Bienvenue <?php echo "$_GET[login]" ?>, le cours de Mr Coindet est vide, personne n'est venu en WEB. Il faut que tu aides Victor à retrouver tous ses élèves.</p>
          <p> Pour cela, nous te laissons un master de l'IGN et son chauffeur, Amaury, pour revenir avec tout le monde.</p>
          <p> Amaury : En route vers la maison de tout le monde! Mais par où vais-je bien commencer ?</p>
          <p> Victor : Regarde autour de toi, ne serait-ce pas un élève devant l'ENSG?</p>
          <p> Tristan Fillon : Le réveil fut difficile aujourd'hui, je suis un peu en retard mais il est seulement 9h30.
              Allez, je monte avec vous. Allons faire un tour chez Amélie, elle habite aux voisins-le-bretonneux (non, non c'est pas en bretagne mais vers celle-ci)" </p>
          <p> Victor et Amaury : Aidez-nous à trouver Amélie </p>
          <p> Amélie : Je suis désolé de mon retard, mais je ne bourgerai pas sans petit déjeuner!
             J'ai laissé une carotte au château de Versailles, si tu me la ramènes, je viens avec vous! </p> 
          <!-- Carotte à récupérer à Versailles et lui ramener)-->
          <p> Amélie : Ah merci! On peut y aller! Allons chercher Clément, il habite à MontBrison!". </p>
          <p> Clément :  Coucou, je viens seulement si vous répondez à ma question!</p> -->
          <!-- Expression à deviner (QCM)  -->
          <p> Clément : Bravo! La brise est trop forte ici, changeons de mont! Allons à Montaigu, un lapin s'y cache.</p>
          <p> Tancrède : Bonjour, il faut que tu m'aides! Quelle est la meilleure recette du coin?</p>
          <!-- Question à deviner  -->
          <p> Tancreède : Bien joué ! En route vers l'Est, Antoine, le beau gosse, nous attend! </p>
          <p> Antoine : Enfin ! Ca fait 1h que je vous attends! Je ne monte que si vous répondez à ma question: Tu préfères ton père ou ta mère?
          <!-- Question à deviner  -->
          <p> Antoine : Oui! Malheureusement vous arrivez trop tard, Kévin est déjà rentré. Mais pas de panique, il n'habite pas très loin. Allons à la Réunion avec ce super master! </p>
          <p> Kevin : Oh dingue, vous êtes venus ! Petite question avant de partir, que veut dire 'mi aim a ou'? </p>
          <!-- Question à répondre  -->
          <p> Kevin : Bien joué, on peut passer prendre Léa, elle habite sur le chemin pour rentrer ! </p>
          <p> léa L : Salut, sauras-tu répondre à ma question: Que veut dire 'Avec toute cette drach, in a pas fini d'marcher dins l'berdoule'? </p>
          <!-- Question à deviner  -->
          <p> Léa L : Bravo, allons cherchez Vincent et Félix dans les montagnes!" </p>
          <p> Vincent ; Oh! Bienvenu dans cette belle région! Connaissez-vous le grand lac de celle-ci? </p>
          <!-- Question à deviner  -->
          <p> Vincent : Bien joué, c'est le Lac Léman, situé entre la France et la Suisse. Passons chez Félix, il n'est pas très loin ! </p>
          <p> Victor : Ha nous voila enfin chez Félix ! Je ne le vois pas, allons voir sa mère pour lui demander où est Félix. </p>
          <p> Mamamn Félix : Quoi? Félix n'est pas à l'école? Il n'est pas rentré hier soir, il faisait soirée chez Baptiste, le vilain! </p>
          <p> Baptiste et Felix : Oh, vous nous réveillez! On se dépêche! Pour me lever, j'ai besoin d'une carotte. 
            Il y a un champ de carotte non loin de la Bastille, pouvez-vous m'en ramener une?</p>
          <!-- Ramener une carotte  -->
          <p> Baptiste et Felix : Merci, on peut y aller! Allons vers Lyon, on a oublié Mélodie en chemin! </p>
          <p> Melodie : Je ne peux pas partir, j'ai perdu mes clés au parc de la Tête d'Or, peux-tu me les ramener?</p>
          <!-- Ramener des clés  -->
          <p> Melodie : Merci, on peut y aller je suis prête! </p>
          <p> Ilona : Olala je suis grave en retard, attendez je mange ma purée de carotte et on y va! 
            Mince, il me manque une mirabelle pour le dessert, il y en a dans la forêt juste à côté! </p>
          <!-- Ramener une mirabelle  -->
          <p> Ilona : Ouf, on peut partir maintenant qu'on a le ventre plein!</p>
          <p> Papa aymeric : Vous le ratez de peu, il vient de partir pour Oslo! </p>
          <p> Aymeric : "Oh mais que faites-vous ici? Je pars avec vous si vous devinez ce qu'est un brunost.</p>
          <!-- Question à répondre  -->
          <p> Aymeric : Bravo, c'est un fromage norvégien à pâte brune et au goût caramélisé.</p>
          <p> Maeve : Salut! Savez-vous quelle est la bière (pas très bonne certes) fabriquée à côté de Zudausques?</p>
          <!-- Question à répondre  -->
          <p> Maeve : Yes, bien joué! Partons vite, Victor nous attend! </p>



          <?php
            include("connexion.php");
            $today = date("H:i:s"); 
            $sql = "INSERT INTO joueur (pseudo, finchrono, debutchrono) VALUES ('$_GET[login]', '$today', '$today')";
            if (mysqli_query($link, $sql)) {
                echo "(sql) Nouveau enregistrement créé avec succès";
            } else {
                echo "(sql) Erreur : " . $sql . "<br>" . mysqli_error($link);
            }
            
            echo "<form method=\"get\" action=\"pageFin.php\">
                    <input type=\"readonly\" name=\"login\" value=\"$_GET[login]\" style=\"display:none;\"> 
                    <input type=\"submit\" value=\"OK\" id=\"recup\">
            </form>";
          ?>
        </div>
  
      </div>
    </div>

      <?php
          include("connexion.php");
          /*$today = date("H:i:s"); 
          $sql = "INSERT INTO joueur (pseudo, finchrono, debutchrono) VALUES ('ilona', '$today', '$today')";
          if (mysqli_query($link, $sql)) {
              echo "(sql) Nouveau enregistrement créé avec succès";
          } else {
              echo "(sql) Erreur : " . $sql . "<br>" . mysqli_error($link);
          }
        ?>
      <?php     
      echo "Déroulement du jeu
      <form method=\"get\" action=\"pageFin.php\">
              <input type=\"readonly\" name=\"login\" value=\"ilona\" style=\"display:none;\"> 
              <input type=\"submit\" value=\"OK\" id=\"recup\">
      </form>";
      */?>
      </div>


      <div id="busMouse"></div>
      <input type="checkbox" id="option" name="afficheBus">
      <label for="afficheBus">Afficher le bus en voyage</label>

      <footer id = "mentions">
        <a href="html/planDuSite.html"> Plan du Site</a>
        -
        <a href="html/mentionsLegales.html"> Mentions légales </a>
        -
        <a href="html/credits.html"> Crédits </a>
        -
        <a href="html/conditionsUtilisation.html"> Conditions générales </a>
      </footer>

      <script src="carte.js"></script>
      <!-- <script src="chrono.js"></script> -->
  	</body>
</html>
