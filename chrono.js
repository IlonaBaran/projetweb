let $chrono = document.getElementById('chrono');
let $recup = document.getElementById('recup');

var date = new Date().toLocaleTimeString('fr');
$chrono.innerText = date;

$recup.addEventListener('input', () => {
    let date_fin = new Date().toLocaleTimeString('fr');
});

$chrono.innerText = "okokook"; 




