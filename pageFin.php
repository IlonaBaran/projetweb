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

        <div id="contenerFin">
        <?php
        include("connexion.php");
        $today = date("H:i:s"); 
        $sql1 = "UPDATE joueur SET finchrono = '$today' WHERE pseudo ='$_GET[login]'";
        $sql2 = "UPDATE `joueur` SET `temps`=TIMEDIFF(`finchrono`,`debutchrono`) WHERE pseudo ='$_GET[login]'";
        $sql523 = "SELECT COUNT(pseudo) FROM joueur WHERE temps <= (SELECT temps FROM joueur WHERE pseudo ='$_GET[login]' LIMIT 1)";        
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
            <div id=\"block\">
                <div id=\"phraseFin\">
                    Bravo ! Vous avez ramené tous les élèves à l'ENSG ! 
                    Ils vont enfin pouvoir aller en cours de WEB et apprendre à coder proprement !
                </div>

                <div id=\"classementPersonnel\">
                    Vous etes classé : $position
                </div>

                <div id=\"retourPP\">
                    <form method=\"get\" action=\"pagePrincipale.php\">
                    <input type=\"readonly\" name=\"login\" value=\"$_GET[login]\" style=\"display:none;\"> 
                    <input type=\"submit\" value=\"Retour à la page principale\">
                    </form>
                </div>

            </div>";
        }
        ?>
        </div>
    
        <div id="deplacementBus">
            <img src="images/bus/bus1_20.png" id ="coin" width="35%">
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

