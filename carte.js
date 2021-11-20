// Recuperation des donnees 
var $inventaire = document.getElementById("inventaire");
var $inventaireObjet1 = document.getElementById("objet1");
var $inventaireObjet2 = document.getElementById("objet2");
var $inventaireObjet3 = document.getElementById("objet3");
var $inventaireObjet4 = document.getElementById("objet4");
var $bus = document.getElementById("bus");
var $map = document.getElementById("map");
var valueReponse = document.getElementById("valueReponse");
var noValueReponse = document.getElementById("noValueReponse");
var valueReponseValide = document.getElementById("valide");
var message = document.getElementById("message");
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
        var objectIcon = new L.icon({iconUrl:result["icone"], iconSize:[result["iconeSizeLarg"], result["iconeSizeLong"]], iconAnchor:[2,9], popupAnchor:[result["iconeSizeLarg"]/2,0], maxZoom:10});
        var paroles = result["message"].split("$");
        console.log(result["latitude"], result["longitude"]);
        var marker = L.marker([result["latitude"], result["longitude"]], {icon:objectIcon, draggable:true}).bindPopup(paroles[0], {fontSize: 10}).addTo(map);
        paroles = paroles.slice(1,);
        console.log(paroles[0])
        marker.openPopup();
        //Partie Evènement
        //appliqueEventZoomend(marker);
        if (result["eventDragDrop"]) {
            appliqueEventDragend(marker,result["dragDropEnd"].split("$"));
        }
        else if (result["eventDblClick"]) {
            appliqueEventDblclick(marker,result["icone"],result["dblClickBus"]);
        }
        if (result["bloque"] == "O") {
            recupFetchObjet(result["bloquePar"],marker,result["icone"],paroles[0],nb);
        } else if (result["bloque"] == "C") {
            valueReponseValide.addEventListener('click', function(){
                noValueReponse.innerText = "";
                if (strNoAccent(valueReponse.value.toLowerCase()) == result["bloquePar"] || result["bloquePar"] == null){
                    map.closePopup();
                    marker._popup.setContent(paroles[0]);
                    marker.openPopup();
                    appliqueEventDblclick(marker,result["icone"],result["dblClickBus"]);
                    marker.on('dblclick', function (e) {
                        if (nb+1<15){
                            recupFetch(nb+1);
                        }
                    });
                } else {
                    noValueReponse.innerText = "Faux, retente ta chance!";
                }
            });
        } else {
            marker.on('dblclick', function (e) {
                marker.remove();
                recupFetch(nb+1);
            })
        }
    })
};

var recupFetchObjet = function(nb, markerB, iconeB, messageB, n) {
    fetch('http://localhost/projetweb/objet.php?id='+String(nb)).then(response => response.json())
    .then(result => {
        var objectIcon = new L.icon({iconUrl:result["icone"], iconSize:[result["iconeSizeLarg"], result["iconeSizeLong"]], iconAnchor:[2,9], popupAnchor:[result["iconeSizeLarg"]/2,0], maxZoom:10});
        var marker = L.marker([result["latitude"], result["longitude"]], {icon:objectIcon, draggable:true}).bindPopup(result["message"], {fontSize: 10}).addTo(map);
        //Partie Evènement
        //appliqueEventZoomend(marker);
        if (result["eventDragDrop"]) {
            appliqueEventDragend(marker,result["dragDropEnd"].split("$"), markerB, iconeB, messageB);
        }
        else if (result["eventDblClick"]) {
            appliqueEventDblclick(marker,result["icone"],result["dblClickBus"]);
        }
        marker.on("remove", function(e) {
            map.closePopup();
            markerB._popup.setContent(messageB);
            markerB.openPopup();
            appliqueEventDblclick(markerB,iconeB,true);
            markerB.on('dblclick', function (e) {
                if (n+1==7){
                    recupFetch(n+1);
                }
            });
        });
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
var appliqueEventDragend = function(marker, latLong) {
    marker.on("dragend", function(e) {
        console.log(marker.getLatLng().lat, latLong[0]-0.1, parseFloat(latLong[0]+0.1), marker.getLatLng().lng, latLong[1]-0.1, parseFloat(latLong[1]+0.1));
        if (marker.getLatLng().lat > latLong[0]-0.1 && marker.getLatLng().lat < parseFloat(latLong[0]+0.1) && marker.getLatLng().lng > latLong[1]-0.1 && marker.getLatLng().lng < parseFloat(latLong[1]+0.1)){
            marker.remove();
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

//Récupérée sur le net
function strNoAccent(mot) {
    var accentuationMaj="áàâäãåçéèêëíïîìñóòôöõúùûüýÁÀÂÄÃÅÇÉÈÊËÍÏÎÌÑÓÒÔÖÕÚÙÛÜÝ'", accentuationMin="aaaaaaceeeeiiiinooooouuuuyAAAAAACEEEEIIIINOOOOOUUUUY ", motNouveau="";
    for (var i=0, j=mot.length; i<j; i++) {
        var lettre = mot.substr(i, 1);
        motNouveau += (accentuationMaj.indexOf(lettre) !== -1) ? accentuationMin.substr(accentuationMaj.indexOf(lettre), 1) : lettre;
    }
    return motNouveau;
}
console.log(strNoAccent("je t'aime - ilona : moi aussi ♥"));

//recupFetch(3);
/*btn.addEventListener('click', function(){
    recupFetch(progresSum.innerText);
});*/
//Faire apparaitre Victor et Amaury à l'ENSG

var compteur = progresSum.innerText;
btn.addEventListener('click', function(){
    compteur++;
    progresSum.innerText = compteur;
});
fetch('http://localhost/projetweb/objet.php?dialogue=0').then(response => response.json())
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
            } 
            if (compteur==8) {
                marker2.remove();
                marker3.closePopup();
            }
            if (compteur==10) {
                marker3.remove();
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
        console.log("laaaa");
        fetch('http://localhost/projetweb/objet.php?id=21').then(response => response.json())
        .then(result => {
            //JEANINE
            console.log("ooooo");
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
                valueReponseValide.addEventListener('click', function(){
                    if (valueReponse.value.toLowerCase() == result["bloquePar"]){
                        marker.bindPopup(result["message"], {fontSize: 10}).openPopup();
                        fetch('http://localhost/projetweb/objet.php?id=23').then(response => response.json())
                        .then(result3 => {
                            //MIGNIBUS
                            var marker3 = L.marker([result3["latitude"], result3["longitude"]], {icon:new L.icon({iconUrl:result3["icone"], iconSize:[result3["iconeSizeLarg"], result3["iconeSizeLong"]], iconAnchor:[2,9], popupAnchor:[result3["iconeSizeLarg"]/2,0], maxZoom:10}), draggable:true}).bindPopup(result3["message"], {fontSize: 10}).addTo(map);
                            btn.style.visibility = 'visible';
                            btn.addEventListener('click', function(){
                                if (compteur==9) {
                                    marker2.bindPopup(paroles2[0], {fontSize: 10}).openPopup();
                                }
                                if (compteur==10) {
                                    marker.remove();
                                    marker2.remove();
                                    marker3.remove();
                                }
                            });
                        })
                    }
                });
            })
        })
    }
});

btn.addEventListener('click', function(){
    if (compteur==9) {
        map.setView([48.86605828999056, 2.3153718330271382],8);
        recupFetch(6);
    }
});



var testMessage = document.getElementById("testMessage");

testMessage.addEventListener('click', function(){
    message.innerHTML += "<div id= 'bulleMessage'><div id ='photoMessage'><img src='images/blarel.jpg' width='30px'></div><div id='contenuMessage'>Bonjour je suis une orange qui n'a même pas peur du rouge ! Haha avoue que tu ris jaune a ma super blague</div></div>";

});