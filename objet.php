<?php
    $results = [];
    include("connexion.php");
    if (isset($_GET['id'])) {
        $requete = "SELECT id, objet, latitude, longitude, zoommini, icone, iconeSizeLarg, iconeSizeLong, eventDblClick, dblClickBus, eventDragDrop, parole, bloque, bloquePar FROM objet WHERE id = {$_GET['id']}";
        if ($result = mysqli_query($link, $requete)) {
            while ($ligne = mysqli_fetch_assoc($result)) {
                array_push($results, [
                    "value" => intval($ligne['id']),
                    "objet" => $ligne['objet'],
                    "latitude" => floatval($ligne['latitude']),
                    "longitude" => floatval($ligne['longitude']),
                    "zoommini" => intval($ligne['zoommini']),
                    "iconeSizeLarg" => intval($ligne['iconeSizeLarg']),
                    "iconeSizeLong" => intval($ligne['iconeSizeLong']),
                    "icone" => $ligne['icone'],
                    "eventDblClick" => intval($ligne['eventDblClick']),
                    "dblClickBus" => intval($ligne['dblClickBus']),
                    "eventDragDrop" => intval($ligne['eventDragDrop']),
                    //"dragDropEnd" => intval($ligne['dragDropEnd']),
                    "message" => $ligne['parole'],
                    "bloque" => $ligne['bloque'],
                    "bloquePar" => $ligne['bloquePar']
                ]);
            }
        } else {
            echo "Erreur de requête de base de données.";
        }
        foreach ($results as $result) {
            echo json_encode($result);
        }
    } else if (isset($_GET['objet'])) {
        $requete = "SELECT id, objet, latitude, longitude, zoommini, icone, iconeSizeLarg, iconeSizeLong, eventDblClick, dblClickBus, eventDragDrop, parole, bloque, bloquePar FROM objet WHERE objet='COINDET' OR objet='ZARZELLI' OR objet='FILLON'";
        if ($result = mysqli_query($link, $requete)) {
            while ($ligne = mysqli_fetch_assoc($result)) {
                array_push($results, [
                    "value" => intval($ligne['id']),
                    "objet" => $ligne['objet'],
                    "latitude" => floatval($ligne['latitude']),
                    "longitude" => floatval($ligne['longitude']),
                    "zoommini" => intval($ligne['zoommini']),
                    "iconeSizeLarg" => intval($ligne['iconeSizeLarg']),
                    "iconeSizeLong" => intval($ligne['iconeSizeLong']),
                    "icone" => $ligne['icone'],
                    "eventDblClick" => intval($ligne['eventDblClick']),
                    "dblClickBus" => intval($ligne['dblClickBus']),
                    "eventDragDrop" => intval($ligne['eventDragDrop']),
                    //"dragDropEnd" => intval($ligne['dragDropEnd']),
                    "message" => $ligne['parole'],
                    "bloque" => $ligne['bloque'],
                    "bloquePar" => $ligne['bloquePar']
                ]);
            }
        } else {
            echo "Erreur de requête de base de données.";
        }
        echo json_encode($results);
    }
?>