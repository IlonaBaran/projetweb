<!DOCTYPE html>
  <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <title>Page de fin</title>
    </head>

    <body>
    <div id = chronometre></div>

    <?php

        include("connexion.php");

        $sql = "INSERT INTO joueur (pseudo, temps) VALUES ('$_GET[login]', '00:50:10')";
        if (mysqli_query($link, $sql)) {
            echo "Nouveau enregistrement créé avec succès";
        } else {
            echo "Erreur : " . $sql . "<br>" . mysqli_error($link);
        }
        
        echo "
        <div id=\"retourPP\">
        <form id=\"identifiantForm\" method=\"get\" action=\"pagePrincipale.php\">
                <input type=\"submit\" value=\"Retour à la page principale\">
        </form>
        </div>";
    ?>

    <script src="chrono.js"></script>
  	</body>
</html>

