// Recuperation des donnees 
var $inventaire = document.getElementById("inventaire");
var $inventaireObjet1 = document.getElementById("objet1");
var $inventaireObjet2 = document.getElementById("objet2");
var $inventaireObjet3 = document.getElementById("objet3");
var $inventaireObjet4 = document.getElementById("objet4");
var $bus = document.getElementById("bus");
var $map = document.getElementById("map");
var valueReponse = document.getElementById("valueReponse");
var objetsLibere = [];
//Compteur de l'avancée du jeu
//var compteur = 0;
var progresSum = document.getElementById("progressnum");
let map = L.map('map').setView([48.84108949711657, 2.588069801082868], 17);

L.tileLayer('https://wxs.ign.fr/essentiels/geoportail/wmts?layer=GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2&style=normal&tilematrixset=PM&Service=WMTS&Request=GetTile&Version=1.0.0&Format=image/png&TileMatrix={z}&TileCol={x}&TileRow={y}', {
    attribution: 'Données cartographiques : © IGN',
    maxZoom: 19,
}).addTo(map);

// CODE HISTOIRE
var btn = document.getElementById("suiteStory");
var recupFetch = function(nb) {
    fetch('http://localhost/projetweb/objet.php?id='+String(nb)).then(response => response.json())
    .then(result => {
        var objectIcon = new L.icon({iconUrl:result["icone"], iconSize:[result["iconeSizeLarg"], result["iconeSizeLong"]], iconAnchor:[2,9], popupAnchor:[0,0], maxZoom:10});
        var marker = L.marker([result["latitude"], result["longitude"]], {icon:objectIcon, draggable:true}).bindPopup(result["message"], {fontSize: 10}).addTo(map);
        marker.openPopup();
        //Partie Evènement
        btn.addEventListener('click', function(){
            var compteur = progresSum.innerText;
            compteur++;
            progresSum.innerText = compteur;
            //marker._popup.setContent("Va falloir aller les chercher...tu peux t'en occuper ? Je dois être à l'école à 11h30 pour acheter mes billets du Hellfest")
        });
        map.on("zoomend", function(e) {
            let zoom = map.getZoom();
            if (zoom>5) {
                marker.addTo(map);
            } else{
                marker.remove();
            }
        });
        if (result["eventDragdrop"]) {
            marker.on("dragend", function(e) {
                if (marker.getLatLng().lat < 48.85295997870213 && marker.getLatLng().lat > 48.846300499957565 && marker.getLatLng().lng > 2.5831615564187786 && marker.getLatLng().lng < 2.6084756265666713){
                    return true;
                } else {
                    return false;
                }
            });
        }
        else if (result["eventDblClick"]) {
            marker.on('dblclick', function (e) {
                marker.remove();
                var image = document.createElement('img');
                image.src = result["icone"];
                if (result["dblClickBus"]) {
                    $bus.appendChild(image);
                } else {
                    $inventaireObjet1.appendChild(image);
                }
            })
        }
        
    })
};

var appliqueEventZoomend = function(marker) {
    map.on("zoomend", function(e) {
        let zoom = map.getZoom();
        if (zoom>10) {
            marker.addTo(map);
        } else{
            marker.remove();
        }
    });
}
var appliqueEventDragend = function(marker) {
    marker.on("dragend", function(e) {
        if (marker.getLatLng().lat < 48.85295997870213 && marker.getLatLng().lat > 48.846300499957565 && marker.getLatLng().lng > 2.5831615564187786 && marker.getLatLng().lng < 2.6084756265666713){
            return true;
        } else {
            return false;
        }
    });
}
var appliqueEventDblclick = function(marker, imgSrc, boolEvent) {
    marker.on('dblclick', function (e) {
        marker.remove();
        var image = document.createElement('img');
        image.src = imgSrc;
        if (boolEvent) {
            $bus.appendChild(image);
        } else {
            $inventaireObjet1.appendChild(image);
        }
    })
}

//recupFetch(3);
/*btn.addEventListener('click', function(){
    recupFetch(progresSum.innerText);
});*/
//Faire apparaitre Victor et Amaury à l'ENSG
var compteur = progresSum.innerText;
fetch('http://localhost/projetweb/objet.php?objet=COINDET&objet=ZARZELLI&objet=FILLON').then(response => response.json())
    .then(results => {
        var result = results[0];
        var result2 = results[1];
        var result3 = results[2];
        //COINDET
        var objectIcon = new L.icon({iconUrl:result["icone"], iconSize:[result["iconeSizeLarg"], result["iconeSizeLong"]], iconAnchor:[2,9], popupAnchor:[result["iconeSizeLarg"]/2,0], maxZoom:10});
        var paroles = result["message"].split("$");
        var marker = L.marker([result["latitude"], result["longitude"]], {icon:objectIcon, draggable:true}).bindPopup(paroles[0], {fontSize: 10}).addTo(map).openPopup();
        paroles = paroles.slice(1,);
        //appliqueEventZoomend(marker);
        //ZARZELLI
        var objectIcon2 = new L.icon({iconUrl:result2["icone"], iconSize:[result2["iconeSizeLarg"], result2["iconeSizeLong"]], iconAnchor:[2,9], popupAnchor:[result2["iconeSizeLarg"]/2,0], maxZoom:10});
        var paroles2 = result2["message"].split("$");
        var marker2 = L.marker([result2["latitude"], result2["longitude"]], {icon:objectIcon2, draggable:true}).bindPopup(paroles2[0], {fontSize: 10}).addTo(map);
        //appliqueEventZoomend(marker2);
        //FILLON
        var objectIcon3 = new L.icon({iconUrl:result3["icone"], iconSize:[result3["iconeSizeLarg"], result3["iconeSizeLong"]], iconAnchor:[2,9], popupAnchor:[result3["iconeSizeLarg"]/2,0], maxZoom:10});
        var paroles3 = result3["message"].split("$");
        var marker3 = L.marker([result3["latitude"], result3["longitude"]], {icon:objectIcon3, draggable:true}).bindPopup(paroles3[0], {fontSize: 10});
        btn.addEventListener('click', function(){
            compteur++;
            progresSum.innerText = compteur;
            if (compteur<=4){
                if (compteur%2 != 0) {
                    marker2._popup.setContent(paroles2[0]);
                    marker2.openPopup();
                    paroles2 = paroles2.slice(1,);
                } else {
                    if (compteur==4){
                        marker3.addTo(map);
                        //appliqueEventZoomend(marker3);
                    }
                    marker._popup.setContent(paroles[0]);
                    marker.openPopup();
                    paroles = paroles.slice(1,);
                } 
            } else {
                marker.remove();
                if (compteur%2 != 0) {
                    marker2._popup.setContent(paroles2[0]);
                    marker2.openPopup();
                    paroles2 = paroles2.slice(1,);
                } else {
                    marker3._popup.setContent(paroles3[0]);
                    marker3.openPopup();
                    paroles3 = paroles3.slice(1,);
                }
            } if (compteur>7) {
                marker2.remove();
                marker3.closePopup();
            }
        });
    })

btn.addEventListener('click', function(){
    if (compteur==7) {
        btn.style.visibility = 'hidden';
    }
});

//Faire apparaitre Tristan Fillon au niveau du portail de sécurité
//Faire apparaitre Jeanine dans l'ENSG et deplacer Amaury a côté de Jeanine
console.log(progresSum.textContent);
progresSum.addEventListener('DOMSubtreeModified', function(){
    if (compteur==8) {
        fetch('http://localhost/projetweb/objet.php?id=21').then(response => response.json())
        .then(result => {
            //JEANINE
            var objectIcon = new L.icon({iconUrl:result["icone"], iconSize:[result["iconeSizeLarg"], result["iconeSizeLong"]], iconAnchor:[2,9], popupAnchor:[result["iconeSizeLarg"]/2,0], maxZoom:10});
            var marker = L.marker([result["latitude"], result["longitude"]], {icon:objectIcon, draggable:true}).bindPopup("...", {fontSize: 10}).addTo(map).openPopup();
            fetch('http://localhost/projetweb/objet.php?id=22').then(response => response.json())
            .then(result2 => {
                //ZARZELLI2
                map.setView([result2["latitude"], result2["longitude"]],20);
                var objectIcon2 = new L.icon({iconUrl:result2["icone"], iconSize:[result2["iconeSizeLarg"], result2["iconeSizeLong"]], iconAnchor:[2,9], popupAnchor:[result2["iconeSizeLarg"]/2,0], maxZoom:10});
                var paroles2 = result2["message"].split("$");
                var marker2 = L.marker([result2["latitude"], result2["longitude"]], {icon:objectIcon2, draggable:true}).bindPopup(paroles2[0], {fontSize: 10}).addTo(map).openPopup();
                paroles2 = paroles2.slice(1,);
                valueReponse.addEventListener('input', function(){
                    if (valueReponse.value.toLowerCase() == result["bloquePar"]){
                        marker.bindPopup(result["message"], {fontSize: 10}).openPopup();
                        fetch('http://localhost/projetweb/objet.php?id=23').then(response => response.json())
                        .then(result3 => {
                            //MIGNIBUS
                            L.marker([result3["latitude"], result3["longitude"]], {icon:new L.icon({iconUrl:result3["icone"], iconSize:[result3["iconeSizeLarg"], result3["iconeSizeLong"]], iconAnchor:[2,9], popupAnchor:[result3["iconeSizeLarg"]/2,0], maxZoom:10}), draggable:true}).bindPopup(result3["message"], {fontSize: 10}).addTo(map);
                            btn.style.visibility = 'visible';
                            btn.addEventListener('click', function(){
                                if (compteur==9) {
                                    marker2.bindPopup(paroles2[0], {fontSize: 10}).openPopup();
                                }
                            });
                        })
                    }
                });
            })
        })
    }
});

