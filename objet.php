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
                    "latitude" => floatval($ligne['latitude']),
                    "longitude" => floatval($ligne['longitude']),
                    "zoommini" => intval($ligne['zoommini']),
                    "icone" => $ligne['icone']
                ]);
            }
        } else {
            echo "Erreur de requête de base de données.";
        }
        foreach ($results as $result) {
            echo json_encode($result);
        } 
    }
?>