let APIKey = 'api_key=2a9aaec413a0b1c711b1aa6b96d008ad';
let APIUrl = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&' + APIKey + '&language=pt-BR';
let APISearch = 'https://api.themoviedb.org/3/search/movie?api_key=2a9aaec413a0b1c711b1aa6b96d008ad&language=pt-BR&query=';
let IMGPath = 'https://image.tmdb.org/t/p/w500/';

let search = document.getElementById("search");
let form = document.getElementById("form");
let wrapper = document.getElementById("wrapper");
let vote = document.querySelector("span");

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
            <div class="title">
                <h1>${title}</h1>
                <span class="vote ${voteColor(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <p>${overview}</p>
            </div>
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

function voteColor(vote) {
    if (vote >= 7.8) {
        return 'green';
    } else if (vote >= 5) {
        return 'yellow';
    } else {
        return 'red';
    }
}

//Sticky header
window.onscroll = function () {
    header_fixed();
}

let header = document.getElementById("header");
let sticky = header.offsetTop;

function header_fixed() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        console.log("add")
    } else {
        header.classList.remove("sticky");
        console.log("remove")
    }
}