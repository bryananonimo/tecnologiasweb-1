const formularioContacto = document.querySelector('form');

if (formularioContacto) {
    formularioContacto.addEventListener('submit', function(event) {
        event.preventDefault();

        const pantallaGracias = document.createElement('div');
        pantallaGracias.className = 'pantalla-agradecimiento-pantalla';

        pantallaGracias.innerHTML = `
            <div class="caja-gracias-animada">
                <div class="icono-check">✓</div>
                <h2>¡Mensaje Enviado!</h2>
                <p>Gracias por contactarnos. Te responderemos a la brevedad posible.</p>
                <button type="button" class="boton-cerrar-pantalla" id="btnCerrarGracias">Entendido</button>
            </div>
        `;

        document.body.appendChild(pantallaGracias);
        formularioContacto.reset();

        const botonCerrar = pantallaGracias.querySelector('#btnCerrarGracias');
        if (botonCerrar) {
            botonCerrar.addEventListener('click', function() {
                pantallaGracias.remove();
            });
        }
    });
}
