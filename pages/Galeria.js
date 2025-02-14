import Tarjetas from '../js/Tarjetas.js';

export default function Galeria() {
    return `
            <input id="filtro" type="text" placeholder="Illian">
            
            <div class="contenedor-cartas">
            ${Tarjetas()}
            </div>
    `;
}