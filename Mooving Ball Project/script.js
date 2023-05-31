"use strict"
var ball = document.getElementById('ball');
var position = 10;
ball.getBoundingClientRect();
console.log(ball.getBoundingClientRect());

document.addEventListener('keydown',function(event){
    // FOR S KEY FOR Down
    if((event.keyCode == 83 || event.keyCode == 40) && ball.getBoundingClientRect().bottom < window.innerHeight-10){
        position = ball.getBoundingClientRect().top;
        position += 50;
         ball.style.top = position + 'px';
    }
    // FOR D KEY FOR RIGHT 
    else if((event.keyCode == 68 ||event.keyCode == 39) && ball.getBoundingClientRect().right < window.innerWidth-10){
        position =  ball.getBoundingClientRect().left;
        position += 50;
        ball.style.left = position + 'px';
    }
    // FOR W KEY FOR UP 
    else if((event.keyCode == 87||event.keyCode == 38) && ball.getBoundingClientRect().top > 0){
        position = ball.getBoundingClientRect().top;
        position -=50;
        ball.style.top = position +"px";
    }
    // FOR A KEY FOR LEFT
    else if((event.keyCode == 65 ||event.keyCode == 37)  && ball.getBoundingClientRect().left > 0){
        position =ball.getBoundingClientRect().left ;
        position -= 50;
        ball.style.left = position + 'px';
    }
});