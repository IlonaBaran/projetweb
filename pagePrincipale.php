<html lang="fr">
  <head>
    <meta charset="UTF-8">
    <meta name="description" content="Page principale de l'Escape Game de Maeve et Ilona">
    <link rel="stylesheet" href="style.css">
    <title>EscapeGame OUI</title>
  </head>

  <body>
    <div id="logo"> <p>logo</p>
    </div>


    <div id="titre"><p>L'escape Game de Maeve et Ilona </p>
    </div>


    <div id="contexte">
        contexteLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum
    </div>


    <?php     
    echo "
    <div id=\"connexion1\">
    <form id=\"identifiantForm\" method=\"get\" action=\"carte.php\">
            <label> Identifiant: <input type=\"text\" name=\"login\"></label>
            <input type=\"submit\" value=\"OK\">
    </form>
    </div>";
    ?>

    <div  id="score">
    <?php
        include("connexion.php");
        $tableau_classement = [];
        $requete = "SELECT pseudo, chronom FROM joueur ORDER BY chronom ASC LIMIT 5";
        if ($result = mysqli_query($link, $requete)) {
            while ($ligne = mysqli_fetch_assoc($result)) {
                array_push($tableau_classement, [
                    "pseudo" => $ligne['pseudo'],
                    "chronom" => $ligne['chronom']
                ]);
            }

            $table_str = "<table classe=\"tableau\"><tr colspan=3>Le classement <img src=\"trophee.jpg\" width=10%></tr><tr><th>Position</th><th>Identifiant</th><th>Temps</th></tr>";
            $position = 1;

            foreach ($tableau_classement as $elem) {
                $table_str .= "<tr><td>$position</td>";
                foreach ($elem as $key => $value) {
                    $table_str .= "<td>$value</td>";
                }
                $table_str .= "</tr>";
                $position ++; 
            }
            $table_str .= "</table>";
            echo $table_str;
        }
        else {
            echo "Erreur de requête de base de données.";
        }
        ?>
    </div>

  </body>
</html>