var $indice = document.getElementById("indice");
var $bus = document.getElementById("bus");
var $inventaire = document.getElementById("inventaire");


$indice.addEventListener('click', () => {
    document.getElementById("affichage").innerHTML='<object type="text/html" data=".html/indice.html" ></object>';
})
$bus.addEventListener('click', () => {
    document.getElementById("affichage").innerHTML='<object type="text/html" data=".html/bus.html" ></object>';
})
$inventaire.addEventListener('click', () => {
    document.getElementById("affichage").innerHTML='<object type="text/html" data=".html/inventaire.html" ></object>';
})


// Recuperation des donnees 
var $iventaire = document.getElementById("iventaire");
var $map = document.getElementById("map");

let map = L.map('map').setView([14.671891, -61.093182], 15);

L.tileLayer('https://wxs.ign.fr/essentiels/geoportail/wmts?layer=GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2&style=normal&tilematrixset=PM&Service=WMTS&Request=GetTile&Version=1.0.0&Format=image/png&TileMatrix={z}&TileCol={x}&TileRow={y}', {
    attribution: 'Données cartographiques : © IGN',
    maxZoom: 19,
}).addTo(map);

// Pour mettre une image dans la carte 
var coeurIcon = L.icon({
    iconUrl: 'images/coeur.jpg',
    iconSize:     [38, 95], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    
});
L.marker([14.671891, -61.093182], {icon: coeurIcon}).addTo(map);


let data = new FormData();
fetch('objet.php', {
    method: 'post',
    body: data
})
.then(response => response.json())
.then( result => {
    console.log('rrr');
    result.forEach((elem) => {
        // Image de Mirabelle
        console.log(elem['longitude']);
        var mirabelleIcon = L.icon({
            iconUrl: elem['icone'],
            iconSize: [38, 95], // size of the icon
            iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
            popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
        
        });
        console.log('rrr34');
        L.marker([elem['latitude'], elem['longitude']], {icon: mirabelleIcon}).addTo(map);
    });
    console.log('rrr4');
});
console.log('rrr56');

var mirabelle2Icon = L.icon({
    iconUrl: "images/mirabelle.jpg",
    iconSize: [38, 95], // size of the icon
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor

});
L.marker([40, 10], {icon: mirabelle2Icon}).addTo(map);

$map.addEventListener("clik", () => {
    $coeur.style.visibility = 'hidden';
    }
)

