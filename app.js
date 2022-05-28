const canvas = document.getElementById('canvas');
const lapiz = canvas.getContext('2d');

function armarHorca() { // funcion para crear horca
    lapiz.beginPath();
    lapiz.rect(100,300,90,5);
    lapiz.rect(140,100,5,200);
    lapiz.rect(140,100,80,5);
    lapiz.rect(220,100,5,20);
    lapiz.fillStyle = "#000";
    lapiz.fill();
    lapiz.closePath();
}