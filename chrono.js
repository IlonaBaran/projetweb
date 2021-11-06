let $niveaux = document.getElementById('niveaux');
let $recup = document.getElementById('recup');

var date = new Date().toLocaleTimeString('fr');
$niveaux.innerText = date;

$recup.addEventListener('input', () => {
    let date_fin = new Date().toLocaleTimeString('fr');
    let $chronometre = date_fin - date;
});





