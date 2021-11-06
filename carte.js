// Recuperation des donnees 
var $iventaire = document.getElementById("iventaire");
var $map = document.getElementById("map");

let map = L.map('map').setView([14.671891, -61.093182], 1);

L.tileLayer('https://wxs.ign.fr/essentiels/geoportail/wmts?layer=GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2&style=normal&tilematrixset=PM&Service=WMTS&Request=GetTile&Version=1.0.0&Format=image/png&TileMatrix={z}&TileCol={x}&TileRow={y}', {
    attribution: 'Données cartographiques : © IGN',
    maxZoom: 19,
}).addTo(map);

/*var LeafIcon = L.Icon.extend({
    options: {
        shadowUrl: 'images/coeur.jpg',
        iconSize:     [38, 95],
        shadowSize:   [50, 64],
        iconAnchor:   [22, 94],
        shadowAnchor: [4, 62],
        popupAnchor:  [-3, -76]
    }
});*/

var greenIcon = new LeafIcon({iconUrl: 'images/mirabelle.jpg'}),
//    redIcon = new LeafIcon({iconUrl: 'leaf-red.png'}),
//    orangeIcon = new LeafIcon({iconUrl: 'leaf-orange.png'});

L.icon = function (options) {
    return new L.Icon(options);
};

L.marker([51.5, -0.09], {icon: greenIcon}).addTo(map).bindPopup("I am a mirabelle.");
//L.marker([51.495, -0.083], {icon: redIcon}).addTo(map).bindPopup("I am a red leaf.");
//L.marker([51.49, -0.1], {icon: orangeIcon}).addTo(map).bindPopup("I am an orange leaf.");

// Pour mettre une image dans la carte 
/*var coeurIcon = L.icon({
    iconUrl: 'images/coeur.jpg',
    iconSize:     [38, 95], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    
});
L.marker([14.671891, -61.093182], {icon: coeurIcon}).addTo(map);

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
*/