export default async function Tarjetas(filtro = '') {
    const response = await fetch('../personajes.json');
    const personajes = await response.json();

    return personajes
        .filter(personaje => personaje.nombre.toLowerCase().includes(filtro.toLowerCase()))
        .map(personaje => `
                <div class="carta" style="background: url(${personaje.imagen}) center / cover;">
                    <h3>${personaje.nombre}</h3>
                    <p>${personaje.descripcion}</p>
                </div>
            `);
}

(async () => {
    const tarjetas = await Tarjetas();
    document.querySelector('.contenedor-cartas').innerHTML = tarjetas.join('');

    document.querySelector('#filtro').addEventListener('input', async (e) => {
        const filtro = e.target.value;
        const tarjetasFiltradas = await Tarjetas(filtro);
        document.querySelector('.contenedor-cartas').innerHTML = tarjetasFiltradas.join('');
    });
})();