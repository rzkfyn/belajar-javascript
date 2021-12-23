'use strict';

const APIKEY = '4c6cd34a&s';

document.querySelector('.search-btn').addEventListener('click', async () => {
    const movies = await getMoviesData(`${document.querySelector('.keyword').value}`);
    updateMoviesContainer(makeElement(movies));
});

function getMoviesData(query){
    return fetch(`http://www.omdbapi.com/?apikey=${APIKEY}&s=${query}`)
            .then(res => res.json())
            .then(res => res.Search);
}

async function getMovieDataById(movieId){
    const movie = await fetch(`http://www.omdbapi.com/?apikey=${APIKEY}&i=${movieId}`);
    return await movie.json();
}

function makeCard(movie){
    let movieYear;
    movie.Year.endsWith('–') ? movieYear = movie.Year.slice(0, 4) : movieYear = movie.Year;
    return `<div class="col-md-3 my-3">
                <div class="card">
                    <img src="${movie.Poster}" height="350px">
                    <div class="card-body">
                    <h5 class="card-title">${movie.Title} (${movieYear})</h5>
                    <a href="#" class="btn btn-primary" data-imdbID="${movie.imdbID}">Detail</a>
                    </div>
                </div>
            </div>`
}

function makeElement(movies){
    let res = '';
    for(const movie of movies){
        res += makeCard(movie);
    }
    return res;
}

function updateMoviesContainer(element){
    document.querySelector('.movies-container').innerHTML = element;
}