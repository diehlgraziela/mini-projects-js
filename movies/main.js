let APIKey = 'api_key=2a9aaec413a0b1c711b1aa6b96d008ad';
let APIUrl = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&' + APIKey;
let APISearch = 'https://api.themoviedb.org/3/search/movie?api_key=2a9aaec413a0b1c711b1aa6b96d008ad&query=';
let IMGPath = 'https://image.tmdb.org/t/p/w500/';

let search = document.getElementById("search");
let form = document.getElementById("form");
let wrapper = document.getElementById("wrapper");

//Get popular movies
getMovies(APIUrl);

async function getMovies(url) {
    let res = await fetch(url);
    let data = await res.json();

    console.log(data);
    displayMovies(data.results);
}

function displayMovies(data) {
    wrapper.innerHTML = '';

    data.forEach(movie => {
        let {
            poster_path,
            title,
            vote_average,
            overview
        } = movie;


        let movieEl = document.createElement('div');
        movieEl.classList.add('movie');

        movieEl.innerHTML = `
            <img src="${IMGPath + poster_path}" alt="${title}">
            <h1>${title}</h1>
            <p>${vote_average}</p>
            <p>${overview}</p>
        `;

        wrapper.appendChild(movieEl);
    })
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let searchTerm = search.value;

    if (searchTerm) {
        getMovies(APISearch + searchTerm);

        search.value = '';
    }
})