<!DOCTYPE html>
  <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <title>Page de fin</title>
      <link rel="stylesheet" href="css/commun.css">
      <link rel="stylesheet" href="css/styleFin.css">
    </head>

    <body>
    <div id="contener1">
        <div id="logo"><img src = "images/logo.jpg"></div>
        <div id="titre">L'escape Game de Maeve et Ilona</div>
    </div>

    <div id="contener2">
        <?php
            include("connexion.php");

            $today = date("H:i:s"); 
            $sql = "UPDATE joueur SET finchrono = '$today' WHERE pseudo ='$_GET[login]'";
            if (mysqli_query($link, $sql)) {
                echo "(sql : update finchrono) Nouveau enregistrement créé avec succès";
            } else {
                echo "Erreur : " . $sql . "<br>" . mysqli_error($link);
            }

            
            $sql666 = "UPDATE `joueur` SET `temps`=TIMEDIFF(`finchrono`,`debutchrono`) WHERE pseudo ='$_GET[login]'";
            if (mysqli_query($link, $sql666)) {
                echo "(sql : update finchrono) Nouveau enregistrement créé avec succès";
            } else {
                echo "Erreur : " . $sql . "<br>" . mysqli_error($link);
            }

        $sql523 = "SELECT COUNT(pseudo) FROM joueur WHERE temps <= (SELECT temps FROM temps WHERE pseudo ='$_GET[login]')";
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

            echo "<div id=\"contener\">
                    <div id=\"retourPP\">
                        <form id=\"identifiantForm\" method=\"get\" action=\"pagePrincipale.php\">
                                <input type=\"submit\" value=\"Retour à la page principale\">
                        </form>
                    </div>

                    <div id=\"classementPersonnel\">
                        Bravo ! Vous avez fini l'escape Game de Maeve et Ilona.
                        Vous etes classé : $position
                    </div>
                </div>";
        }
        ?>

        <!-- <div id="bus"><img src="images/coindet.jpg" id ="coin"></div> -->
        <img src="images/coindet.jpg" id ="coin">
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

    <script src="deplacementBus.js"></script>
  	</body>
</html>

