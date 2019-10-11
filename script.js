let sets;
let setValue;
let cards;


window.fetch('https://api.magicthegathering.io/v1/sets')
    .then(function recibirRespuesta(respuesta) {
        return respuesta.json();
    })
    .then(function mostrarDatos(datos) {
        sets = datos.sets;
        let listaSet = document.getElementById('desplegableSets');
        let lista = '';
        for (let i = 0; i < sets.length; i++) {
            lista += `<option value="${sets[i].code}">
            ${sets[i].name}
            </option>`;
        }
        listaSet.innerHTML = lista;

    });

function seleccionSet() {
    setValue = document.getElementById('desplegableSets').value;
    let cartasDevolucion = 'https://api.magicthegathering.io/v1/cards?set=' + setValue
    window.fetch(cartasDevolucion)
        .then(function recibirRespuesta(respuesta) {
            return respuesta.json();
        })
        .then(function mostrarDatos(datos) {
            cards = datos.cards;
            let cargarCartas = '';
            let dibujarCartas = document.getElementById('cartas');
            for (let i = 0; i < cards.length; i++) {
                cargarCartas += ` 
                    <div class="imagen">
                    <h1> ${cards[i].name}</h1>
                    
                    <image class = "rotacion" src="${cards[i].imageUrl}" alt="${cards[i].name}"/>
                    </div>`;
            }
            dibujarCartas.innerHTML = cargarCartas;
        });
}
