//adds event listener to input when user hits enter
document.getElementById('form').addEventListener('submit', getAPI);

//Convert first letter to uppercase
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//convert search string to lowercase
function lowerCase(string) {
    return string.toLowerCase();
}

function getAPI(event) {
    event.preventDefault();
    //get value from input "search"
    const search = document.getElementById('search').value;
    //add "search" variable to lowerCase function
    const name = lowerCase(search);

    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('wrapper').innerHTML = `
            <div>
                <img class="image" src="${data.sprites.front_default}">
                <p class="id">#${data.id}</p>
                <h2 class="name">${capitalize(data.name)}</h2>
                <p class="type">${capitalize(data.types[0].type.name)}</p>
            </div>
            `
        })
        .catch(error => console.log(error));
}