// var canvas = document.getElementById("myCanvas");
// var ctx = canvas.getContext("2d");
// var x = canvas.width/10;
// var y = canvas.height-30;
// var dx = 2;


// // $coindet = document.getElementById("coindet");

// // function drawBall() {
// //     $coindet;
// // }

// function draw() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     // drawBall();
//     x += dx;
// }

// setInterval(draw, 10);

var image = document.getElementById('coin');
var change = 0;


setInterval(function(){
    image.style.left = change+"px";
    if (change<=247){    
        change+=5;    
    }
    if(change>247){
        clearInterval();
        // change-=5;
    }
},50);
