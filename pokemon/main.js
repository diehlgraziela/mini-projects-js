let APIUrl = 'https://pokeapi.co/api/v2/';
let form = document.getElementById('form');
let search = document.getElementById('search');
let wrapper = document.getElementById('wrapper');

let pokemon;
let searchPokemon = search.value.toLowerCase();


function getAPI(url, name) {
    fetch(url + name)
        .then(response => response.json())
        .then(data => {
            pokemon = data;
        })
        .catch(error => console.log(error))
}

function displayPokemon() {
    pokemonInfo = `
    <div class="pokemonInfo">
        <img src="http://pm1.narvii.com/6434/7a2cb5fc86df1db37db549422128c66186059808_00.jpg" alt=""
        style="width: 200px">
        <h2>${pokemon.name}</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit pariatur praesentium, architecto
        suscipit illum quas velit quidem molestias, dolorum aut aspernatur aperiam beatae cumque quaerat? Optio,
        sint adipisci! Nihil, mollitia.</p>
    </div>
    `;

    return pokemonInfo;
}

function startApp() {
    getAPI(APIUrl, searchPokemon);
}

form.addEventListener('submit', e => {
    e.preventDefault();
    startApp(searchPokemon);
    wrapper.innerHTML = displayPokemon();
})