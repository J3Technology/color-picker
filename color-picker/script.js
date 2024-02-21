var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');
var random = document.getElementById('random');

function setGradient() {
    body.style.background = 'linear-gradient(to right,'
     + color1.value
     + ',' 
     + color2.value 
     + ')';

     css.textContent = body.style.background + ";"
} 

function randColor(){
    num =  (Math.random() * 0xfffff * 10000).toString(16);
    return '#' + num.slice(0,6);
    
}

setGradient();

color1.addEventListener('input', setGradient);
   
color2.addEventListener('input', setGradient);

random.addEventListener('click', function(){
    color1.value = randColor();
    color2.value = randColor();
    setGradient();
})