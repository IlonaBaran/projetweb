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
var compteur=23;

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
    progresSum.innerText = compteur;
    fetch('http://localhost/projetweb/objet.php?id='+String(nb)).then(response => response.json())
    .then(result => {
        map.setView([result["latitude"], result["longitude"]],14);
        console.log(result["latitude"]);
        console.log(result["longitude"]);
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
            valueReponseValide.addEventListener('click', function fct(){
                noValueReponse.innerText = "";
                if (strNoAccent(valueReponse.value.toLowerCase()) == result["bloquePar"] || result["bloquePar"] == null){
                    valueReponseValide.removeEventListener('click', fct);
                    //valueReponseValide.style.visibility = "hidden";
                    map.closePopup();
                    marker._popup.setContent(paroles[0]);
                    marker.openPopup();
                    appliqueEventDblclick(marker,result["icone"],result["dblClickBus"]);
                    marker.on('dblclick', function (e) {
                        //valueReponseValide.style.visibility = "visible";
                        console.log(nb);
                        if (nb+1<20){
                            compteur++;
                            recupFetch(nb+1);       
                        } else if (nb+1==20) {
                            compteur++;
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
                compteur++;
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
        //Partie Evènement
        console.log("laaaaOUIYEP");
        appliqueEventZoomend(marker, result["zoommini"]);
        if (result["eventDragDrop"]) {
            console.log("laaaaOUIYEP222");
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
                console.log("numero de la personne (id)");
                console.log(n+1);
                //ATTENTION CHANGER ICI n
                if (n==14){
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
        console.log(results[0]);
        var result2 = results[1];
        //BAPTISTE
        map.setView([result["latitude"], result["longitude"]],17);
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
            //compteur++;
            progresSum.innerText = compteur;
            if (compteur==19){
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
        //compteur++;
        //compteur++;
    })
};


var recupFetchMaeve = function() {
    progresSum.innerText = compteur;
    btn.style.visibility = "visible";
    fetch('http://localhost/projetweb/objet.php?id=20').then(response => response.json())
    .then(result => {
        //MAEVE
        var objectIcon = new L.icon({iconUrl:result["icone"], iconSize:[result["iconeSizeLarg"], result["iconeSizeLong"]], iconAnchor:[2,9], popupAnchor:[result["iconeSizeLarg"]/2,0], maxZoom:10});
        var paroles = result["message"].split("$");
        var marker = L.marker([result["latitude"], result["longitude"]], {icon:objectIcon, draggable:true}).bindPopup(paroles[0], {fontSize: 10}).addTo(map);
        paroles = paroles.slice(1,);
        marker.openPopup();
        //MAEVEMASQUE
        btn.addEventListener('click', function(){
            //compteur++;
            progresSum.innerText = compteur;
            console.log(compteur);
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
                                console.log(marker2);
                                marker.addTo(map);
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
        });
        compteur++;
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

var appliqueEventDblclick = function(marker, imgSrc, boolEvent) {
    marker.on('dblclick', function (e) {
        console.log("mmmm");
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

// //recupFetch(3);
// /*btn.addEventListener('click', function(){
//     recupFetch(progresSum.innerText);
// });*/
// //Faire apparaitre Victor et Amaury à l'ENSG

// var compteur = progresSum.innerText;
// btn.addEventListener('click', function(){
//     compteur++;
//     progresSum.innerText = compteur;
// });

// fetch('http://localhost/projetweb/objet.php?dialogue=0').then(response => response.json())
//     .then(results => {
//         var result = results[0];
//         var result2 = results[1];
//         var result3 = results[2];
//         //COINDET
//         var objectIcon = new L.icon({iconUrl:result["icone"], iconSize:[result["iconeSizeLarg"], result["iconeSizeLong"]], iconAnchor:[2,9], popupAnchor:[result["iconeSizeLarg"]/2,0], maxZoom:10});
//         var paroles = result["message"].split("$");
//         var marker = L.marker([result["latitude"], result["longitude"]], {icon:objectIcon, draggable:true}).bindPopup(paroles[0], {fontSize: 10}).addTo(map).openPopup();
//         paroles = paroles.slice(1,);
//         //appliqueEventZoomend(marker);
//         //ZARZELLI
//         var objectIcon2 = new L.icon({iconUrl:result2["icone"], iconSize:[result2["iconeSizeLarg"], result2["iconeSizeLong"]], iconAnchor:[2,9], popupAnchor:[result2["iconeSizeLarg"]/2,0], maxZoom:10});
//         var paroles2 = result2["message"].split("$");
//         var marker2 = L.marker([result2["latitude"], result2["longitude"]], {icon:objectIcon2, draggable:true}).bindPopup(paroles2[0], {fontSize: 10}).addTo(map);
//         //appliqueEventZoomend(marker2);
//         //FILLON
//         var objectIcon3 = new L.icon({iconUrl:result3["icone"], iconSize:[result3["iconeSizeLarg"], result3["iconeSizeLong"]], iconAnchor:[2,9], popupAnchor:[result3["iconeSizeLarg"]/2,0], maxZoom:10});
//         var paroles3 = result3["message"].split("$");
//         var marker3 = L.marker([result3["latitude"], result3["longitude"]], {icon:objectIcon3, draggable:true}).bindPopup(paroles3[0], {fontSize: 10});
//         btn.addEventListener('click', function(){
//             compteur++;
//             progresSum.innerText = compteur;
//             if (compteur<=4){
//                 if (compteur%2 != 0) {
//                     marker2._popup.setContent(paroles2[0]);
//                     marker2.openPopup();
//                     paroles2 = paroles2.slice(1,);
//                 } else {
//                     if (compteur==4){
//                         marker3.addTo(map);
//                         //appliqueEventZoomend(marker3);
//                     }
//                     marker._popup.setContent(paroles[0]);
//                     marker.openPopup();
//                     paroles = paroles.slice(1,);
//                 } 
//             } else {
//                 marker.remove();
//                 if (compteur%2 != 0) {
//                     marker2._popup.setContent(paroles2[0]);
//                     marker2.openPopup();
//                     paroles2 = paroles2.slice(1,);
//                 } else {
//                     marker3._popup.setContent(paroles3[0]);
//                     marker3.openPopup();
//                     paroles3 = paroles3.slice(1,);
//                 }
//             } 
//             if (compteur==8) {
//                 marker2.remove();
//                 marker3.closePopup();
//             }
//             if (compteur==10) {
//                 marker3.remove();
//             }
//         });
//     })

// btn.addEventListener('click', function(){
//     if (compteur==7) {
//         btn.style.visibility = 'hidden';
//     }
// });

//Faire apparaitre Tristan Fillon au niveau du portail de sécurité
//Faire apparaitre Jeanine dans l'ENSG et deplacer Amaury a côté de Jeanine

// console.log(progresSum.textContent);
// progresSum.addEventListener('DOMSubtreeModified', function(){
//     if (compteur==8) {
//         console.log("laaaa");
//         fetch('http://localhost/projetweb/objet.php?id=21').then(response => response.json())
//         .then(result => {
//             //JEANINE
//             console.log("ooooo");
//             var objectIcon = new L.icon({iconUrl:result["icone"], iconSize:[result["iconeSizeLarg"], result["iconeSizeLong"]], iconAnchor:[2,9], popupAnchor:[result["iconeSizeLarg"]/2,0], maxZoom:10});
//             var marker = L.marker([result["latitude"], result["longitude"]], {icon:objectIcon, draggable:true}).bindPopup("...", {fontSize: 10}).addTo(map).openPopup();
//             fetch('http://localhost/projetweb/objet.php?id=22').then(response => response.json())
//             .then(result2 => {
//                 //ZARZELLI2
//                 map.setView([result2["latitude"], result2["longitude"]],20);
//                 var objectIcon2 = new L.icon({iconUrl:result2["icone"], iconSize:[result2["iconeSizeLarg"], result2["iconeSizeLong"]], iconAnchor:[2,9], popupAnchor:[result2["iconeSizeLarg"]/2,0], maxZoom:10});
//                 var paroles2 = result2["message"].split("$");
//                 var marker2 = L.marker([result2["latitude"], result2["longitude"]], {icon:objectIcon2, draggable:true}).bindPopup(paroles2[0], {fontSize: 10}).addTo(map).openPopup();
//                 paroles2 = paroles2.slice(1,);
//                 valueReponseValide.addEventListener('click', function(){
//                     if (valueReponse.value.toLowerCase() == result["bloquePar"]){
//                         marker.bindPopup(result["message"], {fontSize: 10}).openPopup();
//                         fetch('http://localhost/projetweb/objet.php?id=23').then(response => response.json())
//                         .then(result3 => {
//                             //MIGNIBUS
//                             var marker3 = L.marker([result3["latitude"], result3["longitude"]], {icon:new L.icon({iconUrl:result3["icone"], iconSize:[result3["iconeSizeLarg"], result3["iconeSizeLong"]], iconAnchor:[2,9], popupAnchor:[result3["iconeSizeLarg"]/2,0], maxZoom:10}), draggable:true}).bindPopup(result3["message"], {fontSize: 10}).addTo(map);
//                             btn.style.visibility = 'visible';
//                             btn.addEventListener('click', function(){
//                                 if (compteur==9) {
//                                     marker2.bindPopup(paroles2[0], {fontSize: 10}).openPopup();
//                                 }
//                                 if (compteur==10) {
//                                     marker.remove();
//                                     marker2.remove();
//                                     marker3.remove();
//                                 }
//                             });
//                         })
//                     }
//                 });
//             })
//         })
//     }
// // });

// btn.addEventListener('click', function(){
//     if (compteur==9) {
//         map.setView([48.86605828999056, 2.3153718330271382],8);
//         recupFetch(6);
//     }
// });



if (compteur==23) {
    //map.setView([48.86605828999056, 2.3153718330271382],8);
    recupFetch(19);
}


/*
var testMessage = document.getElementById("testMessage");
=======
// test ilona pour conv - je le fais ici comme j'ai pas acces encore au truc d amelie et ca commence seulement a amelie-
var compteurZ = 0;
var compteurF = 0;
// var contenuMessage = document.getElementById("contenuMessage");
// var photoMessage = document.getElementById("photoMessage");

var message1 = document.getElementById("message");

var afficheMessageBus = function(message, icone) {
    bulleMessage = document.createElement('div');
    bulleMessage.setAttribute("id", "bulleMessage");

    // var bulleMessage = document.createElement('div');
    // contenuMessage.setAttribute("id", "contenuMessage");
    // var new_div = document.createElement('div');
    // new_div.setAttribute("id", "new_div");

    // new_div.style.width= '100%';
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

>>>>>>> 2c9354fc0a8797ca464bec3072a290b6b0299b72

testMessage.addEventListener('click', function(){
        var messageBus1 = "bonjour1$bonjour2".split("$");
        var messageBus2 = "Fillon1$Fillon2".split("$");

        if (compteurZ==0){
            // afficheMessageBus(result2["messageBus"].split("$")[0], result2["icone"]);
            afficheMessageBus(messageBus1[0], 'images/zarzelli.jpg');
            afficheMessageBus(messageBus1[0], 'images/zarzelli.jpg');
            afficheMessageBus(messageBus1[0], 'images/zarzelli.jpg');
            afficheMessageBus(messageBus1[0], 'images/zarzelli.jpg');
            afficheMessageBus(messageBus1[0], 'images/zarzelli.jpg');
            afficheMessageBus(messageBus1[0], 'images/zarzelli.jpg');
            compteurZ++;
        }
        else if (compteurF ==0){
            afficheMessageBus(messageBus2[0], 'images/fillon.jpg');
            compteurF++;
        }
        else if (compteurZ == 1){
            afficheMessageBus(messageBus1[1], 'images/zarzelli.jpg');
            afficheMessageBus(messageBus1[1], 'images/zarzelli.jpg');
            afficheMessageBus(messageBus1[1], 'images/zarzelli.jpg');

            compteurZ++;
        }
        // })
    }
);
});*/
