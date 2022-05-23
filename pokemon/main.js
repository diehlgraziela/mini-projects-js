let APIUrl = 'https://pokeapi.co/api/v2/pokemon/';
let form = document.getElementById('form');
let search = document.getElementById('search');
let wrapper = document.getElementById('wrapper');

let pokemon;

function getAPI() {
    fetch(APIUrl)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
}

getAPI();