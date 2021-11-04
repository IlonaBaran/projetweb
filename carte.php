<!DOCTYPE html>
  <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <title>EscapeGameOnEstLa</title>
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

      //<input type=\"readonly\" name=\"login\" value=\"$_GET[login]\" style=\"display:none;\"> : normalement on pourra virer ca dans le formulaire juste en dessous

      echo "
      <div id=\"pourPasserALaPageSuivantePourLeMoment\">
      <form id=\"identifiantForm\" method=\"get\" action=\"pageFin.php\">
              <input type=\"readonly\" name=\"login\" value=\"$_GET[login]\" style=\"display:none;\"> 
              <input type=\"submit\" value=\"OK\" id=\"recup\">
      </form>
      </div>";
      ?>

      
      <?php
        include("connexion.php");
        $today = date("H:i:s"); 
        $sql = "INSERT INTO joueur (pseudo, finchrono, debutchrono) VALUES ('$_GET[login]', '$today', '$today')";
        if (mysqli_query($link, $sql)) {
            echo "(sql) Nouveau enregistrement créé avec succès";
        } else {
            echo "(sql) Erreur : " . $sql . "<br>" . mysqli_error($link);
        }
        
        // $sql3 = "INSERT INTO joueur (temps, debutchrono) VALUES ('$today', '$today') WHERE pseudo = '$_GET[login]'";
        // if (mysqli_query($link, $sql3)) {
        //     echo "(sql3) Nouveau enregistrement créé avec succès";
        // } else {
        //     echo "(sql3) Erreur : " . $sql . "<br>" . mysqli_error($link);
        // }
      ?>


       <?php 
        $requete = "SELECT id FROM joueur WHERE pseudo = '$_GET[login]' AND temps = '$today'";
        $personne = [];
        if ($result = mysqli_query($link, $requete)) {
            while ($ligne = mysqli_fetch_assoc($result)) {
                array_push($personne, [
                    "id" => $ligne['id'],
                ]);
            }
          }
          echo $personne; 
       ?>


      <?php     
      //echo " <div id=\"pourPasserALaPageSuivantePourLeMoment\"> <form id=\"identifiantForm\" method=\"get\" action=\"pageFin.php\"> <input type=\"readonly\" name=\"login\" value=\"$_GET[login]\" style=\"display:none;\"> <input type=\"submit\" value=\"OK\"> </form> </div>";
      ?>
      <div id="chrono"><p>Chrono</p></div>
      <div id="niveaux"><p>Niveaux</p></div>
      <div id="bus"><p>Bus</p></div>
      <div id="indice"><p>Indice</p></div>
      <div id="inventaire"><p>Inventaire</p></div>

      <script src="carte.js"></script>
      <script src="chrono.js"></script>
  	</body>
</html>
