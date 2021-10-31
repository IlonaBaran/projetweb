//test but : hall to fame, affichage des 5 meilleurs scores (5 : arbitraire)

$score = document.getElementById("score"); //la div où on veut afficher le classement a pour id=score

//mais enfaite, ca on n'en a même pas besoin non ? faudrait tout faire en php ??? (enfin l'affichage du tableau)
fetch('pagePrincipale.php', {
    method: 'post'
})
.then(response => response.json())
.then( result => {
    var compteur = 0;
    $score.innerHTML = "<table><tr><th>position</th><th>pseudo</th><th>temps réalisé</th></tr>" //1ere ligne avec les entetes du tableau
    result.forEach( (elem) => {
        $score.innerHTML += "<tr><td>" + compteur + "</td><td>" + elem[0] + "</td><td>" + elem[1] + "</td></tr>";
        compteur++;
    });
    $score.innerHTML = "</table>"
});
