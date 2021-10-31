<?php
    $link = pg_connect('host=localhost dbname=joueur user=postgres password=postgres');

    if (!$link) {
        die('Erreur de connexion');
    }
?>

