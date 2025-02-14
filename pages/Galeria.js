import Tarjetas from '../components/Tarjetas.js';

export default function Galeria() {
    return `
            <input id="filtro" type="text" placeholder="Illian">
            
            <div class="contenedor-cartas">
            ${Tarjetas()}
            </div>
    `;
}