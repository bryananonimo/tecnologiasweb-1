const opcionesNegocios = {
    root: null,
    threshold: Array.from({ length: 101 }, (_, i) => i / 100)
};

const observadorNegocios = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const rect = entry.boundingClientRect;

        if (rect.top < window.innerHeight / 2) {
            let porcentajeVisible = entry.intersectionRatio;

            if (porcentajeVisible < 0.25) porcentajeVisible = 0.25;
            entry.target.style.opacity = porcentajeVisible;

            const escala = 0.93 + (entry.intersectionRatio * 0.07);
            const elevacion = (1 - entry.intersectionRatio) * -20;

            entry.target.style.transform = `scale(${escala}) translateY(${elevacion}px)`;
        } else {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'scale(1) translateY(0px)';
        }
    });
}, opcionesNegocios);

document.querySelectorAll('.oscuro-scroll').forEach(seccion => {
    observadorNegocios.observe(seccion);
});
