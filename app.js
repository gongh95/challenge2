const canvas = document.getElementById('canvas');
const lapiz = canvas.getContext('2d');

function armarHorca() { // funcion para crear horca
    lapiz.beginPath();
    lapiz.rect(0,250,240,5); //base
    lapiz.rect(50,0,5,250); //palo largo vertical
    lapiz.rect(50,0,100,5); //palo corto horizontal
    lapiz.rect(147,0,5,20); //cuerda
    lapiz.fillStyle = "#000";
    lapiz.fill();
    lapiz.closePath();
}

function primerIntento() { //cabeza
    lapiz.beginPath();
    lapiz.arc(150,45,25,0,2*Math.PI);
    lapiz.lineWidth = 5; //linea mas gruesa
    lapiz.strokeStyle = "#000";
    lapiz.stroke();
}

function segundoIntento() { //cuerpo
    lapiz.beginPath();
    lapiz.moveTo(150,70);
    lapiz.lineTo(150,182);
    lapiz.lineWidth = 5; //linea mas gruesa
    lapiz.strokeStyle = "#000";
    lapiz.stroke();
}

function tercerIntento() { //brazo izq
    lapiz.beginPath();
    lapiz.moveTo(150,80);
    lapiz.lineTo(90,120);
    lapiz.lineWidth = 5; //linea mas gruesa
    lapiz.strokeStyle = "#000";
    lapiz.stroke();
}

function cuartoIntento() { //brazo der
    lapiz.beginPath();
    lapiz.moveTo(150,80);
    lapiz.lineTo(210,120);
    lapiz.lineWidth = 5; //linea mas gruesa
    lapiz.strokeStyle = "#000";
    lapiz.stroke();
}

function quintoIntento() { //pierna izq
    lapiz.beginPath();
    lapiz.moveTo(150,180);
    lapiz.lineTo(90,220);
    lapiz.lineWidth = 5; //linea mas gruesa
    lapiz.strokeStyle = "#000";
    lapiz.stroke();
}

function sextoIntento() { // pierna der
    lapiz.beginPath();
    lapiz.moveTo(150,180);
    lapiz.lineTo(210,220);
    lapiz.lineWidth = 5; //linea mas gruesa
    lapiz.strokeStyle = "#000";
    lapiz.stroke();
}