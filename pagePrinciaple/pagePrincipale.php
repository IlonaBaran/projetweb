<html lang="fr">
  <head>
    <meta charset="UTF-8">
    <meta name="description" content="Page principale de l'Escape Game de Maeve et Ilona">
    <link rel="stylesheet" href="style.css">
    <title>EscapeGame</title>
  </head>

  <body>
    <div id="logo"> <p>logo</p>
    </div>

    <div id="titre"><p>L'escape Game de Maeve et Ilona </p>
    </div>

    <div id="contexte">
        <p>contexte</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
             esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
             sunt in culpa qui officia deserunt mollit anim id est laborum
        </p>
    </div>

    <div id="connexion">
        <form id="identifiantForm">
            <label>Identifiant : <input type="text" id="identifiantLabel"></label>
    
            <a href="carte.html"><input type="button" id="identifiantEnvoie" value="OK"></a>
            <a href="pagePrincipale.php">page en php</a>
        </form>
    </div>

    <div  id="score"><p>score</p>
    <?php
        include("connexion.php");
        $tableau_classement = [];
        $requete = "SELECT pseudo, temps FROM joueur "; //ORDER BY temps ASC LIMIT 5
        if ($result = mysqli_query($link, $requete)) {
            while ($ligne = mysqli_fetch_assoc($result)) {
                array_push($tableau_classement, [
                    "pseudo" => $ligne['pseudo'],
                    "temps" => $ligne['temps']
                ]);
            }
            $table_str = "<table>
            <tr>   
            <th>Identifiant</th>
            <th>Temps</th>
            </tr>
            ";

            foreach ($tableau_classement as $elem) {
                $table_str .= "<tr>";
                foreach ($elem as $key => $value) {
                    $table_str .= "<td>$value</td>";
                }
                $table_str .= "</tr>";
            }

            $table_str .= "</table>";

            echo $table_str;
        
        }
        else {
            echo "Erreur de requête de base de données.";
        }
        ?>

    </div>

    <div id="mentions"><p>mentions</p>
    </div>
  </body>
</html>