// Recuperation des donnees 
var $iventaire = document.getElementById("inventaire");
var $map = document.getElementById("map");

let map = L.map('map').setView([48.840900447202635, 2.586785066433026], 5);

L.tileLayer('https://wxs.ign.fr/essentiels/geoportail/wmts?layer=GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2&style=normal&tilematrixset=PM&Service=WMTS&Request=GetTile&Version=1.0.0&Format=image/png&TileMatrix={z}&TileCol={x}&TileRow={y}', {
    attribution: 'Données cartographiques : © IGN',
    maxZoom: 19,
}).addTo(map);



fetch('objet.php')
.then(response => response.json())
.then( result => {console.log(result)})




// fetch('http://localhost/projetweb/objet.php?id=2')
// .then(response => JSON.parse(response))
// .then(data => console.log(data))

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
    // L.marker(locate, {icon: objectIcon}).addTo(carte).bindPopup(message, {fontSize: 10});

    // si on fait carotteIcon, c'est ok pour les supprimer ! il faut juste retrouver comment mettre le message "je suis une carotte"
    var marqueur = L.marker(locate, {icon: objectIcon}).addTo(map).bindPopup(message, {fontSize: 10});

    // return objectIcon;
    return marqueur;
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

// y'a un probleme dans les 5 lignes qui suivent, le code ne s'execute plus ensuite
// $carotteIcon.on("click", function(){
//     console.log("jjj");
//     eltBusMouse.innerText='EEEEEEE';
//     this.style.visibility = 'hidden';
// });









// test ilona
var marker1 = L.marker([48.840900447202635, 2.586785066433026]).addTo(map).bindPopup('Coucou, je viens seulement si vous répondez à ma question <form> Que signifie "fouilla bel belet?"<label>xxxxxx<input type="radio" name="ouinon" value="1"></label><label>xxxxxx<input type="radio" name="ouinon" value="0"></label> <input type="submit" name="envoi" value="OK"></form>');


// marker1.addEventListener("clik", () => {map.removeLayer(marker1);});

var greenIcon = L.icon({
    iconUrl: 'images/bus.png',
    iconSize:     [38, 95], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
var bus = L.marker([48.840952, 2.58678541], {icon: greenIcon}).addTo(map);

bus.on('click', function (e) {
        map.removeLayer(bus);
        map.removeLayer(carotteIcon);

});










// $carotteIcon.addEventListener("clik", () => {$carotteIcon.style.visibility = 'hidden';});


