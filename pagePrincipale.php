<html lang="fr">
  <head>
    <meta charset="UTF-8">
    <meta name="description" content="Page principale de l'Escape Game de Maeve et Ilona">
    <link rel="stylesheet" href="css/commun.css">
    <link rel="stylesheet" href="css/styleIndex.css">
    <title>EscapeGame</title>
  </head>

  <body>
    <div id="contener1">
        <div id="titre">L'escapade en Mignibus</div>
    </div>

    <div id="contener2">
        <div id="contexte">
            <p>Il est 8h55, lundi matin, le cours de web pour les elèves ingénieurs de 2ème année commence dans 5 minutes. 
            Seul Clément est présent devant la salle, depuis déjà de nombreuses minutes, comme à son habitude.
            Clément attend patiemment l'arrivée de Victor ou d'Amaury afin qu'ils ouvrent la porte qui menera 
            à la connaissance. </p>
            <p>Il est 9h00, lundi matin, seul clément est présent devant la salle, toujours ferméee.</p>
            <p>Amaury et Victor, après être passés chez Jeanine -comme à chaque pause- arrivent enfin. Il est 9h13.</p>
            <p>Mais qu'est-il donc arrivé aux ingénieurs 2ème année ? Maeve et Ilona vous propose un voyage aux 
            quatre coins du monde afin de découvrir la folle aventure pour retrouver tous ces élèves.</p>        
        </div>

        <div id="connexion1"> Rentrez un identifiant pour commencer l'aventure ! 
            <form id="identifiantForm" method="get" action="carte.php">
                <input type="text" name="login" required minlength="1" maxlength="20" size="20">
                <input type="submit" value="C'est parti !">
            </form>
        </div>

        <div id="titreScore">Hall Of Fame</div>
        <div id="score">
        <?php
            include("connexion.php");
            
            $tableau_classement = [];
            $requete = "SELECT pseudo, temps FROM joueur ORDER BY temps ASC LIMIT 10";
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
            // else {
            //     echo "Erreur de requête de base de données.";
            // }
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