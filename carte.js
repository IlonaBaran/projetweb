// RECUPERATION DES DONNEES:
var $inventaire = document.getElementById("inventaire");
/*var $inventaireObjet1 = document.getElementById("objet1");
var $inventaireObjet2 = document.getElementById("objet2");
var $inventaireObjet3 = document.getElementById("objet3");
var $inventaireObjet4 = document.getElementById("objet4");*/
var $bus = document.getElementById("bus");
var $map = document.getElementById("map");
var valueReponse = document.getElementById("valueReponse");
var noValueReponse = document.getElementById("noValueReponse");
var valueReponseValide = document.getElementById("valide");
var objetsLibere = [];
var progresSum = document.getElementById("progressnum");
var compteur = progresSum.innerText;
var btn = document.getElementById("suiteStory");
var interactionJoueur = document.getElementById("interactionJoueur");

btn.addEventListener('click', function(){
    progresSum.innerText = compteur;
});


//Compteur de l'avancée du jeu
let map = L.map('map').setView([48.84108949711657, 2.588069801082868], 17);

L.tileLayer('https://wxs.ign.fr/essentiels/geoportail/wmts?layer=GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2&style=normal&tilematrixset=PM&Service=WMTS&Request=GetTile&Version=1.0.0&Format=image/png&TileMatrix={z}&TileCol={x}&TileRow={y}', {
    attribution: 'Données cartographiques : © IGN',
    maxZoom: 19,
}).addTo(map);

//VERSION ANTOINE
/*
L.tileLayer('https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=06NeQFbVg4Ef3ttLmTbE', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
    maxZoom: 19,
}).addTo(map);
*/  
// CODE HISTOIRE
var recupFetch = function(n) {
    progresSum.innerText = compteur;
    fetch('http://localhost/projetweb/objet.php?id='+String(n)).then(response => response.json())
    .then(result => {
        map.setView([result["latitude"], result["longitude"]],14);
        console.log(result["latitude"]);
        console.log(result["longitude"]);
        var objectIcon = new L.icon({iconUrl:result["icone"], iconSize:[result["iconeSizeLarg"], result["iconeSizeLong"]], iconAnchor:[2,9], popupAnchor:[result["iconeSizeLarg"]/2,0], maxZoom:10});
        var paroles = result["message"].split("$");
        var marker = L.marker([result["latitude"], result["longitude"]], {icon:objectIcon}).bindPopup(paroles[0], {fontSize: 10, maxWidth:200}).addTo(map);
        paroles = paroles.slice(1,);
        marker.openPopup();
        //Partie Evènement
        //appliqueEventZoomend(marker);
        if (compteur ==16){
            recupFetchDiscussion(6);
        }
        else if (compteur ==17){
            recupFetchDiscussion(8);
        }
        else if (compteur ==18){
            recupFetchDiscussion(9);
        }

        if (compteur==11 || compteur==12 || compteur ==13 || compteur ==14 || compteur ==15 || compteur ==16 || compteur == 24 || compteur == 28){
            interactionJoueur.style.visibility = 'visible'; 
        };

        if (result["eventDragDrop"]) {
            appliqueEventDragend(marker,result["dragDropEnd"].split("$"));
        }
        else if (result["eventDblClick"]) {
            appliqueEventDblclick(marker,result["dblClickBus"],n);
        }
        if (result["bloque"] == "O") {
            recupFetchObjet(result["bloquePar"],marker,result["icone"],paroles[0],n);
        } else if (result["bloque"] == "C") {
            valueReponseValide.addEventListener('click', function fct(){
                noValueReponse.innerText = "";
                if (strNoAccent(valueReponse.value.toLowerCase()) == result["bloquePar"] || result["bloquePar"] == null){
                    if (compteur==12){        
                        recupFetchDiscussion(4);
                    }
                    interactionJoueur.style.visibility = 'hidden'; 
                    valueReponse.value = "";
                    valueReponseValide.removeEventListener('click', fct);
                    map.closePopup();
                    marker._popup.setContent(paroles[0]);
                    marker.openPopup();
                    appliqueEventDblclick(marker,result["dblClickBus"],n);
                    marker.on('dblclick', function (e) {
                        console.log("yolololo");
                        console.log(n);
                        if (n==30) {
                            compteur++;
                            recupFetchMaeve(n+1);
                        } else if (n==34) {
                            //ATTENTION LE NOMBRE 
                            compteur++;
                            recupFetchCoindetAhr();
                        } else {
                            compteur++;
                            recupFetch(n+1);
                        }
                    });
                } else {
                    // if (compteur < clement){
                    //     recupFetchDiscussion(3);
                    // }
                    // else if (compteur < antoine+ tancrede){
                    //     recupFetchDiscussion(7);
                    // }
                    // else if (compteur < melodie + felix ){
                    //     recupFetchDiscussion(12);
                    // }
                    noValueReponse.innerText = "Faux, retente ta chance!";
                }
            });
        } else {
            marker.on('dblclick', function (e) {
                console.log("hollaaaaa");
                marker.remove();
                compteur++;
                recupFetch(n+1);
            })
        }
    })
};

var recupFetchObjet = function(id, markerB, iconeB, messageB, n) {
    fetch('http://localhost/projetweb/objet.php?id='+String(id)).then(response => response.json())
    .then(result => {
        var objectIcon = new L.icon({iconUrl:result["icone"], iconSize:[result["iconeSizeLarg"], result["iconeSizeLong"]], iconAnchor:[2,9], popupAnchor:[result["iconeSizeLarg"]/2,0], maxZoom:10});
        var marker = L.marker([result["latitude"], result["longitude"]], {icon:objectIcon, draggable:true}).bindPopup(result["message"], {fontSize: 10});//.addTo(map);
        //Partie Evènement
        console.log("laaaaOUIYEP");
        appliqueEventZoomend(marker, result["zoommini"]);
        if (result["eventDragDrop"]) {
            console.log("laaaaOUIYEP222");
            appliqueEventDragend(marker,result["dragDropEnd"].split("$"), markerB, iconeB, messageB);
        }
        else if (result["eventDblClick"]) {
            appliqueEventDblclick(marker,result["dblClickBus"],n);
        }
        marker.on("remove", function(e) {
            map.closePopup();
            markerB._popup.setContent(messageB);
            markerB.openPopup();
            appliqueEventDblclick(markerB,true,n);
            markerB.on('dblclick', function (e) {
                //ATTENTION CHANGER ICI n
                console.log(n);
                console.log("je suis n");
                if (n==25){
                    map.setView([48.85146895990481, 2.3773361339603363], 13);
                    compteur++;
                    recupFetchBapFel();
                } else {
                    compteur++;
                    recupFetch(n+1);
                }
            });
        });
    })
};

var recupFetchBapFel = function() {
    progresSum.innerText = compteur;
    fetch('http://localhost/projetweb/objet.php?dialogue=1').then(response => response.json())
    .then(results => {
        var result = results[0];
        console.log(result);
        var result2 = results[1];
        //BAPTISTE
        map.setView([result["latitude"], result["longitude"]],17);
        var objectIcon = new L.icon({iconUrl:result["icone"], iconSize:[result["iconeSizeLarg"], result["iconeSizeLong"]], iconAnchor:[2,9], popupAnchor:[result["iconeSizeLarg"]/2,0], maxZoom:10});
        var paroles = result["message"].split("$");
        var marker = L.marker([result["latitude"], result["longitude"]], {icon:objectIcon}).bindPopup(paroles[0], {fontSize: 10}).addTo(map).openPopup();
        paroles = paroles.slice(1,);
        //FELIX
        var objectIcon2 = new L.icon({iconUrl:result2["icone"], iconSize:[result2["iconeSizeLarg"], result2["iconeSizeLong"]], iconAnchor:[2,9], popupAnchor:[result2["iconeSizeLarg"]/2,0], maxZoom:10});
        var paroles2 = result2["message"].split("$");
        var marker2 = L.marker([result2["latitude"], result2["longitude"]], {icon:objectIcon2}).bindPopup(paroles2[0], {fontSize: 10}).addTo(map)//.openPopup();
        btn.style.visibility = 'visible';
        btn.addEventListener('click', function(){
            //compteur++;
            progresSum.innerText = compteur;
            console.log("voila");
            console.log(compteur);
            console.log("voila");
            if (compteur==20){
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
                            compteur++;
                            marker.remove();
                            /*var image = document.createElement('img');
                            image.src = "images/bus/bus1_12.png";
                            image.id = "testimage";
                            $bus.innerHTML = "";
                            $bus.appendChild(image);*/
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
                                appliqueEventDblclick(marker2,true,result["value"]);
                                marker2.on('dblclick', function (e) {
                                    //btn.style.visibility = 'visible';
                                    compteur++;
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

var recupFetchMaeve = function(n) {
    progresSum.innerText = compteur;
    btn.style.visibility = "visible";
    fetch('http://localhost/projetweb/objet.php?id='+String(n)).then(response => response.json())
    .then(result => {
        //MAEVE
        map.setView([result["latitude"], result["longitude"]],12);
        var objectIcon = new L.icon({iconUrl:result["icone"], iconSize:[result["iconeSizeLarg"], result["iconeSizeLong"]], iconAnchor:[2,9], popupAnchor:[result["iconeSizeLarg"]/2,0], maxZoom:10});
        var paroles = result["message"].split("$");
        var marker = L.marker([result["latitude"], result["longitude"]], {icon:objectIcon}).bindPopup(paroles[0], {fontSize: 10}).addTo(map);
        paroles = paroles.slice(1,);
        marker.openPopup();
        //MAEVEMASQUE
        btn.addEventListener('click', function(){
            progresSum.innerText = compteur;
            marker._popup.setContent(paroles[0]);
            marker.openPopup();
            paroles = paroles.slice(1,);
            // ATTZNTION CHANGER LA VALEUR
            console.log("------");
            console.log(compteur);
            console.log("------");
            if (compteur == 26) {
                btn.style.visibility = 'hidden';
            }
            fetch('http://localhost/projetweb/objet.php?id='+String(result["bloquePar"])).then(response => response.json())
            .then(resultO => {
                var objectIconO = new L.icon({iconUrl:resultO["icone"], iconSize:[resultO["iconeSizeLarg"], resultO["iconeSizeLong"]], iconAnchor:[2,9], popupAnchor:[resultO["iconeSizeLarg"]/2,0], maxZoom:10});
                var markerO = L.marker([resultO["latitude"], resultO["longitude"]], {icon:objectIconO, draggable:true}).bindPopup(resultO["message"], {fontSize: 10}).addTo(map);
                //Partie Evènement
                markerO.on("dragend", function(e) {
                    if (markerO.getLatLng().lat > resultO["dragDropEnd"].split("$")[0]-0.1 && markerO.getLatLng().lat < parseFloat(resultO["dragDropEnd"].split("$")[0]+0.1) && markerO.getLatLng().lng > resultO["dragDropEnd"].split("$")[1]-0.1 && markerO.getLatLng().lng < parseFloat(resultO["dragDropEnd"].split("$")[1]+0.1)){
                        fetch('http://localhost/projetweb/objet.php?id='+String(n+1)).then(response => response.json())
                        .then(result2 => {
                            console.log(result2["icone"]);
                            var objectIcon2 = new L.icon({iconUrl:result2["icone"], iconSize:[result2["iconeSizeLarg"], result2["iconeSizeLong"]], iconAnchor:[2,9], popupAnchor:[result2["iconeSizeLarg"]/2,0], maxZoom:10});
                            var marker2 = L.marker([result2["latitude"], result2["longitude"]], {icon:objectIcon2}).bindPopup(result2["message"], {fontSize: 10}).addTo(map);
                            marker2.openPopup();
                            markerO.remove();
                            marker.remove();
                            appliqueEventDblclick(marker2,true,n+1);
                            btn.style.visibility = 'visible';
                            marker2.on('dblclick', function (e) {
                                compteur++;
                                recupFetch(n+2);
                            });
                        });
                    }
                });
            })
        });
        //compteur++;
    })
};

var recupFetchCoindetAhr = function() {
    console.log("mpeodp");
    progresSum.innerText = compteur;
    fetch('http://localhost/projetweb/objet.php?dialogue=2').then(response => response.json())
    .then(results => {
        var result = results[0];
        var result2 = results[1];
        var result3 = results[2];
        //A ENLEVER
        map.setView([result["latitude"], result["longitude"]],17);
        //COINDET 2
        var objectIcon = new L.icon({iconUrl:result["icone"], iconSize:[result["iconeSizeLarg"], result["iconeSizeLong"]], iconAnchor:[2,9], popupAnchor:[result["iconeSizeLarg"]/2,0], maxZoom:10});
        var paroles = result["message"].split("$");
        var marker = L.marker([result["latitude"], result["longitude"]], {icon:objectIcon}).bindPopup(paroles[0], {fontSize: 10}).openPopup();
        //appliqueEventZoomend(marker, result["zoommini"]);
        map.addEventListener("zoomend", function(e) {
            let zoom = map.getZoom();
            if (zoom>result["zoommini"]) {
                marker.addTo(map).openPopup();
                map.removeEventListener("zoomend");
            }
        });
        paroles = paroles.slice(1,);
        //AHR
        var objectIcon2 = new L.icon({iconUrl:result2["icone"], iconSize:[result2["iconeSizeLarg"], result2["iconeSizeLong"]], iconAnchor:[2,9], popupAnchor:[result2["iconeSizeLarg"]/2,0], maxZoom:10});
        var paroles2 = result2["message"].split("$");
        var marker2 = L.marker([result2["latitude"], result2["longitude"]], {icon:objectIcon2}).bindPopup(paroles2[0], {fontSize: 10});
        //BUS REMPLI
        var objectIcon3 = new L.icon({iconUrl:result3["icone"], iconSize:[result3["iconeSizeLarg"], result3["iconeSizeLong"]], iconAnchor:[2,9], popupAnchor:[result3["iconeSizeLarg"]/2,0], maxZoom:10});
        var paroles3 = result3["message"].split("$");
        var marker3 = L.marker([result3["latitude"], result3["longitude"]], {icon:objectIcon3, draggable:true}).bindPopup(paroles3[0], {fontSize: 10}).addTo(map);
        btn.style.visibility = 'visible';
        btn.addEventListener('click', function(){
            progresSum.innerText = compteur;
            if (compteurPeluche == 4) {
                if (compteur==29) {
                    marker3.openPopup();
                    paroles3 = paroles3.slice(1,);
                } else if (compteur==30) {
                    marker2.addTo(map);
                    marker2.openPopup();
                    paroles2 = paroles2.slice(1,);
                } else if (compteur==31) {
                    marker._popup.setContent(paroles[0]);
                    marker.openPopup();
                    paroles = paroles.slice(1,);
                } else if (compteur==32) {
                    marker3._popup.setContent(paroles3[0]);
                    marker3.openPopup();
                    paroles3 = paroles3.slice(1,);
                } else if (compteur==33) {
                    console.log("CEST LA FIN");
                    //ICI METTRE LA FIN!
                }
                compteur++;
            }
        });
    })
};

var appliqueEventZoomend = function(marker, z) {
    map.addEventListener("zoomend", function(e) {
        let zoom = map.getZoom();
        console.log(map.getZoom());
        if (zoom>z) {
            marker.addTo(map);
            map.removeEventListener("zoomend");
        }
    });
}

var appliqueEventDragend = function(marker, latLong) {
    marker.on("dragend", function(e) {
        var x = 0.01;
        console.log(marker.getLatLng().lat);
        console.log(marker.getLatLng().lng);
        console.log(latLong[0]-x, parseFloat(latLong[0])+x, parseFloat(latLong[1])-x, parseFloat(latLong[1])+x);
        if (marker.getLatLng().lat > latLong[0]-x && marker.getLatLng().lat < parseFloat(latLong[0])+x && marker.getLatLng().lng > latLong[1]-x && marker.getLatLng().lng < parseFloat(latLong[1])+x){
            marker.remove();
        }
    });
}

var appliqueEventDblclick = function(marker, boolEvent, n) {
    marker.on('dblclick', function(e) {
        marker.remove();
        var image = document.createElement('img');
        console.log("images/bus/bus1_"+String(n-14)+".png");
        image.src = "images/bus/bus1_"+String(n-14)+".png";
        image.id = "testimage";
        if (boolEvent) {
            $bus.innerHTML = "";
            $bus.appendChild(image);
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

// Faire apparaitre Victor et Amaury à l'ENSG
fetch('http://localhost/projetweb/objet.php?dialogue=0').then(response => response.json())
.then(results => {
    interactionJoueur.style.visibility = 'hidden'; 
    var result = results[0];
    var result2 = results[1];
    var result3 = results[2];
    //COINDET
    var objectIcon = new L.icon({iconUrl:result["icone"], iconSize:[result["iconeSizeLarg"], result["iconeSizeLong"]], iconAnchor:[2,9], popupAnchor:[result["iconeSizeLarg"]/2,0], maxZoom:10});
    var paroles = result["message"].split("$");
    var marker = L.marker([result["latitude"], result["longitude"]], {icon:objectIcon}).bindPopup(paroles[0], {fontSize: 10, maxWidth:160}).addTo(map).openPopup();
    paroles = paroles.slice(1,);
    //appliqueEventZoomend(marker);
    //ZARZELLI
    var objectIcon2 = new L.icon({iconUrl:result2["icone"], iconSize:[result2["iconeSizeLarg"], result2["iconeSizeLong"]], iconAnchor:[2,9], popupAnchor:[result2["iconeSizeLarg"]/2,0], maxZoom:10});
    var paroles2 = result2["message"].split("$");
    var marker2 = L.marker([result2["latitude"], result2["longitude"]], {icon:objectIcon2}).bindPopup(paroles2[0], {fontSize: 10, maxWidth:160}).addTo(map);
    //appliqueEventZoomend(marker2);
    //FILLON
    var objectIcon3 = new L.icon({iconUrl:result3["icone"], iconSize:[result3["iconeSizeLarg"], result3["iconeSizeLong"]], iconAnchor:[2,9], popupAnchor:[result3["iconeSizeLarg"]/2,0], maxZoom:10});
    var paroles3 = result3["message"].split("$");
    var marker3 = L.marker([result3["latitude"], result3["longitude"]], {icon:objectIcon3}).bindPopup(paroles3[0], {fontSize: 10, maxWidth:160});
    btn.addEventListener('click', function(){
        if (compteur<=25) {
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
                    }
                    marker._popup.setContent(paroles[0]);
                    marker.openPopup();
                    paroles = paroles.slice(1,);
                } 
            } else {
                marker.remove();
                map.setView([result2["latitude"], result2["longitude"]],18);
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
                btn.style.visibility = 'hidden';           
                marker2.remove();
                marker3.closePopup();
                recupFetchJeanineZar2();
            }
            if (compteur==10) {
                marker3.remove();
            }
        }
    });
})

//Faire apparaitre Tristan Fillon au niveau du portail de sécurité
//Faire apparaitre Jeanine dans l'ENSG et deplacer Amaury a côté de Jeanine

//progresSum.addEventListener('DOMSubtreeModified', function(){
var recupFetchJeanineZar2 = function() {
    if (compteur==8) {
        //JEANINE
        interactionJoueur.style.visibility = 'visible'; 

        fetch('http://localhost/projetweb/objet.php?id=15').then(response => response.json())
        .then(result => {
            var objectIcon = new L.icon({iconUrl:result["icone"], iconSize:[result["iconeSizeLarg"], result["iconeSizeLong"]], iconAnchor:[2,9], popupAnchor:[result["iconeSizeLarg"]/2,0], maxZoom:10});
            var marker = L.marker([result["latitude"], result["longitude"]], {icon:objectIcon}).bindPopup("B_ _ _ _ _ _", {fontSize: 10, maxWidth:160}).addTo(map).openPopup();
            //ZARZELLI2
            fetch('http://localhost/projetweb/objet.php?id=13').then(response => response.json())
            .then(result2 => {
                map.setView([result2["latitude"], result2["longitude"]],20);
                var objectIcon2 = new L.icon({iconUrl:result2["icone"], iconSize:[result2["iconeSizeLarg"], result2["iconeSizeLong"]], iconAnchor:[2,9], popupAnchor:[result2["iconeSizeLarg"]/2,0], maxZoom:10});
                var paroles2 = result2["message"].split("$");
                var marker2 = L.marker([result2["latitude"], result2["longitude"]], {icon:objectIcon2}).bindPopup(paroles2[0], {fontSize: 10, maxWidth:160}).addTo(map).openPopup();
                paroles2 = paroles2.slice(1,);
                
                valueReponseValide.addEventListener('click', function(){
                    if (valueReponse.value.toLowerCase() == result["bloquePar"]){
                        interactionJoueur.style.visibility = 'hidden'; 
                        noValueReponse.innerText = "";
                        valueReponse.value = "";
                        marker.bindPopup(result["message"], {fontSize: 10, maxWidth:160}).openPopup();
                        //MIGNIBUS
                        fetch('http://localhost/projetweb/objet.php?id=16').then(response => response.json())
                        .then(result3 => {
                            var marker3 = L.marker([result3["latitude"], result3["longitude"]], {icon:new L.icon({iconUrl:result3["icone"], iconSize:[result3["iconeSizeLarg"], result3["iconeSizeLong"]], iconAnchor:[2,9], popupAnchor:[result3["iconeSizeLarg"]/2,0], maxZoom:10})}).bindPopup(result3["message"], {fontSize: 10, maxWidth:160}).addTo(map);
                            btn.style.visibility = 'visible';
                            btn.addEventListener('click', function(){
                                if (compteur==9) {
                                    marker2.bindPopup(paroles2[0], {fontSize: 10, maxWidth:160}).openPopup();
                                }
                                if (compteur==10) {
                                    recupFetchDiscussion(1);
                                    btn.style.visibility = 'hidden';
                                    var image = document.createElement('img');
                                    image.src = "images/bus/bus1_2.png";
                                    image.id = "testimage";
                                    $bus.innerHTML = "";
                                    $bus.appendChild(image);
                                    marker.remove();
                                    marker2.remove();
                                    marker3.remove();
                                    recupFetch(17);
                                }
                            });
                        })
                    } else {
                        noValueReponse.innerText = "Faux, retente ta chance! Essaie d'être un peu plus poli !";
                    }
                });
            })
        })
    }
}

var recupFetchPeluche = function(n) {
    fetch('http://localhost/projetweb/objet.php?id='+String(n)).then(response => response.json())
    .then(result => {
        var objectIcon = new L.icon({iconUrl:result["icone"], iconSize:[result["iconeSizeLarg"], result["iconeSizeLong"]], iconAnchor:[2,9], popupAnchor:[result["iconeSizeLarg"]/2,0], maxZoom:10});
        var marker = L.marker([result["latitude"], result["longitude"]], {icon:objectIcon}).bindPopup(result["message"], {fontSize: 10}).addTo(map);
        marker.on('dblclick', function(e) {
            marker.remove();
            var image = document.createElement('img');
            image.src = result["icone"];
            document.getElementById("objet"+String(compteurPeluche)).appendChild(image);
        })
        appliqueEventZoomend(marker, result["zoommini"]);
        marker.on('remove', function(e) {
            compteurPeluche++;
        });
        if (n<10) {
            recupFetchPeluche(n+1);
        }
    });
}
var compteurPeluche = 0;
recupFetchPeluche(7);



// PARTIE ILONA
// var testMessage = document.getElementById("testMessage");
var message1 = document.getElementById("message");

var afficheMessageBus = function(message, icone) {
    bulleMessage = document.createElement('div');
    bulleMessage.setAttribute("id", "bulleMessage");

    var contenuMessage = document.createElement('div');
    contenuMessage.setAttribute("id", "contenuMessage");
    contenuMessage.innerHTML += message;

    var photoMessage = document.createElement('div');
    photoMessage.setAttribute("id", "photoMessage");
    var img = document.createElement("img");
    img.src = icone;
    img.style.height = '50px';
    photoMessage.appendChild(img);

    bulleMessage.appendChild(contenuMessage);
    bulleMessage.appendChild(photoMessage);
    message1.appendChild(bulleMessage);
}


// function sleep(milliseconds) {
//     const date = Date.now();
//     let currentDate = null;
//     do {
//       currentDate = Date.now();
//     } while (currentDate - date < milliseconds);
//   }

var recupFetchDiscussion = function(nb) {
    fetch('http://localhost/projetweb/objet.php?conversation='+String(nb))
    .then(response => response.json())
    .then(results => {
        var result = results[0];
        var paroles = result["dialogueBus"].split("$");
        var imageBus = result["imageBus"].split("$");

        for (var i=0; i < paroles.length; i++){
            afficheMessageBus(paroles[i], imageBus[i]);

        }
    }
    )
}


