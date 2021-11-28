<html lang="fr">
  <head>
    <meta charset="UTF-8">
    <meta name="description" content="Page principale de l'Escape Game de Maeve et Ilona">
    <link rel="stylesheet" href="css/commun.css">
    <link rel="stylesheet" href="css/styleIndex.css">
    <title>Escape Game</title>
  </head>

  <body>
    <div id="contener1">
        <div id="titre">IT'2 une fois</div>
    </div>

    <div id="contener2">
        <div id="contexte" class='contour'>
            <p> Cet escape game géographique a été créé par Maeve et Ilona, deux elèves ingénieures 2ème année à l'Ecole Nationale des Sciences Géographiques.</p>

            <p>Il est 8h55, lundi matin, le cours de web pour les elèves ingénieurs de 2ème année commence dans 5 minutes. 
                Il n'y a encore personnes devant les deux salles, même Clément n'est pas encore présent. 
                Le week-end fut certainement bien arrosé. </p>
            <p>Il est 9h00, lundi matin, il n'y a toujours aucun elève.</p>
            <p>Amaury et Victor, après être passés chez Jeanine, comme à leur habitude, arrivent enfin. Il est 9h05. 
                Ils ne comprennent pas l'absence des elèves et décident de parcourir le monde à la recherche des élèves.....
            </p>
            <p>Maeve et Ilona vous propose un voyage aux quatre coins du monde afin de découvrir la folle aventure pour retrouver tous ces élèves.</p>        
        </div>

        <div id="connexion" class='contour'> 
            <form id="pseudo" method="get" action="carte.php">
                <input type="text" name="login" required minlength="1" maxlength="20" size="20" placeholder="Rentrez un pseudo">
                <input type="submit" value="C'est parti !">
            </form>
        </div>

        <div id="score" class='contour'>
            <div id="titreScore">Score</div>
            <?php
                include("connexion.php");
                
                $tableau_classement = [];
                $requete = "SELECT pseudo, temps FROM joueur ORDER BY temps ASC LIMIT 15";
                if ($result = mysqli_query($link, $requete)) {
                    while ($ligne = mysqli_fetch_assoc($result)) {
                        array_push($tableau_classement, [
                            "pseudo" => $ligne['pseudo'],
                            "temps" => $ligne['temps']
                        ]);
                    }

                    $table_str = "<table>";
                    $ligne = "";
                    $position = 1;

                    foreach ($tableau_classement as $elem) {
                        $table_str .= "<tr><td>$position.  ";
                        foreach ($elem as $key => $value) {
                            $ligne .= "  $value";
                        }
                        $table_str .= $ligne;
                        $table_str .= "</td></tr>";
                        $position ++; 
                        $ligne = "";
                    }
                    $table_str .= "</table>";
                    echo $table_str;
                }
                ?>
        </div>
    </div>

    <footer>
        <a href="html/planDuSite.html"> Plan du Site</a>
        -
        <a href="html/mentionsLegales.html"> Mentions légales </a>
        -
        <a href="html/credits.html"> Crédits </a>
        -
        <a href="html/conditionsUtilisation.html"> Conditions générales </a>
    </footer>

  </body>
</html>