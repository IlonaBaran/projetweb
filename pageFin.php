<!DOCTYPE html>
  <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <title>Page de fin</title>
    </head>

    <body>
    <?php
        include("connexion.php");

        $sql = "INSERT INTO joueur (position, pseudo, temps) VALUES (5, '$_GET[login]', '00:05:24')";
        if (mysqli_query($link, $sql)) {
            echo "Nouveau enregistrement créé avec succès";
        } else {
            echo "Erreur : " . $sql . "<br>" . mysqli_error($link);
        }
    ?>
  	</body>
</html>

