console.log("bbb");
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
var $iventaire = document.getElementById("inventaire");
var $map = document.getElementById("map");

let map = L.map('map').setView([14.671891, -61.093182], 2);

L.tileLayer('https://wxs.ign.fr/essentiels/geoportail/wmts?layer=GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2&style=normal&tilematrixset=PM&Service=WMTS&Request=GetTile&Version=1.0.0&Format=image/png&TileMatrix={z}&TileCol={x}&TileRow={y}', {
    attribution: 'Données cartographiques : © IGN',
    maxZoom: 19,
}).addTo(map);

fetch('http://localhost/projetweb/objet.php?id=2')
.then(response => JSON.parse(response))
.then(data => console.log(data))

//.then(console.log(JSON.parse('{"result":true, "count":"r"}')))

/*.then( result => {
    console.log('rrr');
    /*result.forEach((elem) => {
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
});*/

// Pour mettre les élèments dans la carte 
var createIcon= function (carte, options, locate, message) {
    //iconSize size of the icon
    //iconAnchor point of the icon which will correspond to marker's location
    //popupAnchor point from which the popup should open relative to the iconAnchor
    let objectIcon = new L.icon({iconUrl:options[0], iconSize:options[1], iconAnchor:options[2], popupAnchor:options[3], maxZoom:10});
    L.marker(locate, {icon: objectIcon}).addTo(carte).bindPopup(message, {fontSize: 10});
    return objectIcon;
};

var carotteIcon = createIcon(map, ['images/carotte.jpg', [25, 18], [2, 9], [0, 0]], [48.85128086291409, 2.3761726420680596], "Je suis la carotte que vous cherchez.");
var mirabelleIcon = createIcon(map, ['images/mirabelle.jpg', [18, 25], [2, 9], [0, 0]], [48.915099121706085, 5.772018723750737], "Je suis la mirabelle que vous cherchez.");

//Evènement sur le mouvement de la souris sur la carte:
/*navigator.geolocation.getCurrentPosition(function (position) {
    mymap.setView([position.coords.latitude, position.coords.longitude], 15);
    L.marker([position.coords.latitude, position.coords.longitude]).addTo(mymap).bindPopup('Votre position').openPopup();
})*/

var eltBusMouse = document.getElementById("busMouse");
//map.on('mousemove', moveBus);
function moveBus(e){
    var image = document.createElement('img');
    image.src = 'images/bus.png';
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

$carotteIcon.on("click", function(){
    console.log("jjj");
    eltBusMouse.innerText='EEEEEEE';
    this.style.visibility = 'hidden';
});
//    $carotteIcon.addEventListener("clik", () => {$carotteIcon.style.visibility = 'hidden';});

/*$map.addEventListener("clik", () => {
    $coeur.style.visibility = 'hidden';
    }
)*/