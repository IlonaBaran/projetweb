<!DOCTYPE html>
  <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <title>Page de fin</title>
    </head>

    <body>
    <!-- <div id = chronometre></div> -->

    <?php
        include("connexion.php");

        $today = date("H:i:s"); 
        // $sql = "INSERT INTO joueur (pseudo, temps) VALUES ('$_GET[login]', '00:50:10')";
        // if (mysqli_query($link, $sql)) {
        //     echo "Nouveau enregistrement créé avec succès";
        // } else {
        //     echo "Erreur : " . $sql . "<br>" . mysqli_error($link);
        // }

        $sql = "UPDATE joueur SET temps = '$today'";
        if (mysqli_query($link, $sql)) {
            echo "Nouveau enregistrement créé avec succès LE SSSSSS";
        } else {
            echo "Erreur : " . $sql . "<br>" . mysqli_error($link);
        }
        
        $sql1 = "UPDATE joueur SET debutchrono = ABS(time(debutchrono)- '$today')";
        if (mysqli_query($link, $sql1)) {
          echo "Nouveau enregistrement créé avec succès LE XXXXXXX";
        } else {
            echo "Erreur : " . $sql1 . "<br>" . mysqli_error($link);
        }

        echo "
        <div id=\"retourPP\">
        <form id=\"identifiantForm\" method=\"get\" action=\"pagePrincipale.php\">
                <input type=\"submit\" value=\"Retour à la page principale\">
        </form>
        </div>";


      // requet sql : determiner le nombre le personne dont le chrono est meilleur que le joueur qui vient de jouer
      // il faut juste trouver comment recuperer le temps réalisé 
        // $sql = "SELECT COUNT(pseudo) FROM joueur WHERE temps < 'temps realisé";


        echo "
        <div id=\"classementPersonnel\">
        Bravo ! Vous avez fini l'escape Game de Maeve et Ilona.
        Vous etes classé : 
        </div>";

       ?>

    <script src="chrono.js"></script>
  	</body>
</html>

