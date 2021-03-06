<!DOCTYPE html>
  <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <title>Escape Game</title>
      <link rel="stylesheet" href="css/commun.css">
      <link rel="stylesheet" href="css/styleFin.css">
    </head>

    <body>
    <div id="contener1">
        <div id="titre">IT'2 une fois</div>
    </div>

    <div id="contener2">
        <div id="block">
        <?php
        include("connexion.php");
        $today = date("H:i:s"); 
        $sql1 = "UPDATE joueur SET finchrono = '$today' WHERE pseudo ='$_GET[login]'";
        if (mysqli_query($link, $sql1)) {
        } else {
            echo "(sql) Erreur : " . $sql1 . "<br>" . mysqli_error($link);
        }

        $sql2 = "UPDATE `joueur` SET `temps`=TIMEDIFF(`finchrono`,`debutchrono`) WHERE pseudo ='$_GET[login]'";
        if (mysqli_query($link, $sql2)) {
        } else {
            echo "(sql) Erreur : " . $sql2 . "<br>" . mysqli_error($link);
        }

        $classement = [];
        $sql3 = "SELECT COUNT(pseudo) FROM joueur WHERE temps <= (SELECT temps FROM joueur WHERE pseudo ='$_GET[login]' LIMIT 1)";      
        if ($result = mysqli_query($link, $sql3)) {
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

            $temps = [];
            $sql4 = "SELECT `temps` FROM joueur  WHERE pseudo ='$_GET[login]'";
            if ($result = mysqli_query($link, $sql4)) {
                while ($ligne = mysqli_fetch_assoc($result)) {
                    array_push($temps, [
                        "temps" => $ligne['temps'],
                    ]);
                }
                $chrono = "";
                foreach ($temps as $elem) {
                    foreach ($elem as $key => $value) {
                        $chrono .= "<td>$value</td>";
                    }
                }
            }
            else {
                 echo "(sql) Erreur : " . $sql4 . "<br>" . mysqli_error($link);
            }

            echo "
                <div id=\"phraseFin\">
                    Bravo ! Vous avez ramen?? tous les ??l??ves ?? l'ENSG ! 
                    Ils vont enfin pouvoir aller en cours de WEB et apprendre ?? coder proprement !
                </div>

                <div id=\"classementPersonnel\">
                    Vous etes class?? : $position </br>
                    Votre temps est de : $chrono
                </div>

                <div id=\"retourPP\">
                    <form method=\"get\" action=\"pagePrincipale.php\">
                    <input type=\"submit\" value=\"Retour ?? la page principale\">
                    </form>
                </div>";
        }
        ?>
        </div>
    
        <div id="deplacementBus">
            <img src="images/bus/bus1_20.png" id ="coin" width="35%">
        </div>
    </div>

    
    <footer id = "mentions">
        <a href="html/planDuSite.html" target="_blank"> Plan du Site</a>
        -
        <a href="html/mentionsLegales.html" target="_blank"> Mentions l??gales </a>
        -
        <a href="html/credits.html" target="_blank"> Cr??dits </a>
    </footer>

    <script src="deplacementBus.js"></script>
  	</body>
</html>

