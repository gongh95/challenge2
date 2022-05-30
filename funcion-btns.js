const pantallaInicio = document.getElementById('inicio'), //declaracion e inicializacion de pantallas
      pantallaAgregarPalabra = document.getElementById('agregar-palabra'),
      pantallaJuego = document.getElementById('juego');

const textArea = document.getElementById('textarea-palabra');

const iniciarJuegoBtn = document.getElementById('iniciar-btn'), //declaracion e inicializacion de botones
      irPantallaAgregarPalabraBtn = document.getElementById('agregar-btn'),
      guardarPalabra = document.getElementById('guardar-palabra-btn'),
      volverBtn = document.getElementById('volver-btn'),
      reiniciarJuego = document.getElementById('reiniciar-btn'),
      finalizarJuego = document.getElementById('finalizar-btn');

// palabras default para el juego
const palabrasDefault = ["PEPITO", "OTORRINOLARINGOLOGO", "VEHICULO", "IMPRESORA", "ACTIVIDAD", "OCEANO"];
let palabras = []; // palabras para jugar
palabras = palabrasDefault.map(palabra => { 
    return palabra; //agregar palabras default
});

function agregarPalabra() {
    palabras.push(textArea.value);
}

// BOTONES

iniciarJuegoBtn.addEventListener('click', () => {
    pantallaInicio.classList.toggle('hidden');
    pantallaJuego.classList.toggle('hidden');
    armarHorca(); // se arma la horca con boton iniciar
});

irPantallaAgregarPalabraBtn.addEventListener('click', () => {
    pantallaInicio.classList.toggle('hidden');
    pantallaAgregarPalabra.classList.toggle('hidden');
});



guardarPalabra.addEventListener('click', () => {
    // pantallaAgregarPalabra.classList.toggle('hidden');
    // pantallaInicio.classList.toggle('hidden');
    const validar = textArea.value;
    // const reg = new RegExp([A-Z]);
    const reg = /(^[A-Z]{2,30})$/;
    const mayusculas = new RegExp(/(^[A-Z]{2,30})$/);
    console.log(mayusculas);
    // textArea.value = textArea.value.toUpperCase(); //convertir a mayuscula

    if (validar.includes(" ") || !validar.match(mayusculas)) {
        textArea.value = ""; // limpia el textarea
        return console.log("Solo ingresar letras mayúsculas");
    }
    else {
        agregarPalabra();
        textArea.value = ""; // limpia el textarea
    }
});

volverBtn.addEventListener('click', () => {
    pantallaAgregarPalabra.classList.toggle('hidden');
    pantallaInicio.classList.toggle('hidden');
});

reiniciarJuego.addEventListener('click', () => {
    limpiar();
    armarHorca();
});

finalizarJuego.addEventListener('click', () => {

    pantallaInicio.classList.toggle('hidden');
    pantallaJuego.classList.toggle('hidden');
});