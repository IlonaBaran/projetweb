var image = document.getElementById('coin');
var change = 0;


setInterval(function(){
    image.style.left = change+"%";
    if (change<=44){    
        change+=0.5;    
    }
    if(change>44){
        clearInterval();
    }
},50);
