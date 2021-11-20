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
var objetsLibere = [];
//Compteur de l'avancée du jeu
//var compteur = 0;
var progresSum = document.getElementById("progressnum");
let map = L.map('map').setView([48.84108949711657, 2.588069801082868], 17);
/*
L.tileLayer('https://wxs.ign.fr/essentiels/geoportail/wmts?layer=GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2&style=normal&tilematrixset=PM&Service=WMTS&Request=GetTile&Version=1.0.0&Format=image/png&TileMatrix={z}&TileCol={x}&TileRow={y}', {
    attribution: 'Données cartographiques : © IGN',
    maxZoom: 19,
}).addTo(map);
*/
//VERSION ANTOINE
L.tileLayer('https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=06NeQFbVg4Ef3ttLmTbE', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
    maxZoom: 19,
}).addTo(map);

// CODE HISTOIRE
var btn = document.getElementById("suiteStory");
var recupFetch = function(nb) {
    fetch('http://localhost/projetweb/objet.php?id='+String(nb)).then(response => response.json())
    .then(result => {
        map.setView([result["latitude"], result["longitude"]],14);
        var objectIcon = new L.icon({iconUrl:result["icone"], iconSize:[result["iconeSizeLarg"], result["iconeSizeLong"]], iconAnchor:[2,9], popupAnchor:[result["iconeSizeLarg"]/2,0], maxZoom:10});
        var paroles = result["message"].split("$");
        var marker = L.marker([result["latitude"], result["longitude"]], {icon:objectIcon, draggable:true}).bindPopup(paroles[0], {fontSize: 10}).addTo(map);
        paroles = paroles.slice(1,);
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
                    console.log("ooooo");
                    marker.on('dblclick', function (e) {
                        console.log(nb);
                        if (nb+1<20){
                            recupFetch(nb+1);       
                        } else if (nb+1==20) {
                            recupFetchMaeve(nb+1);
                        }
                    });
                } else {
                    noValueReponse.innerText = "Faux, retente ta chance!";
                }
            });
        } else {
            marker.on('dblclick', function (e) {
                console.log("hollaaaaa");
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
        var marker = L.marker([result["latitude"], result["longitude"]], {icon:objectIcon, draggable:true}).bindPopup(result["message"], {fontSize: 10});//.addTo(map);
        //marker.openPopup();
        console.log(marker);
        //Partie Evènement
        console.log(result["zoommini"]);
        appliqueEventZoomend(marker, result["zoommini"]);
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
                //recupFetch(n+1);
                console.log("ioieoeir");
                console.log(n+1);
                if (n+1 == 7 || n+1 == 18){

                    recupFetch(n+1);
                } else if (n+1 == 15){
                    map.setView([48.85146895990481, 2.3773361339603363], 13);
                    recupFetchBapFel();
                }
            });
        });
    })
};


var recupFetchBapFel = function() {
    fetch('http://localhost/projetweb/objet.php?dialogue=1').then(response => response.json())
    .then(results => {
        var result = results[0];
        console.log(results[0]);
        var result2 = results[1];
        //BAPTISTE
        var objectIcon = new L.icon({iconUrl:result["icone"], iconSize:[result["iconeSizeLarg"], result["iconeSizeLong"]], iconAnchor:[2,9], popupAnchor:[result["iconeSizeLarg"]/2,0], maxZoom:10});
        var paroles = result["message"].split("$");
        var marker = L.marker([result["latitude"], result["longitude"]], {icon:objectIcon, draggable:true}).bindPopup(paroles[0], {fontSize: 10}).addTo(map).openPopup();
        paroles = paroles.slice(1,);
        //FELIX
        var objectIcon2 = new L.icon({iconUrl:result2["icone"], iconSize:[result2["iconeSizeLarg"], result2["iconeSizeLong"]], iconAnchor:[2,9], popupAnchor:[result2["iconeSizeLarg"]/2,0], maxZoom:10});
        var paroles2 = result2["message"].split("$");
        var marker2 = L.marker([result2["latitude"], result2["longitude"]], {icon:objectIcon2, draggable:true}).bindPopup(paroles2[0], {fontSize: 10}).addTo(map);
        btn.style.visibility = 'visible';
        btn.addEventListener('click', function(){
            compteur++;
            progresSum.innerText = compteur;
            if (compteur==15){
                marker2.openPopup();
                btn.style.visibility = 'hidden';
                paroles2 = paroles2.slice(1,);
                fetch('http://localhost/projetweb/objet.php?id='+String(result["bloquePar"])).then(response => response.json())
                .then(resultObj => {
                    var objectIconObj = new L.icon({iconUrl:resultObj["icone"], iconSize:[resultObj["iconeSizeLarg"], resultObj["iconeSizeLong"]], iconAnchor:[2,9], popupAnchor:[resultObj["iconeSizeLarg"]/2,0], maxZoom:10});
                    var markerObj = L.marker([resultObj["latitude"], resultObj["longitude"]], {icon:objectIconObj, draggable:true}).bindPopup(resultObj["message"], {fontSize: 10}).addTo(map);
                    //Partie Evènement
                    markerObj.on("dragend", function(e) {
                        if (markerObj.getLatLng().lat > resultObj["dragDropEnd"].split("$")[0]-0.1 && markerObj.getLatLng().lat < parseFloat(resultObj["dragDropEnd"].split("$")[0]+0.1) && markerObj.getLatLng().lng > resultObj["dragDropEnd"].split("$")[1]-0.1 && markerObj.getLatLng().lng < parseFloat(resultObj["dragDropEnd"].split("$")[1]+0.1)){
                            markerObj.remove();
                            marker.remove();
                            var image = document.createElement('img');
                            image.src = result["icone"];
                            image.width = 80;
                            $bus.appendChild(image);
                        }
                    });
                    fetch('http://localhost/projetweb/objet.php?id='+String(result2["bloquePar"])).then(response => response.json())
                    .then(resultObj2 => {
                        var objectIconObj2 = new L.icon({iconUrl:resultObj2["icone"], iconSize:[resultObj2["iconeSizeLarg"], resultObj2["iconeSizeLong"]], iconAnchor:[2,9], popupAnchor:[resultObj2["iconeSizeLarg"]/2,0], maxZoom:10});
                        var markerObj2 = L.marker([resultObj2["latitude"], resultObj2["longitude"]], {icon:objectIconObj2, draggable:true}).bindPopup(resultObj2["message"], {fontSize: 10}).addTo(map);
                        //Partie Evènement            
                        console.log(result2["dragDropEnd"]);
                        markerObj2.on("dragend", function(e) {
                            if (markerObj2.getLatLng().lat > resultObj2["dragDropEnd"].split("$")[0]-0.1 && markerObj2.getLatLng().lat < parseFloat(resultObj2["dragDropEnd"].split("$")[0]+0.1) && markerObj2.getLatLng().lng > resultObj2["dragDropEnd"].split("$")[1]-0.1 && markerObj2.getLatLng().lng < parseFloat(resultObj2["dragDropEnd"].split("$")[1]+0.1)){
                                markerObj2.remove();
                                map.closePopup();
                                marker2._popup.setContent(paroles2[0]);
                                marker2.openPopup();
                                appliqueEventDblclick(marker2,result2["icone"],true);
                                marker2.on('dblclick', function (e) {
                                    btn.style.visibility = 'visible';
                                    recupFetch(result2["value"]+2);                        
                                });
                            }
                        });
                    });
                });
            }
        });
    })
};


var recupFetchMaeve = function() {
    fetch('http://localhost/projetweb/objet.php?id=20').then(response => response.json())
    .then(result => {
        console.log("bbbb");
        //MAEVE
        var objectIcon = new L.icon({iconUrl:result["icone"], iconSize:[result["iconeSizeLarg"], result["iconeSizeLong"]], iconAnchor:[2,9], popupAnchor:[result["iconeSizeLarg"]/2,0], maxZoom:10});
        var paroles = result["message"].split("$");
        var marker = L.marker([result["latitude"], result["longitude"]], {icon:objectIcon, draggable:true}).bindPopup(paroles[0], {fontSize: 10}).addTo(map);
        paroles = paroles.slice(1,);
        marker.openPopup();
        //MAEVEMASQUE
        btn.addEventListener('click', function(){
            compteur++;
            progresSum.innerText = compteur;
            console.log(compteur);
            if (compteur==15){
                marker._popup.setContent(paroles[0]);
                marker.openPopup();
                paroles = paroles.slice(1,);
                btn.style.visibility = 'hidden';
                fetch('http://localhost/projetweb/objet.php?id=27').then(response => response.json())
                .then(result2 => {
                    console.log(result2["icone"]);
                    var objectIcon2 = new L.icon({iconUrl:result2["icone"], iconSize:[result2["iconeSizeLarg"], result2["iconeSizeLong"]], iconAnchor:[2,9], popupAnchor:[result2["iconeSizeLarg"]/2,0], maxZoom:10});
                    var marker2 = L.marker([result2["latitude"], result2["longitude"]], {icon:objectIcon2, draggable:true}).bindPopup(result2["message"], {fontSize: 10});
                    if (result["bloque"] == "O") {
                        fetch('http://localhost/projetweb/objet.php?id='+String(result["bloquePar"])).then(response => response.json())
                        .then(resultO => {
                            var objectIconO = new L.icon({iconUrl:resultO["icone"], iconSize:[resultO["iconeSizeLarg"], resultO["iconeSizeLong"]], iconAnchor:[2,9], popupAnchor:[resultO["iconeSizeLarg"]/2,0], maxZoom:10});
                            var markerO = L.marker([resultO["latitude"], resultO["longitude"]], {icon:objectIconO, draggable:true}).bindPopup(resultO["message"], {fontSize: 10}).addTo(map);
                            //Partie Evènement
                            markerO.on("dragend", function(e) {
                                if (markerO.getLatLng().lat > resultO["dragDropEnd"].split("$")[0]-0.1 && markerO.getLatLng().lat < parseFloat(resultO["dragDropEnd"].split("$")[0]+0.1) && markerO.getLatLng().lng > resultO["dragDropEnd"].split("$")[1]-0.1 && markerO.getLatLng().lng < parseFloat(resultO["dragDropEnd"].split("$")[1]+0.1)){
                                    markerO.remove();
                                    marker.remove();
                                    marker2.addTo(map);
                                    marker2.openPopup();
                                    appliqueEventDblclick(marker2,result2["icone"],true);
                                    btn.style.visibility = 'visible';
                                    marker2.on('dblclick', function (e) {
                                        recupFetch(29);
                                    });
                                }
                            });
                        })
                    }
                });
            }
        });
    })
};

var appliqueEventZoomend = function(marker, z) {
    console.log("bbbb1");
    /*var fctZoom = function(m, z) {
        console.log("bbbb2");
        let zoom = map.getZoom();
        if (zoom>z) {
            m.addTo(map);
        }
    }
    map.on("zoomend", fctZoom(marker, z));
    */
   map.on("zoomend", function(e) {
       console.log("bbbb3");
       let zoom = map.getZoom();
       console.log(z);
       console.log(map.getZoom());
       if (zoom>z) {
           console.log("lllmmm");
           marker.addTo(map);
           //marker.removeEventListener("zoomend", false);
       }
    });
}



var appliqueEventDragend = function(marker, latLong) {
    marker.on("dragend", function(e) {
        marker.removeEventListener("zoomend", true);
        var x = 0.01;
        console.log(marker.getLatLng().lat, latLong[0]-x, parseFloat(latLong[0]+x), marker.getLatLng().lng, latLong[1]-x, parseFloat(latLong[1]+x));
        if (marker.getLatLng().lat > latLong[0]-x && marker.getLatLng().lat < parseFloat(latLong[0]+x) && marker.getLatLng().lng > latLong[1]-x && marker.getLatLng().lng < parseFloat(latLong[1]+x)){
            marker.remove();
        }
    });
}
var appliqueEventDblclick = function(marker, imgSrc, boolEvent) {
    marker.on('dblclick', function (e) {
        marker.remove();
        var image = document.createElement('img');
        image.src = imgSrc;
        image.width = 60;
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

//TEST SPACE
//recupFetch(29);


//recupFetch(3);
/*btn.addEventListener('click', function(){
    recupFetch(progresSum.innerText);
});*/
//Faire apparaitre Victor et Amaury à l'ENSG

var compteur = progresSum.innerText;
/*btn.addEventListener('click', function(){
    compteur++;
    progresSum.innerText = compteur;
});*/

/*
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
            console.log(compteur);
            progresSum.innerText = compteur;
            if (compteur<=4){
                if (compteur%2 != 0) {
                    marker2._popup.setContent(paroles2[0]);
                    marker2.openPopup();
                    paroles2 = paroles2.slice(1,);
                } else {
                    if (compteur==4) {
                        marker3.addTo(map);
                    }
                    marker._popup.setContent(paroles[0]);
                    marker.openPopup();
                    paroles = paroles.slice(1,);
                } 
            } else {
                marker.remove();
                if (compteur%2 != 0) {
                    if (compteur == 5) {
                        map.setView([result2["latitude"], result2["longitude"]], 18);
                    }
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

//Faire apparaitre Tristan Fillon au niveau du portail de sécurité
//Faire apparaitre Jeanine dans l'ENSG et deplacer Amaury a côté de Jeanine
progresSum.addEventListener('DOMSubtreeModified', function(){
    if (compteur==8) {
        fetch('http://localhost/projetweb/objet.php?id=21').then(response => response.json())
        .then(result => {
            //JEANINE
            var objectIcon = new L.icon({iconUrl:result["icone"], iconSize:[result["iconeSizeLarg"], result["iconeSizeLong"]], iconAnchor:[2,9], popupAnchor:[result["iconeSizeLarg"]/2,0], maxZoom:10});
            var marker = L.marker([result["latitude"], result["longitude"]], {icon:objectIcon, draggable:true}).bindPopup("...", {fontSize: 10}).addTo(map);//.openPopup();
            fetch('http://localhost/projetweb/objet.php?id=22').then(response => response.json())
            .then(result2 => {
                //ZARZELLI2
                map.setView([result2["latitude"], result2["longitude"]],20);
                var objectIcon2 = new L.icon({iconUrl:result2["icone"], iconSize:[result2["iconeSizeLarg"], result2["iconeSizeLong"]], iconAnchor:[2,9], popupAnchor:[result2["iconeSizeLarg"]/2,0], maxZoom:10});
                var paroles2 = result2["message"].split("$");
                var marker2 = L.marker([result2["latitude"], result2["longitude"]], {icon:objectIcon2, draggable:true}).bindPopup(paroles2[0], {fontSize: 10}).addTo(map).openPopup();
                paroles2 = paroles2.slice(1,);
                btn.addEventListener('click', function(){
                    if (compteur==9) {
                        btn.style.visibility = 'hidden';
                        marker2.closePopup();
                        marker.openPopup();
                        valueReponseValide.addEventListener('click', function(){
                            if (valueReponse.value.toLowerCase() == result["bloquePar"]){
                                marker.bindPopup(result["message"], {fontSize: 10}).openPopup();
                                fetch('http://localhost/projetweb/objet.php?id=23').then(response => response.json())
                                .then(result3 => {
                                    //MIGNIBUS
                                    var marker3 = L.marker([result3["latitude"], result3["longitude"]], {icon:new L.icon({iconUrl:result3["icone"], iconSize:[result3["iconeSizeLarg"], result3["iconeSizeLong"]], iconAnchor:[2,9], popupAnchor:[result3["iconeSizeLarg"]/2,0], maxZoom:10}), draggable:true}).bindPopup(result3["message"], {fontSize: 10}).addTo(map);
                                    btn.style.visibility = 'visible';
                                    btn.addEventListener('click', function(){
                                        if (compteur==10) {
                                            btn.style.visibility = 'hidden';
                                            marker.remove();
                                            map.setView([result2["latitude"], result2["longitude"]],18);
                                            marker2.bindPopup(paroles2[0], {fontSize: 10}).openPopup();
                                            marker3.on('dblclick', function (e) {
                                                marker2.remove();
                                                marker3.remove();
                                                $bus.innerText = '';
                                                var image = document.createElement('img');
                                                image.src = "images/bus/bus1.png";
                                                image.width = 120;
                                                $bus.appendChild(image);
                                                map.setView([48.86605828999056, 2.3153718330271382],8);
                                                recupFetch(6);
                                            })
                                        }
                                    });
                                })
                            }
                        });
                    }
                });
                
            })
        })
    }
});
*/
/*
btn.addEventListener('click', function(){
    if (compteur==10) {
        map.setView([48.86605828999056, 2.3153718330271382],8);
        recupFetch(6);
    }
});
*/

if (compteur==10) {
    //map.setView([48.86605828999056, 2.3153718330271382],8);
    recupFetch(6);
}