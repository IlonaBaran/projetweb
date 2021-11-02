<?php
    $results = [];
    include("connexion.php");
    if (isset($_GET['id'])) {
        $requete = "SELECT id, objet, latitude, longitude, zoommini, icone FROM objet WHERE id = {$_GET['id']}";
        if ($result = mysqli_query($link, $requete)) {
            while ($ligne = mysqli_fetch_assoc($result)) {
                array_push($results, [
                    "value" => intval($ligne['id']),
                    "objet" => $ligne['objet'],
                    "latitude" => intval($ligne['latitude']),
                    "longitude" => intval($ligne['longitude']),
                    "zoommini" => intval($ligne['zoommini']),
                    "icone" => $ligne['icone']
                ]);
                //echo "<img src=\"images/mirabelle.jpg\" width=30%>";
            }
        } else {
            echo "Erreur de requête de base de données.";
        }
        echo json_encode($results);
    }
?>