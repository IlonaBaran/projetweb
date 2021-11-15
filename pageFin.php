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
        <div id="titre">L'escapade en mignibus</div>
    </div>

    <div id="contener2">
        <?php
        include("connexion.php");

        $today = date("H:i:s"); 
        $sql = "UPDATE joueur SET finchrono = '$today' WHERE pseudo ='$_GET[login]'";
        // if (mysqli_query($link, $sql)) {
        //     echo "(sql : update joueur avec finchrono ) Nouveau enregistrement créé avec succès";
        // } else {
        //     echo "Erreur : " . $sql . "<br>" . mysqli_error($link);
        // }

        
        $sql666 = "UPDATE `joueur` SET `temps`=TIMEDIFF(`finchrono`,`debutchrono`) WHERE pseudo ='$_GET[login]'";
        // if (mysqli_query($link, $sql666)) {
        //     echo "(sql : update joueur avec temps) Nouveau enregistrement créé avec succès";
        // } else {
        //     echo "Erreur : " . $sql . "<br>" . mysqli_error($link);
        // }
        ?>

        <div id="contener">
        <?php
        $sql523 = "SELECT COUNT(pseudo) FROM joueur WHERE temps <= (SELECT temps FROM joueur WHERE pseudo ='$_GET[login]')";        
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
            <div id=\"phraseFin\">
                Bravo ! Vous avez fini l'escape Game de Maeve et Ilona.
            </div>

            <div id=\"classementPersonnel\">
                Vous etes classé : $position
            </div>

            <div id=\"retourPP\">
                <form method=\"get\" action=\"pagePrincipale.php\">
                        <input type=\"submit\" value=\"Retour à la page principale\">
                </form>
            </div>
            </div>";
        } 
        else {
            echo "(sql) Erreur : " . $sql . "<br>" . mysqli_error($link);
        }
        ?>
        </div>

        <div id="deplacementBus">
            <img src="images/coindet.jpg" id ="coin">
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

    <script src="deplacementBus.js"></script>
  	</body>
</html>

