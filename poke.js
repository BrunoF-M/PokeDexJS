const attTela = (pokemon) => {
    const img = document.getElementById("pokeimg");

    const nomePokemon = document.getElementById("pokenm");

    img.src = pokemon.sprites.other["official-artwork"].front_default;

    nomePokemon.innerHTML = pokemon.name;
};

const urlPokemonAleatorio = () => {
    const numeropokeale = Math.round(Math.random() * 150) +1;

    const urlPk = `https://pokeapi.co/api/v2/pokemon/${numeropokeale}`; 

    return urlPk;
};

const Start = async () => {
    const url = urlPokemonAleatorio();

    const response = await fetch(url);

    const result = await response.json();

    attTela(result);
};

document.addEventListener('DOMContentLoaded', Start);