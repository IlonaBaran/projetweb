<!DOCTYPE html>
  <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <title>Page de fin</title>
    </head>

    <body>
    <!-- <div id = chronometre></div> -->

    <?php
        include("connexion.php");

        $today = date("H:i:s"); 
        $sql = "UPDATE joueur SET finchrono = '$today' WHERE pseudo ='$_GET[login]'";
        if (mysqli_query($link, $sql)) {
            echo "(sql : update finchrono) Nouveau enregistrement créé avec succès";
        } else {
            echo "Erreur : " . $sql . "<br>" . mysqli_error($link);
        }

        
        $sql666 = "UPDATE `joueur` SET `chronom`=TIMEDIFF(`finchrono`,`debutchrono`) WHERE pseudo ='$_GET[login]'";
        if (mysqli_query($link, $sql666)) {
            echo "(sql : update finchrono) Nouveau enregistrement créé avec succès";
        } else {
            echo "Erreur : " . $sql . "<br>" . mysqli_error($link);
        }

        echo "
        <div id=\"retourPP\">
        <form id=\"identifiantForm\" method=\"get\" action=\"pagePrincipale.php\">
                <input type=\"submit\" value=\"Retour à la page principale\">
        </form>
        </div>";

      $sql523 = "SELECT COUNT(pseudo) FROM joueur WHERE chronom <= (SELECT chronom FROM joueur WHERE pseudo ='$_GET[login]')";
      $classement = [];
      if ($result = mysqli_query($link, $sql523)) {
        while ($ligne = mysqli_fetch_assoc($result)) {
            array_push($classement, [
                "count" => $ligne['COUNT(pseudo)'],
            ]);
        }

        $position = "";
        foreach ($classement as $elem) {
            foreach ($elem as $key => $value) {
                $position .= "<td>$value</td>";
            }
        }
        echo "
        <div id=\"classementPersonnel\">
        Bravo ! Vous avez fini l'escape Game de Maeve et Ilona.
        Vous etes classé : $position
        </div>";
      }
       ?>

    <script src="chrono.js"></script>
  	</body>
</html>

