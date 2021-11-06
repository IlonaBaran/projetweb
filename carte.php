<!DOCTYPE html>
  <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <title>EscapeGameOnEstLa</title>
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
      <!-- Vous jouez en tant que $_GET[login] -->
      <!-- <div id="titre"><?php echo "L'escapade de Maeve et Ilona" ?></div> -->

      <div id="map"></div>
      
      <!-- <img src="images/bus.jpg"> -->

      <div id="contener">
          <div id="indice">
            Indice
            <!-- <input type="submit" value="Indice" id="recup"> -->

              <!-- <input type="submit" value="teeeest" id="recup"> -->
              <!-- <iframe src=".html/indice.html" name="targetframe" allowTransparency="true" scrolling="no" frameborder="0" ></iframe> -->
              </div>
          <div id="bus">Bus</div>
          <div id="inventaire">Inventaire</div>

        <div id="affichage">
          <div id="affichageIndice"></div>
          <div id="affichageBus"></div>
          <div id="affichageInventairz"></div>

        chargement par default : il faudra faire include la page qu'on veut maybe 
        </div>
      </div>

      <div id="deroulmentJeu">
      <?php
          include("connexion.php");
          $today = date("H:i:s"); 
          $sql = "INSERT INTO joueur (pseudo, finchrono, debutchrono) VALUES ('$_GET[login]', '$today', '$today')";
          if (mysqli_query($link, $sql)) {
              echo "(sql) Nouveau enregistrement créé avec succès";
          } else {
              echo "(sql) Erreur : " . $sql . "<br>" . mysqli_error($link);
          }
        ?>
      <?php     
      echo "Déroulement du jeu
      <form method=\"get\" action=\"pageFin.php\">
              <input type=\"readonly\" name=\"login\" value=\"$_GET[login]\" style=\"display:none;\"> 
              <input type=\"submit\" value=\"OK\" id=\"recup\">
      </form>";
      ?>
      
        <div id="maeve">maveveveve<!-- <img src="images/maeve.jpg"> --></div>
        <div id="ilona">ilololo</div>
      </div>

      <div id="niveaux"><p>Niveaux</p></div>

      <script src="carte.js"></script>
      <!-- <script src="chrono.js"></script> -->
  	</body>
</html>
