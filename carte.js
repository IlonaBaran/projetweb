// Recuperation des donnees 
var $inventaire = document.getElementById("inventaire");
var $inventaireObjet1 = document.getElementById("objet1");
var $inventaireObjet2 = document.getElementById("objet2");
var $inventaireObjet3 = document.getElementById("objet3");
var $inventaireObjet4 = document.getElementById("objet4");
var $map = document.getElementById("map");

let map = L.map('map').setView([48.84108949711657, 2.588069801082868], 15);

L.tileLayer('https://wxs.ign.fr/essentiels/geoportail/wmts?layer=GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2&style=normal&tilematrixset=PM&Service=WMTS&Request=GetTile&Version=1.0.0&Format=image/png&TileMatrix={z}&TileCol={x}&TileRow={y}', {
    attribution: 'Données cartographiques : © IGN',
    maxZoom: 19,
}).addTo(map);

// Pour mettre les élèments dans la carte 
var createIcon= function (carte, options, locate, message) {
    //iconSize size of the icon
    //iconAnchor point of the icon which will correspond to marker's location
    //popupAnchor point from which the popup should open relative to the iconAnchor
    let objectIcon = new L.icon({iconUrl:options[0], iconSize:options[1], iconAnchor:options[2], popupAnchor:options[3], maxZoom:10});
    let marqueur = L.marker(locate, {icon: objectIcon});//  .addTo(carte).bindPopup(message, {fontSize: 10});
    return marqueur;
};

/*
//TEST 1
const promesse = new Promise((resolve, reject) => 
    fetch('http://localhost/projetweb/objet.php?id=4')//+String(nb))
    .then(response => response.json())
    .then(result => {
        resolve(createIcon(map, [result["icone"], [50,45], [2, 9], [0, 0]], [result["latitude"], result["longitude"]], result["objet"]));
    })
);
carotteIcon = promesse;
//TEST 2
function createMarker(nb){
    fetch('http://localhost/projetweb/objet.php?id='+String(nb))
    .then(response => response.json())
    .then(result => {
        resolve(createIcon(map, [result["icone"], [50,45], [2, 9], [0, 0]], [result["latitude"], result["longitude"]], result["objet"]));
    });
}

//TEST 3
var createMarker = async function (){
    const response = await fetch('http://localhost/projetweb/objet.php?id=7')//+String(nb));
    const result = await response.json()
    return createIcon(map, [result["icone"], [50,45], [2, 9], [0, 0]], [result["latitude"], result["longitude"]], result["objet"]);
}

var carotteIcon = 4;
carotteIcon = createMarker();
console.log("ON EST LA");
console.log(carotteIcon);
*/

function recup(nb){
    return fetch('http://localhost/projetweb/objet.php?id='+String(nb)).then(response => response.json())
}
var carotteIcon, mirabelleIcon, coindetIcon, zarzelliIcon, fillonIcon, maginotIcon, fougerouseIcon, maytieIcon, cornuIcon, beaupuyIcon, letasseyIcon, heauIcon, mamanBalIcon, balIcon, riviereIcon, fleuryIcon, baranIcon, papaDutrembleIcon, dutrembleIcon, blarelIcon;
//La carotte
recup(1).then(result => {carotteIcon = createIcon(map, [result["icone"], [76,48], [2, 9], [0, 0]], [result["latitude"], result["longitude"]], result["objet"])});
//La mirabelle
recup(2).then(result => {mirabelleIcon = createIcon(map, [result["icone"], [48,76], [2, 9], [0, 0]], [result["latitude"], result["longitude"]], result["objet"])});
//Victor COINDET
recup(3).then(result => {coindetIcon = createIcon(map, [result["icone"], [80,80], [2, 9], [0, 0]], [result["latitude"], result["longitude"]], result["objet"])});
//Amaury ZARZELLI
recup(4).then(result => {zarzelliIcon = createIcon(map, [result["icone"], [72,80], [2, 9], [0, 0]], [result["latitude"], result["longitude"]], result["objet"])});
//Tristan FILLON
recup(5).then(result => {fillonIcon = createIcon(map, [result["icone"], [80,80], [2, 9], [0, 0]], [result["latitude"], result["longitude"]], result["objet"])});
//Amélie MAGINOT
recup(6).then(result => {maginotIcon = createIcon(map, [result["icone"], [42,92], [2, 9], [0, 0]], [result["latitude"], result["longitude"]], result["objet"])});
//Clément FOUGEROUSE
recup(7).then(result => {fougerouseIcon = createIcon(map, [result["icone"], [44,56], [2, 9], [0, 0]], [result["latitude"], result["longitude"]], result["objet"])});
//Tancrède MAYTIE
recup(8).then(result => {maytieIcon = createIcon(map, [result["icone"], [64,36], [2, 9], [32, 0]], [result["latitude"], result["longitude"]], result["objet"])});
//Antoine CORNU
recup(9).then(result => {cornuIcon = createIcon(map, [result["icone"], [44,56], [2, 9], [0, 0]], [result["latitude"], result["longitude"]], result["objet"])});
//Kévin BEAUPUY
recup(10).then(result => {beaupuyIcon = createIcon(map, [result["icone"], [44,56], [2, 9], [0, 0]], [result["latitude"], result["longitude"]], result["objet"])});
//Léa LETASSEY
recup(11).then(result => {letasseyIcon = createIcon(map, [result["icone"], [72,96], [2, 9], [0, 0]], [result["latitude"], result["longitude"]], result["objet"])});
//Vincent HEAU
recup(12).then(result => {heauIcon = createIcon(map, [result["icone"], [44,56], [2, 9], [0, 0]], [result["latitude"], result["longitude"]], result["objet"])});
//Maman BAL
recup(13).then(result => {mamanBalIcon = createIcon(map, [result["icone"], [44,51], [2, 9], [0, 0]], [result["latitude"], result["longitude"]], result["objet"])});
//Félix BAL
recup(14).then(result => {balIcon = createIcon(map, [result["icone"], [68,72], [2, 9], [0, 0]], [result["latitude"], result["longitude"]], result["objet"])});
//Baptiste RIVIERE
recup(15).then(result => {riviereIcon = createIcon(map, [result["icone"], [44,84], [2, 9], [0, 0]], [result["latitude"], result["longitude"]], result["objet"])});
//Mélodie FLEURY
recup(16).then(result => {fleuryIcon = createIcon(map, [result["icone"], [30,60], [2, 9], [0, 0]], [result["latitude"], result["longitude"]], result["objet"])});
//Ilona BARAN
recup(17).then(result => {baranIcon = createIcon(map, [result["icone"], [40,64], [2, 9], [0, 0]], [result["latitude"], result["longitude"]], result["objet"])});
//Papa DUTREMBLE
recup(18).then(result => {papaDutrembleIcon = createIcon(map, [result["icone"], [80,38], [2, 9], [0, 0]], [result["latitude"], result["longitude"]], result["objet"])});
//Aymeric DUTREMBLE
recup(19).then(result => {dutrembleIcon = createIcon(map, [result["icone"], [30,60], [2, 9], [0, 0]], [result["latitude"], result["longitude"]], result["objet"])});
//Maeve BLAREL
recup(20).then(result => {blarelIcon = createIcon(map, [result["icone"], [44,56], [2, 9], [0, 0]], [result["latitude"], result["longitude"]], result["objet"])});
//Le bus 48*48




// TEST ILONA 2
$message = document.getElementById("message");
$bus = document.getElementById("bus");
$validate = document.getElementById("validate");

var marker1 = L.marker([48.840900447202635, 2.586785066433026]).addTo(map);

marker1.on('click', function (e) {
    marker1.bindPopup('Oh dingue, vous êtes venus !')
    // $message.innerHTML += "ceci est un test";
    // $bus.innerHTML += '<form method=\"get\" action=\"\"><label>reponse1<input type="radio" name="ouinon" value="1"></label><label>reponse2<input type="radio" name="ouinon" value="0"></label><button id="validate">Valider</button></form>';
    // var valeur = document.querySelector('input[name="ouinon"]:checked').value;
    // let valeur = document.querySelector('input[name="ouinon"]:checked').value;
});


$validate.addEventListener('click', () => {
    fetch('objet.php', {
        body: data
    })
    .then(response => response.json())
    .then( result => {
        $message.innerHTML += "00000000000result";
    });
});

// if (valeur == 1){
//     marker1.bindPopup('Tu as reussi ! ');
//     $message.innerHTML = "miaou miaou";
//     // marker1.removeLayer(bus);
// }
// else {
//     $message.innerHTML = "miaou miaou mais teste non reussi"
//     marker1.bindPopup('while tant que valeur est different de 1 il faut recommencer');
// }
// FIN TEST ILONA 


















console.log(map.getZoom());
console.log("uoiii");
var groupeIcon = new L.layerGroup([carotteIcon, mirabelleIcon, coindetIcon, zarzelliIcon, fillonIcon, maginotIcon, fougerouseIcon, maytieIcon, cornuIcon, beaupuyIcon, letasseyIcon, heauIcon, mamanBalIcon, balIcon, riviereIcon, fleuryIcon, baranIcon, papaDutrembleIcon, dutrembleIcon, blarelIcon]);
console.log("ffooo");
groupeIcon.addTo(map);
console.log("ff");
//console.log(groupeIcon);

//TEST EVENT A APPLIQUER A TOUS NOS OBJETS
var carotte = [createIcon(map, ['images/carotte.jpg', [50, 60], [2, 9], [0, 0]], [48.85128086291409, 2.3761726420680596], "Je suis la carotte que vous cherchez."), 'images/carotte.jpg'];
var mirabelle = [createIcon(map, ['images/mirabelle.jpg', [56, 50], [2, 9], [0, 0]], [48.915099121706085, 5.772018723750737], "Je suis la mirabelle que vous cherchez."), 'images/mirabelle.jpg'];
//GROUPE OK
var groupeIcon = new L.layerGroup([carotte[0], mirabelle[0]]);
console.log(groupeIcon);
//ZOOM OK
map.on("zoomend", function(e) {
    let zoom = map.getZoom();
    if (zoom>5){
        groupeIcon.addTo(map);
    } else{
        groupeIcon.remove();
    }
});

//DBLCLICK
mirabelle[0].on('dblclick', function (e) {
    console.log("mirabelle supprimer");
    mirabelle[0].remove();
    var image = document.createElement('img');
    image.src = mirabelle[1];
    $inventaireObjet1.appendChild(image);
});
//DRAG - DROP


var eltBusMouse = document.getElementById("busMouse");
//map.on('mousemove', moveBus);
function moveBus(e){
    var image = document.createElement('img');
    image.src = 'images/bus/bus1.png';
    image.width = "20";
    eltBusMouse.innerHTML = '';
    //eltBusMouse.innerText = 'IIII';
    eltBusMouse.appendChild(image);
    eltBusMouse.style.position = "fixed";
    eltBusMouse.style.top = e.originalEvent.clientY+"px"; //Coordonnées de la souris
    eltBusMouse.style.left = e.originalEvent.clientX+"px";
    eltBusMouse.style.zIndex = 1000;
}

document.addEventListener('change', function(){
    if (document.getElementById("afficheBus").checked){
        eltBusMouse.style.visibility = "visible";
    } else {
        eltBusMouse.style.visibility = "hidden";
    }
})




// test ilona
// var marker1 = L.marker([48.840900447202635, 2.586785066433026]).addTo(map).bindPopup('Coucou, je viens seulement si vous répondez à ma question <form> Que signifie "fouilla bel belet?"<label>xxxxxx<input type="radio" name="ouinon" value="1"></label><label>xxxxxx<input type="radio" name="ouinon" value="0"></label> <input type="submit" name="envoi" value="OK"></form>');
// marker1.addEventListener("clik", () => {map.removeLayer(marker1);});
// var greenIcon = L.icon({
//     iconUrl: 'images/bus.png',
//     iconSize:     [38, 95], // size of the icon
//     iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
//     popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
// });
// var bus = L.marker([48.840952, 2.58678541], {icon: greenIcon}).addTo(map);

// bus.on('click', function (e) {
//         map.removeLayer(bus);
//         map.removeLayer(carotteIcon);

// });


var greenIcon = L.icon({
    iconUrl: 'images/bus/bus1.png',
    iconSize:     [168, 35], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

//var bus = L.marker([48.840952, 2.58678541], {icon: greenIcon}).addTo(map);

// bus.on('click', function (e) {
//     console.log("ilona ca fonctionne");
//         map.removeLayer(marker1); 
// });}
