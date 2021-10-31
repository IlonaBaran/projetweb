<!-- EN VOILA DU PHP : BUT -> CLASSEMENT DES JOUEURS (bdd : "joueur", il faudrait faire un LIMIT X dans la requete 
et classement sous forme de tableaux ? ) -->
<?php
include("connexion.php");

// $tableau_resultats = array();

$requete = "SELECT identifiant, temps FROM joueur ORDER BY temps ASC LIMIT 5";
if ($result = pg_query($link, $requete)) {
    while ($ligne = pg_fetch_assoc($result)) {
        $tableau_resultats[] = $ligne;
    } 
    
    //il manque une colonne pour le numero enfin le classement quoi 
    // $table_str = "<table>
    //     <tr>   
    //     <th>Identifiant</th>
    //     <th>Temps</th>
    //     </tr>
    // ";

    // foreach ($tableau_resultats as $elem) {
    //     $table_str .= "<tr>";
    //     foreach ($elem as $key => $value) {
    //         $table_str .= "<td>$value</td>";
    //     }
    //     $table_str .= "</tr>";
    // }

    // $table_str .= "</table>";

    // echo $table_str;

} else {
    echo "Erreur de requête de base de données.";
}?>
</div>

