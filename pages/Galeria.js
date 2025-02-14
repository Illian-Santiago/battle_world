import Tarjetas from '../js/Tarjetas.js';

export default function Galeria() {
    return `
            <h1>Galería</h1>
            <input type="text" id="filtro" placeholder="Filtrar tarjetas...">
            <div class="contenedor-cartas">
            ${Tarjetas()}
            </div>
    `;
}