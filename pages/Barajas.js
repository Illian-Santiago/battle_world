import Tarjetas from '../js/Tarjetas.js';

export default function Barajas() {
    return `
        <h1>Barajas</h1>

        <div class="contenedor-cartas">
            ${Tarjetas()}
        </div>
    `;
}