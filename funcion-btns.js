const pantallaInicio = document.getElementById('inicio'), //declaracion e inicializacion de pantallas
      pantallaAgregarPalabra = document.getElementById('agregar-palabra'),
      pantallaJuego = document.getElementById('juego');

const textArea = document.getElementById('textarea-palabra'),
      modalError = document.getElementById('modal-error'),
      modalExito = document.getElementById('modal-exito'),
      palabraADescubrir = document.getElementById('palabra-a-descubrir'),
      letrasErradas = document.getElementById('letras-equivocadas'),
      containerPalabras = document.getElementById('container-palabras');

const iniciarJuegoBtn = document.getElementById('iniciar-btn'), //declaracion e inicializacion de botones
      irPantallaAgregarPalabraBtn = document.getElementById('agregar-btn'),
      guardarPalabra = document.getElementById('guardar-palabra-btn'),
      volverBtn = document.getElementById('volver-btn'),
      reiniciarJuego = document.getElementById('reiniciar-btn'),
      finalizarJuego = document.getElementById('finalizar-btn');

// palabras default para el juego
const palabrasDefault = ["PEPITO", "VEHICULO", "IMPRESOR", "EMPRESA", "OCEANO"];
let palabras = []; // palabras para jugar
palabras = palabrasDefault.map(palabra => { 
    return palabra; //agregar palabras default
});

let palabraParaJugar = [];

function agregarPalabra() {
    palabras.push(textArea.value);
}

// BOTONES

iniciarJuegoBtn.addEventListener('click', () => {
    pantallaInicio.classList.toggle('hidden');
    pantallaJuego.classList.toggle('hidden');
    permitirJuego(); // permiso para empezar a jugar
    armarHorca(); // se arma la horca con boton iniciar
    generarIndiceRandom(); // se genera nueva palabra aleatoria cada vez que se inicia el juego
    // console.log(palabraElegida(indicePalabraRandom)); // se consologea la palabra a jugar
    palabraParaJugar = palabraElegida(indicePalabraRandom).split(""); // se pasa a un array las letras de la palabra a jugar
    palabraADescubrir.innerHTML = palabraParaJugar.join(" "); // muestra palabra a descubrir
    crearSpan();
});

irPantallaAgregarPalabraBtn.addEventListener('click', () => {
    pantallaInicio.classList.toggle('hidden');
    pantallaAgregarPalabra.classList.toggle('hidden');
    permitirJuego();
});

guardarPalabra.addEventListener('click', () => {
    permitirJuego();
    const validar = textArea.value;
    const mayusculas = new RegExp(/(^[A-Z]{2,8})$/);

    if (validar.includes(" ") || !validar.match(mayusculas)) {
        textArea.value = ""; // limpia el textarea
        modalError.classList.toggle('hidden'); // muestra el modal
        setTimeout(() => {
            modalError.classList.toggle('hidden'); // esconde el modal a los ms indicados
        }, 2000);
    }
    else {
        agregarPalabra();
        textArea.value = ""; // limpia el textarea
        modalExito.classList.toggle('hidden'); // muestra el modal
        setTimeout(() => {
            modalExito.classList.toggle('hidden'); // esconde el modal a los ms indicados
        }, 2000);
    }
});

volverBtn.addEventListener('click', () => {
    pantallaAgregarPalabra.classList.toggle('hidden');
    pantallaInicio.classList.toggle('hidden');
    permitirJuego();
});

reiniciarJuego.addEventListener('click', () => {
    limpiar(); // se vacia el canvas
    armarHorca(); // se arma el diseño
    generarIndiceRandom();
    // console.log(palabraElegida(indicePalabraRandom));
    palabraParaJugar = palabraElegida(indicePalabraRandom).split("");
    palabraADescubrir.innerHTML = palabraParaJugar.join(" ");
    limpiarArrayErrores();
    limpiarSpan();
    crearSpan();
});

finalizarJuego.addEventListener('click', () => {
    pantallaInicio.classList.toggle('hidden');
    pantallaJuego.classList.toggle('hidden');
    limpiarArrayErrores();
    limpiarSpan();
    permitirJuego();
});