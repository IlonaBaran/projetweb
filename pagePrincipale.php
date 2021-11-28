<html lang="fr">
  <head>
    <meta charset="UTF-8">
    <meta name="description" content="Page principale de l'Escape Game de Maeve et Ilona">
    <link rel="stylesheet" href="css/commun.css">
    <link rel="stylesheet" href="css/styleIndex.css">
    <title>Escape Game</title>
  </head>

  <body>
    <div id="contener1">
        <div id="titre">IT'2 une fois</div>
    </div>

    <div id="contener2">
        <div id="contexte" class='contour'>
            <p> Cet escape game géographique a été créé par Maeve et Ilona, deux elèves ingénieures deuxième année à l'Ecole Nationale des Sciences Géographiques.</p>
            ___________________________________________
            <p> Lundi matin, il est 8h55. Pour les IT2, le cours de WEB commence dans 5 minutes. 
                Malheureusement, il n'y a encore personne devant les salles de cours, même Clément n'est pas encore présent. 
                Le week-end fut certainement bien arrosé : retour du WEI pour certains, grosse soirée belotte pour d'autres. </p>
            <p> Lundi matin, il est 9h00, il n'y a toujours aucun elève. Ni même de professeur.</p>
            <p> Mais où sont-ils passés ?</p>
            <p> Après être passés chez Jeanine, Amaury de et Victor, comme à leur habitude, arrivent enfin devant leurs salles de cours. 
            <p> Lundi matin, il est 9h05. Ils ne comprennent pas l'absence des elèves. Après un cours temps de réfléxion, ils décident de parcourir le monde à leur recherche.....</p>
            <p> Ils vous embarquent dans un voyage aux quatre coins du monde dans le but de remplir leur salle de cours....</p>
            <p> Si vous voulez aider Amaury et Victor, vous avez jusqu'à <strong> 9h30 </strong> pour remplir cette salle de cours. 
                On vous laisse découvrir la folle aventure afin de retrouver tous les élèves.</p>    
            ___________________________________________
            <p><strong> Consignes et déroulement du jeu </strong></p>
            <p> - Lorsque le bouton "Suivant" est présent, il faut cliquer dessus pour avancer </p>
            <p> - Le jeu ne peut se finir que si vous avez récupéré les quatre peluches </p>
            <p> - Nicolas Paparoditis sera d'une aide précieuse à tout instant du jeu (son bureau est en C101)</p>

                
        </div>

        <div id="connexion" class='contour'> 
            <form id="pseudo" method="get" action="carte.php">
                <input type="text" name="login" required minlength="1" maxlength="20" size="20" placeholder="Rentrez un pseudo">
                <input type="submit" value="C'est parti !">
            </form>
        </div>

        <div id="score" class='contour'>
            
            <div id="titreScore">Hall Of Fame</div>

            <?php
              include("connexion.php");
              $tableau_classement = [];
              $requete = "SELECT pseudo, temps FROM joueur ORDER BY temps ASC LIMIT 10";
              if ($result = mysqli_query($link, $requete)) {
                  while ($ligne = mysqli_fetch_assoc($result)) {
                      array_push($tableau_classement, [
                          "pseudo" => $ligne['pseudo'],
                          "temps" => $ligne['temps']
                      ]);
                  }
  
                  $table_str = "<table>";
                  $ligne = "";
                  $position = 1;
  
                  foreach ($tableau_classement as $elem) {
                      $table_str .= "<tr><td>".$position;
                      $table_str .= "e ";
                      foreach ($elem as $key => $value) {
                          $ligne .= $value;
                          $ligne .= "  ";
                      }
                      
                      $table_str .= $ligne;
                      $table_str .= "</td></tr>";
                      $position ++; 
                      $ligne = "";
                  }
                  $table_str .= "</table>";
                  echo $table_str;
              }
              else {
                  echo "Erreur de requête de base de données.";
              }
                ?>
        </div>
    </div>

    <footer>
        <a href="html/planDuSite.html" target="_blank"> Plan du Site</a>
        -
        <a href="html/mentionsLegales.html" target="_blank"> Mentions légales </a>
        -
        <a href="html/credits.html" target="_blank"> Crédits </a>
    </footer>

  </body>
</html>