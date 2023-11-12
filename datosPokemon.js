const consultarPokemon = (id, numero) => {
    const apiURL = `https://pokeapi.co/api/v2/pokemon/${id}`;

    fetch(apiURL)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Error al consultar la API: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            pintarPokemon(data,numero)
        })
        .catch((error) => {
            console.error(`Error: ${error.message}`);
        });
};

// Generar los números aleatorios dentro de un rango de 1 a 150
const btnSeleccionar = () => {
    let primerPokemon = Math.floor(Math.random() * 150) + 1;
    let segundoPokemon = Math.floor(Math.random() * 150) + 1;

    consultarPokemon(primerPokemon, 1);
    consultarPokemon(segundoPokemon, 2);
};

btnSeleccionar();



// lista de pokemones por el ID
const listar = document.getElementById("listarpokemon")

// Funcion para poder presentar los pokemones 
const pintarPokemon = (data,id) =>{

    let item = listar.querySelector(`#pok-${id}`)
    item.getElementsByTagName("img")[0].setAttribute("src",data.sprites.front_default)
    item.getElementsByTagName("p")[0].innerHTML=data.name

}