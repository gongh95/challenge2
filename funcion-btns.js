const pantallaInicio = document.getElementById('inicio'), //declaracion e inicializacion de pantallas
      pantallaAgregarPalabra = document.getElementById('agregar-palabra'),
      pantallaJuego = document.getElementById('juego');

const iniciarJuegoBtn = document.getElementById('iniciar-btn'), //declaracion e inicializacion de botones
      irPantallaAgregarPalabraBtn = document.getElementById('agregar-btn'),
      guardarPalabra = document.getElementById('guardar-palabra-btn'),
      volverBtn = document.getElementById('volver-btn'),
      reiniciarJuego = document.getElementById('reiniciar-btn'),
      finalizarJuego = document.getElementById('finalizar-btn');

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
    pantallaAgregarPalabra.classList.toggle('hidden');
    pantallaInicio.classList.toggle('hidden');
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