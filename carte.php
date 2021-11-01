<!DOCTYPE html>
  <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <title>leaflet.html</title>

      <link rel="stylesheet" href="styleCarte.css">
      <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
      integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
      crossorigin=""></script>
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
      integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
      crossorigin=""/>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap" rel="stylesheet">
    </head>

    <body>
      <div id="titre"><?php echo "titre:  Vous jouez en tant que $_GET[login]" ?>
      </div>

      <div id="map">
      </div>

      <?php     
      echo "
      <div id=\"pourPasserALaPageSuivantePourLeMoment\">
      <form id=\"identifiantForm\" method=\"get\" action=\"pageFin.php\">
              <input type=\"readonly\" name=\"login\" value=\"$_GET[login]\" style=\"display:none;\">
              <input type=\"submit\" value=\"OK\">
      </form>
      </div>";
      ?>

      <div id="chrono"><p>chrono</p>
      </div>

      <div id="niveaux"><p>niveaux</p>
      </div>

      <div id="bus"><p>bus</p>
      </div>

      <div id="indice"><p>indice</p>
      </div>

      <script src="carte.js"></script>
  	</body>
</html>
