document.getElementById('form').addEventListener('submit', getAPI);
//let wrapper = document.getElementById('wrapper');

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function lowerCase(string) {
    return string.toLowerCase();
}

function getAPI(event) {
    event.preventDefault();
    const search = document.getElementById('search').value;
    const name = lowerCase(search);

    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(response => response.json())
        .then(data => {
            let id = data.id;
            let characteristic = `https://pokeapi.co/api/v2/characteristic/${id}`;
            console.log(characteristic)

            document.getElementById('wrapper').innerHTML = `
                <div>
                    <img src="${data.sprites.front_default}">
                    <h2>${capitalize(data.name)}</h2>
                    <p>Type: ${data.types[0].type.name}</p>
                    <p>Height: ${data.height / 10} cm</p>
                    <p>Weight: ${data.weight / 10} kg</p>
                </div>
                `
        })
        .catch(error => console.log(error));

}