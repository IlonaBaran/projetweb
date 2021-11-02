// Recuperation des donnees 
var $iventaire = document.getElementById("iventaire");
var $map = document.getElementById("map");

let map = L.map('map').setView([14.671891, -61.093182], 15);

L.tileLayer('https://wxs.ign.fr/essentiels/geoportail/wmts?layer=GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2&style=normal&tilematrixset=PM&Service=WMTS&Request=GetTile&Version=1.0.0&Format=image/png&TileMatrix={z}&TileCol={x}&TileRow={y}', {
    attribution: 'Données cartographiques : © IGN',
    maxZoom: 19,
}).addTo(map);

// Pour mettre une image dans la carte 
var greenIcon = L.icon({
    iconUrl: 'coeur.jpg',
    iconSize:     [38, 95], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
L.marker([14.671891, -61.093182], {icon: greenIcon}).addTo(map);

$map.addEventListener("clik", () => {
    $coeur.style.display = 'none';
    }
)