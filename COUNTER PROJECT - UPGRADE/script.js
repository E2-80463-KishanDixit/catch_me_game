var button = document.getElementById('startBtn');
var slide = document.getElementById('current');
var preSlide =  document.getElementById('previous');

// var megiieCard = document.getElementById('megiieRedy');

button.addEventListener('click',startCount);

var counter = document.getElementById('digitCounter'); 
var interval;

function startCount(){
    let maxCount = document.querySelector('#maxCount').value;
    var temp = 1;
    interval = setInterval(function setCount(){
        if(maxCount< temp){
            clearInterval(interval);
            megiieCard.style.display = 'inline-block';
            return;
        }
        var id = setTimeout(function(){
            slide.classList.add('animation');
            slide.innerHTML = temp;
        },1000)  
        if(slide.style.top == 0){
            slide.classList.remove('animation');
            preSlide.innerHTML = temp;
            temp++;
            clearTimeout(id);
        }
        // setTimeout(function(){},1000);
    }, 1000);



    // for(var i =1 ; i<= maxCount ;i++){}
}


