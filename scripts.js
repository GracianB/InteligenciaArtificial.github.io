// Contador de visitas
const contador = document.getElementById('contador');

let visitas = 0;
if (localStorage.getItem('visitas')) {
    visitas = parseInt(localStorage.getItem('visitas'));
}
visitas++;
localStorage.setItem('visitas', visitas);

contador.textContent = `Visitas: ${visitas}`;

// Minijuego: Capturar el círculo
const minijuego = document.getElementById('minijuego');
const circulo = document.createElement('div');
minijuego.appendChild(circulo);

circulo.addEventListener('mouseover', moverCirculo);

function moverCirculo() {
    const x = Math.random() * (minijuego.clientWidth - circulo.clientWidth);
    const y = Math.random() * (minijuego.clientHeight - circulo.clientHeight);
    circulo.style.transform = `translate(${x}px, ${y}px)`;
}

moverCirculo();

// Animación de mensaje codificado
const mensajeCodificado = document.querySelector('.codificado');
mensajeCodificado.addEventListener('mouseover', () => {
    mensajeCodificado.style.animationPlayState = 'paused';
});

mensajeCodificado.addEventListener('mouseout', () => {
    mensajeCodificado.style.animationPlayState = 'running';
});
