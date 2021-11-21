'use strict';

const apiKey = '4c6cd34a&s';
$('.search-btn').on('click', () => {
    $.ajax({
        url : `http://www.omdbapi.com/?apikey=${apiKey}&s=${$('.keyword').val()}`,
        success : results => {
            const movies = results.Search;
            let cards = '';
            movies.forEach(movie => {
                cards += showCards(movie);
            });
            $('.movie-container').html(cards);
    
            // Ketika tombol di klik
            $('.modal-detail-btn').on('click', function(){
                $.ajax({
                    url : `http://www.omdbapi.com/?apikey=${apiKey}&i=${$(this).data('imdbid')}`,
                    success : results => {
                        const movieDetail = showMovieDetail(results);
                        $('.modal-body').html(movieDetail);
                    },
                    error : e => console.log(e)
                })
            });
        },
        error : e => console.log(e.resposnseText)
    });
})

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