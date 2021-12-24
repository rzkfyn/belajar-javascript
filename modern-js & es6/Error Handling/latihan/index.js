'use strict';

const APIKEY = '4c6cd34a&s';

document.querySelector('.search-btn').addEventListener('click', async () => {
    try{
        const movies = await getMoviesData(`${document.querySelector('.keyword').value}`);
        updateMoviesContainer(makeElement(movies));
    }catch(e){
        updateMoviesContainer(`<h1>${e}</h1>`);
    }
});

document.addEventListener('click', async event => {
    if(!event.target.dataset.imdbid) return;
    try{
        const movie = await getMovieDataById(event.target.dataset.imdbid);
        updateModal(makeModal(movie));
    }catch(e){
        updateModal(e);
    }
})

function getMoviesData(query){
    return fetch(`http://www.omdbapi.com/?apikey=${APIKEY}&s=${query}`)
            .then(res => {
                if(!res.ok) throw new Error(res.statusText);
                return res.json();
            })
            .then(res => {
                if(res.Response === 'False') throw new Error(res.Error);
                return res.Search;
            });
}

function getMovieDataById(movieId){
    return fetch(`http://www.omdbapi.com/?apikey=${APIKEY}&i=${movieId}`)
                .then(res => {
                    if(!res.ok) throw new Error(res.statusText);
                    return res.json();
                })
                .then(res => {
                    if(res.Response === 'False') throw new Error(res.Error);
                    return res;
                });
}

function makeCard(movie){
    let movieYear;
    movie.Year.endsWith('–') ? movieYear = movie.Year.slice(0, 4) : movieYear = movie.Year;
    return `<div class="col-md-3 my-3">
                <div class="card">
                    <img src="${movie.Poster}" height="350px">
                    <div class="card-body">
                    <h5 class="card-title">${movie.Title} (${movieYear})</h5>
                    <a href="#" class="btn btn-primary" data-imdbID="${movie.imdbID}" data-toggle="modal" data-target="#movieDetailModal">Detail</a>
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
    return document.querySelector('.movies-container').innerHTML = element;
}

function makeModal(movie){
    let movieYear;
    movie.Year.endsWith('–') ? movieYear = movie.Year.slice(0, 4) : movieYear = movie.Year;
    return `<div class="row">
                <div class="col">
                    <ul class="list-group">
                        <li class="list-group-item text-center"><img class="img-fluid" src="${movie.Poster}"></li>
                        <li class="list-group-item"><strong>Title : </strong>${movie.Title}</li>
                        <li class="list-group-item"><strong>Year : </strong>${movieYear}</li>
                        <li class="list-group-item"><strong>Genre : </strong>${movie.Genre}</li>
                        <li class="list-group-item"><strong>Director : </strong>${movie.Director}</li>
                        <li class="list-group-item"><strong>Plot : </strong>${movie.Plot}</li>
                    </ul>
                </div>
            </div>`;
}

function updateModal(content){
    return document.querySelector('.modal-body').innerHTML = content;
}