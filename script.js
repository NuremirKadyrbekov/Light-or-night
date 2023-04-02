let body = document.querySelector('body');
let moon = document.getElementById('moon');
let sun = document.getElementById('sun');
const ClickLight = () =>{
    body.style.background = 'linear-gradient(rgb(173, 223, 224) ,rgb(199, 219, 161),rgb(138, 135, 135))';
    moon.style.display= 'none'
    sun.style.display = 'flex'
}
ClickLight();
const ClickDark = () =>{
    body.style.background = 'linear-gradient(rgb(95, 100, 100) ,rgb(71, 85, 87),rgb(202, 167, 211))';
     moon.style.display= 'flex'
     sun.style.display = 'none'
}