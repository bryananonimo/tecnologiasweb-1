const opciones = {
    root: null,
    threshold: Array.from({ length: 101 }, (_, i) => i / 100)
};

const observador = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const rect = entry.boundingClientRect;
        const esInvertida = entry.target.classList.contains('seccion-invertida');

        if (rect.top < window.innerHeight / 2) {
            let porcentajeVisible = entry.intersectionRatio;

            if (porcentajeVisible < 0.25) porcentajeVisible = 0.25;
            entry.target.style.opacity = porcentajeVisible;

            const desplazamiento = (1 - entry.intersectionRatio) * 80;

            if (esInvertida) {
                entry.target.style.transform = `translateX(-${desplazamiento}px)`;
            } else {
                entry.target.style.transform = `translateX(${desplazamiento}px)`;
            }
        } else {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateX(0px)';
        }
    });
}, opciones);

document.querySelectorAll('.contenedor-scroll').forEach(seccion => {
    observador.observe(seccion);
});
