<!DOCTYPE html>
  <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <title>EscapeGameOnEstLa</title>
      <link rel="stylesheet" href=".css/commun.css">
      <link rel="stylesheet" href=".css/styleCarte.css">

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
      <div id="map">
      </div>
      <div id="bus">
        <?php echo "<form method=\"get\" action=\"carte.php\"><label>reponse1<input type=\"radio\" name=\"ouinon\" value=\"1\"></label><label>reponse2<input type=\"radio\" name=\"ouinon\" value=\"0\"></label><button id=\"validate\">Valider</button></form>'";
        ?>
        <!-- je suppose que le joueur va repondre dans un truc hors de la popup ... enfin comme j'y arrive pas -->
      </div>

      <div id="inventaire">
        <div id ="titreInventaire">Inventaire</div>
        <div id="objet1">objet 1</div>
        <div id="objet2">obejt 2</div>
        <div id="objet3">objet 3</div>
        <div id="objet4">objet 4</div>
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
        <a href="planDuSite.html"> Plan du Site</a>
        -
        <a href="mentionsLegales.html"> Mentions Légales </a>
    </footer>

      <script src="carte.js"></script>
      <!-- <script src="chrono.js"></script> -->
  	</body>
</html>
