let indicePalabraRandom;

function generarIndiceRandom() {
    indicePalabraRandom = Math.floor(Math.random()*palabras.length);
}

function palabraElegida(indice) {
    return palabras[indice];
}

// crear span por cada letra
function crearSpan() {
    palabraParaJugar.map((letra) => {
        const span = document.createElement('p');
        const caracter = document.createTextNode(letra);
        span.appendChild(caracter);
        span.classList.add('spancito');
        containerPalabras.appendChild(span);
    });
}

function limpiarSpan() { //limpiar span con letras de la palabra
    containerPalabras.innerHTML = "";
}

let permitidoJugar = false; // permiso para jugar

function letraCorrecta(unaLetra) {

}

function letraIncorrecta(unaLetra) {

}


// SECCION DE PRESSKEY

const caracteresPermitidos = new RegExp(/(^[a-z]{0,16})$/);
let arrayLetrasErradas = [];

function permitirJuego() {
    if (pantallaJuego.classList.contains("hidden")) {
        permitidoJugar = false;
    }
    else {
        permitidoJugar = true;
    }
}

function limpiarArrayErrores() {
    arrayLetrasErradas = [];
    letrasErradas.innerText = arrayLetrasErradas;
}

document.addEventListener('keydown', (e) => {
    if (permitidoJugar && e.key.match(caracteresPermitidos)) {
        let teclaPresionada = e.key.toUpperCase(); // se pasa la letra permitida a mayuscula
        //console.log(teclaPresionada); // se consologea la letra presionada
        arrayLetrasErradas.push(teclaPresionada); // se agrega el caracter valido al array de errores
        letrasErradas.innerText = arrayLetrasErradas;
    }
    else {
        console.log("Esa tecla no se va a mostrar");
    }
})


// TECLADO PARA MOVIL

function tecladoMovil() {
    inputVacio.focus();
}

tecladoVirtual.addEventListener('click', tecladoMovil);
if (tecladoVirtual.checked) {
    console.log("hacer algo");
    tecladoMovil();
}