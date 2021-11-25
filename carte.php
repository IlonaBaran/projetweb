<!DOCTYPE html>
  <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <title>Jeu : EscapeGame</title>
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
    <?php
      include("connexion.php");
      $today = date("H:i:s"); 
      $sql = "INSERT INTO joueur (pseudo, finchrono, debutchrono) VALUES ('$_GET[login]', '$today', '$today')";
    ?>

    <div id="contener1">
        <div id="titre">L'escape Game de Maeve et Ilona</div>
    </div>

    <div id="contener2">
      <div id="map"></div>

      <div id="bus">
        <img src="images/bus/bus1.png" id="testimage">
      </div>

      <div id="inventaire">
        <div id ="titreInventaire">Inventaire</div>
        <div id="objet1" class="objet"></br></div>
        <div id="objet2" class="objet"></br></div>
        <div id="objet3" class="objet"></br></div>
        <div id="objet4" class="objet"></br></div>
      </div>

      <div id="niveaux">Progression du jeu
          <div id="progressbar">
              <div id="indicator"></div>
              <div id="progressnum">0</div>
          </div>
      </div>

      <div id="deroulmentJeu">
        <div id="deroulmentTitre">Conv' dans le mignibus</div>
        <div id="message"></div>

        <div id="interaction">
          <button id="suiteStory">Suivant</button>
<!-- bouton a afficher lorsque le jeu est fini genre du style en js :  fin.style.visibylity: 'visible' et le reste du temps non visible-->
          <!-- <form method="get" action="pageFin.php" id="fin">
              <input type="readonly" name="login" value="$_GET[login]" style="display:none"> 
              <input type="submit" value="OK" id="recup">
          </form> -->

          <div id = "interactionJoueur">
            <input type="texte" id="valueReponse" name="valueReponse" required minlength="1" maxlength="40" size="20">
            <input type="submit" value="Entrer" id="valide">
          </div>

          <!-- ca je pense qu'on pourra enlever sachant que c'est les personnes qui diront "haahaaa c'est faux" -->
          </br><div id="noValueReponse"></div>
        </div>
      </div>
    </div>

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
  	</body>
</html>
