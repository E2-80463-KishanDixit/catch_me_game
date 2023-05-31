var box = document.getElementById('box');

box.addEventListener('mouseenter',function(){
    console.log(window.innerHeight+" inener Height");
    console.log(window.innerWidth+" inener Width");

    box.style.top = Math.floor(Math.random() *(window.innerHeight- 100))+'px';
    box.style.left = Math.floor(Math.random() *(window.innerWidth- 100))+'px';
});