// assets/js/main.js

// Lógica del menú móvil
const btn = document.getElementById('mobile-menu-button');
const menu = document.getElementById('mobile-menu');
const mobileLinks = menu.querySelectorAll('a');

btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.add('hidden');
    });
});

// Efecto de sombra en el header al hacer scroll
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        header.classList.add('shadow-md', 'bg-white/95', 'backdrop-blur-sm');
        header.classList.remove('shadow-sm', 'bg-white');
    } else {
        header.classList.add('shadow-sm', 'bg-white');
        header.classList.remove('shadow-md', 'bg-white/95', 'backdrop-blur-sm');
    }
});

// Lógica del Formulario de Reserva hacia WhatsApp
document.getElementById('reserva-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const servicio = document.getElementById('servicio').value;
    const fecha = document.getElementById('fecha').value;
    const jornada = document.getElementById('jornada').value;

    const mensaje = `Hola PodoSeñas, mi nombre es *${nombre}*. Me gustaría consultar disponibilidad para una atención de *${servicio}*.\n\nTengo preferencia para la fecha: *${fecha}* durante la *${jornada}*.\n\nQuedo atento(a).`;

    const textoCodificado = encodeURIComponent(mensaje);
    const numeroClínica = "56935331804";

    window.open(`https://wa.me/${numeroClínica}?text=${textoCodificado}`, '_blank', 'noopener,noreferrer');
});