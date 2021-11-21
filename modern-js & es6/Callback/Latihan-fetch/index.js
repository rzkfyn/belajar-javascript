'use strict';

const apiKey = '4c6cd34a&s';

document.querySelector('.search-btn').addEventListener('click', async function(){
    const movies = await getMovies(document.querySelector('.keyword').value);
    updateUi(movies);
});

document.addEventListener('click', async function (e) {
    if(!e.target.classList.contains('modal-detail-btn')) return;
    const movieDetail = await getMovieDetail(e.target.dataset.imdbid);
    updateDetailUi(movieDetail);
})

function getMovies(keyWord) {
    return fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${keyWord}`)
        .then(res => res.json())
        .then(res => res.Search);
}

function getMovieDetail(movieId){
    return fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${movieId}`)
        .then(res => res.json())
        .then(res => res);
}

function updateUi(movies){
    let cards = '';
    movies.forEach(function (movie) {
            cards += showCards(movie);
        });
    document.querySelector('.movie-container').innerHTML = cards;
}

function updateDetailUi(detail){
    const movieDetail = showMovieDetail(detail);
    document.querySelector('.modal-body').innerHTML = movieDetail;
}

function showCards(movie){
    return `<div class="col-md-4 my-3">
                <div class="card">
                    <img src="${movie.Poster}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${movie.Title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${movie.Year}</h6>
                        <a href="#" class="btn btn-primary modal-detail-btn" data-toggle="modal" data-target="#movieDetailModal" data-imdbid="${movie.imdbID}">Show Details</a>
                    </div>
                </div>
            </div>`;
}

function showMovieDetail(results){
    return `<div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid" src="${results.Poster}">
                    </div>
                    <div class="col-md">
                        <ul class="list-group">
                            <li class="list-group-item"><h4>${results.Title} (${results.Year})</h4></li>
                            <li class="list-group-item"><strong>Director : </strong>${results.Director}</li>
                            <li class="list-group-item"><strong>Actors : </strong>${results.Actors}</li>
                            <li class="list-group-item"><strong>Writer : </strong>${results.Writer}</li>
                            <li class="list-group-item"><strong>Plot : </strong><br>${results.Plot}</li>
                        </ul>
                    </div>
                </div>
            </div>`;
}