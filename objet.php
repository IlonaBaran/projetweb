<?php
    $results = [];
    //echo $_GET['objet'];
    include("connexion.php");
    if (isset($_GET['id'])) {
        $requete = "SELECT id, objet, latitude, longitude, zoommini, icone, iconeSizeLarg, iconeSizeLong, eventDblClick, dblClickBus, eventDragDrop, dragDropEnd, parole, bloque, bloquePar FROM objet WHERE id = {$_GET['id']}";
        if ($result = mysqli_query($link, $requete)) {
            while ($ligne = mysqli_fetch_assoc($result)) {
                $results = Attribute($results, $ligne);
            }
        } else {
            echo "Erreur de requête de base de données.";
        }
        foreach ($results as $result) {
            echo json_encode($result);
        }
    } 
    else if (isset($_GET['objet'])) {
        $requete = "SELECT id, objet, latitude, longitude, zoommini, icone, iconeSizeLarg, iconeSizeLong, eventDblClick, dblClickBus, eventDragDrop, dragDropEnd, parole, bloque, bloquePar FROM objet WHERE objet = {$_GET['objet']}";
        if ($result = mysqli_query($link, $requete)) {
            while ($ligne = mysqli_fetch_assoc($result)) {
                $results = Attribute($results, $ligne);
            }
        } else {
            echo "Erreur de requête de base de données.";
        }
        foreach ($results as $result) {
            echo json_encode($result);
        }
    } 
    else if (isset($_GET['dialogue'])) {
        if ($_GET['dialogue'] == 0) {
            $requete = "SELECT id, objet, latitude, longitude, zoommini, icone, iconeSizeLarg, iconeSizeLong, eventDblClick, dblClickBus, eventDragDrop, dragDropEnd, parole, bloque, bloquePar FROM objet WHERE objet='COINDET' OR objet='ZARZELLI' OR objet='FILLON'";
            if ($result = mysqli_query($link, $requete)) {
                while ($ligne = mysqli_fetch_assoc($result)) {
                    $results = Attribute($results, $ligne);
                }
            } else {
                echo "Erreur de requête de base de données.";
            }
            //duplicata youzi do 5 shedule frizzi 44

            echo json_encode($results);
        } else if ($_GET['dialogue'] == 1) {
            $requete = "SELECT id, objet, latitude, longitude, zoommini, icone, iconeSizeLarg, iconeSizeLong, eventDblClick, dblClickBus, eventDragDrop, dragDropEnd, parole, bloque, bloquePar FROM objet WHERE objet='RIVIERE' OR objet='BAL'";
            if ($result = mysqli_query($link, $requete)) {
                while ($ligne = mysqli_fetch_assoc($result)) {
                    $results = Attribute($results, $ligne);
                }
            } else {
                echo "Erreur de requête de base de données.";
            }
            //duplicata youzi do 5 shedule frizzi 44

            echo json_encode($results);
        } else if ($_GET['dialogue'] == 2) {
            $requete = "SELECT id, objet, latitude, longitude, zoommini, icone, iconeSizeLarg, iconeSizeLong, eventDblClick, dblClickBus, eventDragDrop, dragDropEnd, parole, bloque, bloquePar FROM objet WHERE objet='COINDET2' OR objet='AHR' OR objet='BUS'";
            if ($result = mysqli_query($link, $requete)) {
                while ($ligne = mysqli_fetch_assoc($result)) {
                    $results = Attribute($results, $ligne);
                }
            } else {
                echo "Erreur de requête de base de données.";
            }
            //duplicata youzi do 5 shedule frizzi 44

            echo json_encode($results);
        } 
    }
    else if (isset($_GET['conversation'])) {
        if ($_GET['conversation'] == 1) {
            $requete = "SELECT id, dialogueBus, imageBus FROM discussion WHERE id='1'";
            if ($result = mysqli_query($link, $requete)) {
                while ($ligne = mysqli_fetch_assoc($result)) {
                    $results = AttributeDialogue($results, $ligne);
                }
            } else {
                echo "Erreur de requête de base de données.";
            }
            //duplicata youzi do 5 shedule frizzi 44
            echo json_encode($results);
        }
        else if ($_GET['conversation'] == 2) {
            $requete = "SELECT id, dialogueBus, imageBus FROM discussion WHERE id='2'";
            if ($result = mysqli_query($link, $requete)) {
                while ($ligne = mysqli_fetch_assoc($result)) {
                    $results = AttributeDialogue($results, $ligne);
                }
            } else {
                echo "Erreur de requête de base de données.";
            }
            //duplicata youzi do 5 shedule frizzi 44
            echo json_encode($results);
        }
    }

    function Attribute($tab, $ligne) {
        array_push($tab, [
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
            "dragDropEnd" => $ligne['dragDropEnd'],
            "message" => $ligne['parole'],
            "bloque" => $ligne['bloque'],
            "bloquePar" => $ligne['bloquePar'],
        ]);
        return $tab;
    }

    function AttributeDialogue($tab, $ligne) {
        array_push($tab, [
            "value" => intval($ligne['id']),
            "dialogueBus" => ($ligne['dialogueBus']),
            "imageBus" => ($ligne['imageBus']),
        ]);
        return $tab;
    }

?>