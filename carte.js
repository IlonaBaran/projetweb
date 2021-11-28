// RECUPERATION DES DONNEES:
var bus = document.getElementById("bus");
var valueReponse = document.getElementById("valueReponse");
var progresSum = document.getElementById("progressnum");
var compteur = progresSum.innerText;
var btn = document.getElementById("suiteStory");
var interactionJoueur = document.getElementById("interactionJoueur");
var message1 = document.getElementById("message");
var finJeu = document.getElementById("btnFin");
finJeu.style.visibility = "hidden";
var indicProg = document.getElementById("indicator");

//Maeve -> pour recuperer une variable php en js
var variableRecuperee = document.getElementById("pseudo").value;
console.log(variableRecuperee);

var map = L.map('map').setView([48.84108949711657, 2.588069801082868], 17);

var updateProg = function() {
    if (compteur >= 11 && compteur < 29) {
        indicProg.style.width = String(parseInt((compteur-10)*100/18))+'%';
    }
}

L.tileLayer('https://wxs.ign.fr/essentiels/geoportail/wmts?layer=GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2&style=normal&tilematrixset=PM&Service=WMTS&Request=GetTile&Version=1.0.0&Format=image/png&TileMatrix={z}&TileCol={x}&TileRow={y}', {
    attribution: 'Données cartographiques : © IGN',
    maxZoom: 20,
}).addTo(map);

//VERSION ANTOINE
// L.tileLayer('https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=06NeQFbVg4Ef3ttLmTbE', {
//     attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
//     maxZoom: 19,
// }).addTo(map);

// FONCTION PRINCIPALE DES PERSONNAGES
var recupFetch = function(n) {
    progresSum.innerText = compteur;
    //PERSONNAGE n
    fetch('http://localhost/projetweb/objet.php?id='+String(n)).then(response => response.json())
    .then(result => {
        console.log(compteur);
        console.log("________");
        map.setView([result["latitude"], result["longitude"]], 14);
        var objectIcon = new L.icon({iconUrl:result["icone"], iconSize:[result["iconeSizeLarg"], result["iconeSizeLong"]], iconAnchor:[2,9], popupAnchor:[result["iconeSizeLarg"]/2,0], maxZoom:10});
        var paroles = result["message"].split("$");
        var marker = L.marker([result["latitude"], result["longitude"]], {icon:objectIcon}).bindPopup("<p id=parole>"+paroles[0]+"</p>", {fontSize: 10, maxWidth:200}).addTo(map);
        paroles = paroles.slice(1, );
        marker.openPopup();
        //PAPARODITIS
        fetch('http://localhost/projetweb/objet.php?id=38').then(response => response.json())
        .then(resultP => {
            var objectIconP = new L.icon({iconUrl:resultP["icone"], iconSize:[resultP["iconeSizeLarg"], resultP["iconeSizeLong"]], iconAnchor:[2,9], popupAnchor:[resultP["iconeSizeLarg"]/2,0]});
            var parolesP = resultP["message"].split("$");
            var markerP = L.marker([resultP["latitude"], resultP["longitude"]], {icon:objectIconP}).bindPopup("<p id=parole>"+parolesP[n-17]+"</p>", {fontSize: 10, maxWidth:160});
            map.addEventListener("zoomend", function() {
                let zoom = map.getZoom();
                if (zoom>resultP["zoommini"]) {
                    markerP.addTo(map);
                } else {
                    markerP.remove(map);
                }
            });
            if (compteur==15){        
                recupFetchDiscussion(5, true);
            }
            if (compteur==17) {
                recupFetchDiscussion(6, true);
            } else if (compteur == 18) {
                recupFetchDiscussion(17-9, true);
            }
            if (result["eventDragDrop"]) {
                appliqueEventDragend(marker,result["dragDropEnd"].split("$"));
            }
            if (result["bloque"] == "O") {
                recupFetchObjet(result["bloquePar"],marker,result["icone"],paroles[0], n, markerP);
            } else if (result["bloque"] == "C") {
                interactionJoueur.style.visibility = 'visible'; 
                valueReponse.addEventListener('keyup', function fct(e) {
                    if ((strNoAccent(valueReponse.value.toLowerCase()) == result["bloquePar"] || (result["bloquePar"] == null && valueReponse.value != "")) && e.key == "Enter") {
                        var aleatoireMessage = Math.random();
                        console.log(aleatoireMessage);
                        if (aleatoireMessage < 0.4){
                            recupFetchDiscussion(2, true);
                        }
                        
                        if (compteur==13){        
                            recupFetchDiscussion(4, true);
                        }
                        console.log(compteur);
                        console.log("000000000000");
                        interactionJoueur.style.visibility = 'hidden'; 
                        valueReponse.value = "";
                        valueReponse.removeEventListener('keyup', fct);
                        map.closePopup();
                        marker._popup.setContent("<p id=parole>"+paroles[0]+"</p>");
                        marker.openPopup();
                        appliqueEventDblclick(marker,result["dblClickBus"], n);
                        marker.on('dblclick', function (e) {
                            map.removeEventListener("zoomend");
                            markerP.remove();
                            if (n==30) {
                                compteur++;
                                recupFetchMaeve(n+1);
                            } else if (n==34) {
                                compteur++;
                                recupFetchDiscussion(13, true);
                                recupFetchCoindetAhr();
                            } else {
                                if (n==20-1) {
                                    recupFetchPeluche(9);
                                } 
                                if (n==21-1) {
                                    recupFetchPeluche(10);
                                }
                                if (compteur==12){
                                    recupFetchDiscussion(15, true);
                                }
                                compteur++;
                                recupFetch(n+1);
                            }
                        });
                    } else if (valueReponse.value != "" && e.key == "Enter") {
                        afficheMessageBus("Faux, la réponse n'est pas \""+ valueReponse.value +"\", retente ta chance!", result["icone"], 'rgb(250, 214, 210)');
                        var aleatoireMessage = Math.random();
                        console.log(aleatoireMessage);
                        if (aleatoireMessage < 0.4 && compteur < 15){
                            recupFetchDiscussion(3, true);
                        }
                        else if (aleatoireMessage > 0.6 && compteur > 15){
                            recupFetchDiscussion(7, true);
                        }
                        else if (aleatoireMessage < 0.4 && compteur > 15){
                            recupFetchDiscussion(7, true);
                        }
                    }
                });
            } else {
                marker.on('dblclick', function (e) {
                    marker.remove();
                    markerP.remove();
                    compteur++;
                    recupFetch(n+1);
                })
            }
        });
    })
};

// FONCTION DES OBJETS BLOQUANTS
var recupFetchObjet = function(id, markerB, iconeB, messageB, n, markerP) {
    //OBJET BLOQUANT markerB
    fetch('http://localhost/projetweb/objet.php?id='+String(id)).then(response => response.json())
    .then(result => {
        var objectIcon = new L.icon({iconUrl:result["icone"], iconSize:[result["iconeSizeLarg"], result["iconeSizeLong"]], iconAnchor:[2,9], popupAnchor:[result["iconeSizeLarg"]/2,0], maxZoom:10});
        var marker = L.marker([result["latitude"], result["longitude"]], {icon:objectIcon, draggable:true}).bindPopup("<p id=parole>"+result["message"]+"</p>", {fontSize: 10});
        appliqueEventZoomend(marker, result["zoommini"]);
        if (result["eventDragDrop"]) {
            appliqueEventDragend(marker,result["dragDropEnd"].split("$"), markerB, iconeB, messageB);
        }
        marker.on("remove", function(e) {
            map.closePopup();
            markerB._popup.setContent("<p id=parole>"+messageB+"</p>");
            markerB.openPopup();
            appliqueEventDblclick(markerB,true,n);
            markerB.on('dblclick', function (e) {
                //map.removeEventListener("zoomend");
                markerP.remove();
                if (n==25){
                    map.setView([48.85146895990481, 2.3773361339603363], 13);
                    compteur++;
                    recupFetchRivBal();
                } else {
                    if (n==28-1) {
                        recupFetchPeluche(8);
                    } if (n==20-1) {
                        recupFetchPeluche(9);
                    } if (n==21-1) {
                        recupFetchPeluche(10);
                    }
                    compteur++;
                    recupFetch(n+1);
                }
            });
        });
    })
};

//FONCTION PERSONNAGES RIVIERE ET BAL
var recupFetchRivBal = function() {
    progresSum.innerText = compteur;
    //RIVIERE + BAL
    fetch('http://localhost/projetweb/objet.php?dialogue=1').then(response => response.json())
    .then(results => {
        var rep = true;
        var result = results[0];
        var result2 = results[1];
        //BAL
        map.setView([result["latitude"], result["longitude"]],16);
        var objectIcon = new L.icon({iconUrl:result["icone"], iconSize:[result["iconeSizeLarg"], result["iconeSizeLong"]], iconAnchor:[2,9], popupAnchor:[result["iconeSizeLarg"]/2,0], maxZoom:10});
        var paroles = result["message"].split("$");
        var marker = L.marker([result["latitude"], result["longitude"]], {icon:objectIcon}).bindPopup("<p id=parole>"+paroles[0]+"</p>", {fontSize: 10}).addTo(map).openPopup();
        paroles = paroles.slice(1,);
        //RIVIERE
        var objectIcon2 = new L.icon({iconUrl:result2["icone"], iconSize:[result2["iconeSizeLarg"], result2["iconeSizeLong"]], iconAnchor:[2,9], popupAnchor:[result2["iconeSizeLarg"]/2,0], maxZoom:10});
        var paroles2 = result2["message"].split("$");
        var marker2 = L.marker([result2["latitude"], result2["longitude"]], {icon:objectIcon2}).bindPopup("<p id=parole>"+paroles2[0]+"</p>", {fontSize: 10}).addTo(map)//.openPopup();
        //PAPARODITIS
        fetch('http://localhost/projetweb/objet.php?id=38').then(response => response.json())
        .then(resultP => {
            console.log("________");
            var objectIconP = new L.icon({iconUrl:resultP["icone"], iconSize:[resultP["iconeSizeLarg"], resultP["iconeSizeLong"]], iconAnchor:[2,9], popupAnchor:[resultP["iconeSizeLarg"]/2,0]});
            var parolesP = resultP["message"].split("$");
            var markerP = L.marker([resultP["latitude"], resultP["longitude"]], {icon:objectIconP}).bindPopup("<p id=parole>"+parolesP[26-17]+"</p>", {fontSize: 10, maxWidth:160}).addTo(map);
            // map.addEventListener("zoomend", function() {
            //     let zoom = map.getZoom();
            //     console.log(map.getZoom());
            //     if (zoom>resultP["zoommini"]) {
            //         console.log("tttt");
            //         markerP.addTo(map);
            //         //map.removeEventListener("zoomend");
            //     } else {
            //         console.log("jjj");
            //         markerP.remove(map);
            //     }
            // });
            //OBJET bananeF
            fetch('http://localhost/projetweb/objet.php?id='+String(result["bloquePar"])).then(response => response.json())
            .then(resultObj => {
                var objectIconObj = new L.icon({iconUrl:resultObj["icone"], iconSize:[resultObj["iconeSizeLarg"], resultObj["iconeSizeLong"]], iconAnchor:[2,9], popupAnchor:[resultObj["iconeSizeLarg"]/2,0], maxZoom:10});
                var markerObj = L.marker([resultObj["latitude"], resultObj["longitude"]], {icon:objectIconObj, draggable:true}).bindPopup("<p id=parole>"+resultObj["message"]+"</p>", {fontSize: 10}).addTo(map);
                markerObj.on("dragend", function(e) {
                    if (markerObj.getLatLng().lat > resultObj["dragDropEnd"].split("$")[0]-0.1 && markerObj.getLatLng().lat < parseFloat(resultObj["dragDropEnd"].split("$")[0]+0.1) && markerObj.getLatLng().lng > resultObj["dragDropEnd"].split("$")[1]-0.1 && markerObj.getLatLng().lng < parseFloat(resultObj["dragDropEnd"].split("$")[1]+0.1)){
                        markerObj.remove();
                        marker.remove();
                        rep = false;
                    }
                });
                ////OBJET carotteB
                fetch('http://localhost/projetweb/objet.php?id='+String(result2["bloquePar"])).then(response => response.json())
                .then(resultObj2 => {
                    var objectIconObj2 = new L.icon({iconUrl:resultObj2["icone"], iconSize:[resultObj2["iconeSizeLarg"], resultObj2["iconeSizeLong"]], iconAnchor:[2,9], popupAnchor:[resultObj2["iconeSizeLarg"]/2,0], maxZoom:10});
                    var markerObj2 = L.marker([resultObj2["latitude"], resultObj2["longitude"]], {icon:objectIconObj2, draggable:true}).bindPopup("<p id=parole>"+resultObj2["message"]+"</p>", {fontSize: 10}).addTo(map);           
                    markerObj2.on("dragend", function(e) {
                        if (markerObj2.getLatLng().lat > resultObj2["dragDropEnd"].split("$")[0]-0.5 && markerObj2.getLatLng().lat < parseFloat(resultObj2["dragDropEnd"].split("$")[0])+0.5 && markerObj2.getLatLng().lng > resultObj2["dragDropEnd"].split("$")[1]-0.5 && markerObj2.getLatLng().lng < parseFloat(resultObj2["dragDropEnd"].split("$")[1])+0.5){
                            paroles2 = paroles2.slice(1,);
                            markerObj2.remove();
                            map.closePopup();
                            marker2._popup.setContent("<p id=parole>"+paroles2[0]+"</p>");
                            marker2.openPopup();
                            appliqueEventDblclick(marker2,true,result["value"],markerP);
                            marker2.on('dblclick', function(e) {
                                compteur++;
                                compteur++;
                                markerP.remove();
                                if (rep) {
                                    markerObj.remove();
                                    marker.remove();
                                    recupFetchDiscussion(17, true);
                                }
                                recupFetchPeluche(8);
                                recupFetch(result2["value"]+2);                         
                            });
                        }
                    });
                });
            });
        });
    });
};

//FONCTION PERSONNAGE BLAREL
var recupFetchMaeve = function(n) {
    progresSum.innerText = compteur;
    btn.style.visibility = "visible";
    // BLAREL
    fetch('http://localhost/projetweb/objet.php?id='+String(n)).then(response => response.json())
    .then(result => {
        map.setView([result["latitude"], result["longitude"]],12);
        var objectIcon = new L.icon({iconUrl:result["icone"], iconSize:[result["iconeSizeLarg"], result["iconeSizeLong"]], iconAnchor:[2,9], popupAnchor:[result["iconeSizeLarg"]/2,0], maxZoom:10});
        var paroles = result["message"].split("$");
        var marker = L.marker([result["latitude"], result["longitude"]], {icon:objectIcon}).bindPopup("<p id=parole>"+paroles[0]+"</p>", {fontSize: 10}).addTo(map);
        paroles = paroles.slice(1,);
        marker.openPopup();
        btn.addEventListener('click', function(){
            if (compteur == 26) {
                map.setView([result["latitude"], result["longitude"]],12);
                marker._popup.setContent("<p id=parole>"+paroles[0]+"</p>");
                marker.openPopup();
                paroles = paroles.slice(1,);
                btn.style.visibility = 'hidden';
                //PAPARODITIS
                fetch('http://localhost/projetweb/objet.php?id=38').then(response => response.json())
                .then(resultP => {
                    var objectIconP = new L.icon({iconUrl:resultP["icone"], iconSize:[resultP["iconeSizeLarg"], resultP["iconeSizeLong"]], iconAnchor:[2,9], popupAnchor:[resultP["iconeSizeLarg"]/2,0]});
                    var parolesP = resultP["message"].split("$");
                    var markerP = L.marker([resultP["latitude"], resultP["longitude"]], {icon:objectIconP}).bindPopup("<p id=parole>"+parolesP[n-17]+"</p>", {fontSize: 10, maxWidth:160}).addTo(map);
                    // map.addEventListener("zoomend", function() {
                    //     let zoom = map.getZoom();
                    //     console.log(map.getZoom());
                    //     if (zoom>resultP["zoommini"]) {
                    //         markerP.addTo(map);
                    //         //map.removeEventListener("zoomend");
                    //     } else {
                    //         markerP.remove(map);
                    //     }
                    // });
                    //OBJET masque
                    fetch('http://localhost/projetweb/objet.php?id='+String(result["bloquePar"])).then(response => response.json())
                    .then(resultO => {
                        var objectIconO = new L.icon({iconUrl:resultO["icone"], iconSize:[resultO["iconeSizeLarg"], resultO["iconeSizeLong"]], iconAnchor:[2,9], popupAnchor:[resultO["iconeSizeLarg"]/2,0], maxZoom:10});
                        var markerO = L.marker([resultO["latitude"], resultO["longitude"]], {icon:objectIconO, draggable:true}).bindPopup("<p id=parole>"+resultO["message"]+"</p>", {fontSize: 10}).addTo(map);
                        markerO.on("dragend", function(e) {
                            if (markerO.getLatLng().lat > resultO["dragDropEnd"].split("$")[0]-0.1 && markerO.getLatLng().lat < parseFloat(resultO["dragDropEnd"].split("$")[0])+0.1 && markerO.getLatLng().lng > resultO["dragDropEnd"].split("$")[1]-0.1 && markerO.getLatLng().lng < parseFloat(resultO["dragDropEnd"].split("$")[1])+0.1){
                                //BLAREL2
                                fetch('http://localhost/projetweb/objet.php?id='+String(n+1)).then(response => response.json())
                                .then(result2 => {
                                    var objectIcon2 = new L.icon({iconUrl:result2["icone"], iconSize:[result2["iconeSizeLarg"], result2["iconeSizeLong"]], iconAnchor:[2,9], popupAnchor:[result2["iconeSizeLarg"]/2,0], maxZoom:10});
                                    var marker2 = L.marker([result2["latitude"], result2["longitude"]], {icon:objectIcon2}).bindPopup("<p id=parole>"+result2["message"]+"</p>", {fontSize: 10}).addTo(map);
                                    marker2.openPopup();
                                    markerO.remove();
                                    markerP.remove();
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
            }
        });
    })
};

//FONCTION PERSONNAGES COINDET ET AHR
var recupFetchCoindetAhr = function() {
    progresSum.innerText = compteur;
    //COINDET2 + AHR + MIGNIBUS
    fetch('http://localhost/projetweb/objet.php?dialogue=2').then(response => response.json())
    .then(results => {
        var result = results[0];
        var result2 = results[1];
        var result3 = results[2];
        map.setView([result["latitude"], result["longitude"]],6);
        //COINDET2
        var objectIcon = new L.icon({iconUrl:result["icone"], iconSize:[result["iconeSizeLarg"], result["iconeSizeLong"]], iconAnchor:[2,9], popupAnchor:[result["iconeSizeLarg"]/2,0], maxZoom:10});
        var paroles = result["message"].split("$");
        var marker = L.marker([result["latitude"], result["longitude"]], {icon:objectIcon}).bindPopup("<p id=parole>"+paroles[0]+"</p>", {fontSize: 10}).openPopup();
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
        var marker2 = L.marker([result2["latitude"], result2["longitude"]], {icon:objectIcon2}).bindPopup("<p id=parole>"+paroles2[0]+"</p>", {fontSize: 10});
        //MIGNIBUS plein
        var objectIcon3 = new L.icon({iconUrl:result3["icone"], iconSize:[result3["iconeSizeLarg"], result3["iconeSizeLong"]], iconAnchor:[2,9], popupAnchor:[result3["iconeSizeLarg"]/2,0], maxZoom:10});
        var paroles3 = result3["message"].split("$");
        var marker3 = L.marker([result3["latitude"], result3["longitude"]], {icon:objectIcon3}).addTo(map);
        //appliqueEventZoomend(marker3, result3["zoommini"]);
        btn.style.visibility = 'visible';
        btn.addEventListener('click', function(){
            if (compteurPeluche != 4) {
                if (compteur==29) {
                    marker3.bindPopup("<p id=parole>"+paroles3[0]+"</p>", {fontSize: 10});
                    marker3.openPopup();
                    paroles3 = paroles3.slice(1,);
                } else if (compteur==30) {
                    marker2.addTo(map);
                    marker2.openPopup();
                    paroles2 = paroles2.slice(1,);
                } else if (compteur==31) {
                    marker._popup.setContent("<p id=parole>"+paroles[0]+"</p>");
                    marker.openPopup();
                    paroles = paroles.slice(1,);
                } else if (compteur==32) {
                    marker3._popup.setContent("<p id=parole>"+paroles3[0]+"</p>");
                    marker3.openPopup();
                    paroles3 = paroles3.slice(1,);
                } else if (compteur==33) {
                    console.log("CEST LA FIN");
                    finJeu.style.visibility = "visible";
                    marker2._popup.setContent("<p id=parole>"+paroles2[0]+"</p>");
                    marker2.openPopup();
                }
                compteur++;
            }
        });
    })
};

var appliqueEventZoomend = function(marker, z) {
    map.addEventListener("zoomend", function(e) {
        let zoom = map.getZoom();
        if (zoom>z) {
            marker.addTo(map);
            map.removeEventListener("zoomend");
        }
    });
}

var appliqueEventDragend = function(marker, latLong) {
    marker.on("dragend", function(e) {
        var x = 0.05;
        if (marker.getLatLng().lat > latLong[0]-x && marker.getLatLng().lat < parseFloat(latLong[0])+x && marker.getLatLng().lng > latLong[1]-x && marker.getLatLng().lng < parseFloat(latLong[1])+x){
            marker.remove();
        }
    });
}

var appliqueEventDblclick = function(marker, boolEvent, n) {
    updateProg();
    marker.on("dblclick", function(e) {
        marker.remove();
        var image = document.createElement('img');
        image.src = "images/bus/bus1_"+String(n-14)+".png";
        image.id = "testimage";
        if (boolEvent) {
            bus.innerHTML = "";
            bus.appendChild(image);
        }
    })
}

//FONCTION QUI ENLEVE L'ACCENTUATION 
//(SOURCE: https://www.equinode.com/blog/article/retirer-les-accents-avec-javascript)
var strNoAccent = function(mot) {
    var accentuationMaj="áàâäãåçéèêëíïîìñóòôöõúùûüýÁÀÂÄÃÅÇÉÈÊËÍÏÎÌÑÓÒÔÖÕÚÙÛÜÝ'", accentuationMin="aaaaaaceeeeiiiinooooouuuuyAAAAAACEEEEIIIINOOOOOUUUUY ", motNouveau="";
    for (var i=0, j=mot.length; i<j; i++) {
        var lettre = mot.substr(i, 1);
        motNouveau += (accentuationMaj.indexOf(lettre) !== -1) ? accentuationMin.substr(accentuationMaj.indexOf(lettre), 1) : lettre;
    }
    return motNouveau;
}

//PERSONNAGE COINDET, ZARZELLI ET FILLON
fetch('http://localhost/projetweb/objet.php?dialogue=0').then(response => response.json())
.then(results => {
    interactionJoueur.style.visibility = 'hidden'; 
    var result = results[0];
    var result2 = results[1];
    var result3 = results[2];
    //COINDET
    var objectIcon = new L.icon({iconUrl:result["icone"], iconSize:[result["iconeSizeLarg"], result["iconeSizeLong"]], iconAnchor:[2,9], popupAnchor:[result["iconeSizeLarg"]/2,0]});
    var paroles = result["message"].split("$");
    var marker = L.marker([result["latitude"], result["longitude"]], {icon:objectIcon}).bindPopup("<p id=parole>"+paroles[0]+"</p>", {fontSize: 10, maxWidth:160}).addTo(map).openPopup();
    paroles = paroles.slice(1,);
    //ZARZELLI
    var objectIcon2 = new L.icon({iconUrl:result2["icone"], iconSize:[result2["iconeSizeLarg"], result2["iconeSizeLong"]], iconAnchor:[2,9], popupAnchor:[result2["iconeSizeLarg"]/2,0], maxZoom:10});
    var paroles2 = result2["message"].split("$");
    var marker2 = L.marker([result2["latitude"], result2["longitude"]], {icon:objectIcon2}).bindPopup("<p id=parole>"+paroles2[0]+"</p>", {fontSize: 10, maxWidth:160}).addTo(map);
    //FILLON
    var objectIcon3 = new L.icon({iconUrl:result3["icone"], iconSize:[result3["iconeSizeLarg"], result3["iconeSizeLong"]], iconAnchor:[2,9], popupAnchor:[result3["iconeSizeLarg"]/2,0], maxZoom:10});
    var paroles3 = result3["message"].split("$");
    var marker3 = L.marker([result3["latitude"], result3["longitude"]], {icon:objectIcon3}).bindPopup("<p id=parole>"+paroles3[0]+"</p>", {fontSize: 10, maxWidth:160});
    btn.addEventListener('click', function(){
        if (compteur<=25) {
            compteur++;
            progresSum.innerText = compteur;
            if (compteur<=4){
                if (compteur%2 != 0) {
                    marker2._popup.setContent("<p id=parole>"+paroles2[0]+"</p>");
                    marker2.openPopup();
                    paroles2 = paroles2.slice(1,);
                } else {
                    if (compteur==4){
                        marker3.addTo(map);
                    }
                    marker._popup.setContent("<p id=parole>"+paroles[0]+"</p>");
                    marker.openPopup();
                    paroles = paroles.slice(1,);
                } 
            } else {
                marker.remove();
                map.setView([result2["latitude"], result2["longitude"]],18);
                if (compteur%2 != 0) {
                    marker2._popup.setContent("<p id=parole>"+paroles2[0]+"</p>");
                    marker2.openPopup();
                    paroles2 = paroles2.slice(1,);
                } else {
                    marker3._popup.setContent("<p id=parole>"+paroles3[0]+"</p>");
                    marker3.openPopup();
                    paroles3 = paroles3.slice(1,);
                }
            } 
            if (compteur==8) {       
                marker2.remove();
                marker3.closePopup();
                recupFetchJeannineZar2();
            }
            if (compteur==11) {
                marker3.remove();
            }
        }
    });
})

//PERSONNAGES JEANNINE ET ZARZELLI
var recupFetchJeannineZar2 = function() {
    var error = false;
    if (compteur==8) {
        var i = compteur;
        //JEANNINE
        fetch('http://localhost/projetweb/objet.php?id=15').then(response => response.json())
        .then(result => {
            var objectIcon = new L.icon({iconUrl:result["icone"], iconSize:[result["iconeSizeLarg"], result["iconeSizeLong"]], iconAnchor:[2,9], popupAnchor:[result["iconeSizeLarg"]/2,0]});
            var paroles = result["message"].split("$");
            var marker = L.marker([result["latitude"], result["longitude"]], {icon:objectIcon}).bindPopup("<p id=parole>"+paroles[0]+"</p>", {fontSize: 10, maxWidth:160}).addTo(map);
            //ZARZELLI2
            fetch('http://localhost/projetweb/objet.php?id=13').then(response => response.json())
            .then(result2 => {
                map.setView([result2["latitude"], result2["longitude"]],20);
                var objectIcon2 = new L.icon({iconUrl:result2["icone"], iconSize:[result2["iconeSizeLarg"], result2["iconeSizeLong"]], iconAnchor:[2,9], popupAnchor:[result2["iconeSizeLarg"]/2,0]});
                var paroles2 = result2["message"].split("$");
                var marker2 = L.marker([result2["latitude"], result2["longitude"]], {icon:objectIcon2}).bindPopup("<p id=parole>"+paroles2[0]+"</p>", {fontSize: 10, maxWidth:160}).addTo(map).openPopup();
                paroles2 = paroles2.slice(1,);
                btn.addEventListener('click', function(){
                    if (compteur==i+1) {
                        map.setView([result["latitude"], result["longitude"]], 19);
                        btn.style.visibility = 'hidden';
                        interactionJoueur.style.visibility = 'visible'; 
                        marker.openPopup();
                        paroles = paroles.slice(1,);
                    }
                });
                valueReponse.addEventListener('keyup', function(e) {
                    if (valueReponse.value.toLowerCase() == result["bloquePar"] && e.key == "Enter") {
                        if (error) {
                            recupFetchDiscussion(16, false);
                        }
                        interactionJoueur.style.visibility = 'hidden';
                        valueReponse.value = "";
                        marker.bindPopup(paroles[0], {fontSize: 10, maxWidth:160}).openPopup();
                        //MIGNIBUS vide 
                        fetch('http://localhost/projetweb/objet.php?id=16').then(response => response.json())
                        .then(result3 => {
                            var marker3 = L.marker([result3["latitude"], result3["longitude"]], {icon:new L.icon({iconUrl:result3["icone"], iconSize:[result3["iconeSizeLarg"], result3["iconeSizeLong"]], iconAnchor:[2,9], popupAnchor:[result3["iconeSizeLarg"]/2,0], maxZoom:10})}).bindPopup(result3["message"], {fontSize: 10, maxWidth:160}).addTo(map);
                            btn.style.visibility = 'visible';
                            btn.addEventListener('click', function(){
                                if (compteur==i+2) {
                                    marker2.bindPopup("<p id=parole>"+paroles2[0]+"</p>", {fontSize: 10, maxWidth:160}).openPopup();
                                }
                                if (compteur==i+3) {
                                    recupFetchDiscussion(1, true);
                                    btn.style.visibility = 'hidden';
                                    var image = document.createElement('img');
                                    image.src = "images/bus/bus1_2.png";
                                    image.id = "testimage";
                                    bus.innerHTML = "";
                                    bus.appendChild(image);
                                    marker.remove();
                                    marker2.remove();
                                    marker3.remove();
                                    recupFetch(17);
                                }
                            });
                        });
                    } else if (compteur==i+1 && e.key == "Enter") {
                        if (compteur==9) {
                            recupFetchDiscussion(14, false);
                        }
                        error = true;
                    }
                });
            })
        })
    }
}

//FONCTION PELUCHES
var recupFetchPeluche = function(n) {
    fetch('http://localhost/projetweb/objet.php?id='+String(n)).then(response => response.json())
    .then(result => {
        var objectIcon = new L.icon({iconUrl:result["icone"], iconSize:[result["iconeSizeLarg"], result["iconeSizeLong"]], iconAnchor:[2,9], popupAnchor:[result["iconeSizeLarg"]/2,0], maxZoom:10});
        var marker = L.marker([result["latitude"], result["longitude"]], {icon:objectIcon}).bindPopup("<p id=parole>"+result["message"]+"</p>", {fontSize: 10}).addTo(map);
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
    });
}

//APPEL DE LA PERMIERE PELUCHE
var compteurPeluche = 0;
recupFetchPeluche(7);



//FONCTION GERANT L'AFFICHAGE DES MESSAGES DANS LE MIGNIBUS
var afficheMessageBus = function(message, icone, couleur) {
    bulleMessage = document.createElement('div');
    bulleMessage.setAttribute("id", "bulleMessage");

    var contenuMessage = document.createElement('div');
    contenuMessage.setAttribute("id", "contenuMessage");
    contenuMessage.innerHTML += message;

    var photoMessage = document.createElement('div');
    photoMessage.setAttribute("id", "photoMessage");
    var img = document.createElement("img");
    img.src = icone;
    img.style.height = '40px';
    img.style.width = '40px';
    photoMessage.appendChild(img);

    bulleMessage.appendChild(contenuMessage);
    bulleMessage.appendChild(photoMessage);
    bulleMessage.style.backgroundColor = couleur;

    message1.appendChild(bulleMessage);

    message1.scrollTop = message1.scrollHeight;
}

//FONCTION GERANT LA CONVERSATION DANS LE MIGNIBUS
var recupFetchDiscussion = function(nb, bus) {
    fetch('http://localhost/projetweb/objet.php?conversation='+String(nb))
    .then(response => response.json())
    .then(results => {
        var result = results[0];
        var paroles = result["dialogueBus"].split("$");
        var imageBus = result["imageBus"].split("$");

        // setTimeout(afficheMessageBus(paroles[i], imageBus[i]), 10000);

        for (var i=0; i < paroles.length; i++){
            if (bus){
                afficheMessageBus(paroles[i], imageBus[i], 'rgb(133, 122, 107)');
            }
            else {
                afficheMessageBus(paroles[i], imageBus[i], 'rgb(250, 214, 210)');
            }
        }
    })
}