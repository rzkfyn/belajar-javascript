'use strict';

const apiKey = '4c6cd34a&s';



// document.querySelector('#search-btn').addEventListener('click', function(){
//     getMovieData(`http://www.omdbapi.com/?apikey=${apiKey}&s=${document.querySelector('#keyword').value}`, 
//     results => {
//         const movies = JSON.parse(results).Search;
//         let movieDisplayEL = '';
//         for(let movie of movies){
//             movieDisplayEL += makeCard(movie);
//         }
//         console.log(movieDisplayEL);
//         document.querySelector('.movie-container').innerHTML = movieDisplayEL;
//     },
//     error => console.error(error));
// });

function geteData(url, success, error){
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', function(){
        if(xhr.readyState !== 4) return;
        if(xhr.status === 200) return success(xhr.response);
        return error(xhr.responseText);
    });
    xhr.open('get', url);
    xhr.send();
}









fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=Eromanga Sensei`)
    .then(async res => {
        try{
            const movies = await res.json();
            updateUi(movies.Search);
        }catch(error){
            console.log(error);
        }
    })
    .catch(error => console.error(error));


$.ajax({
    url: `http://www.omdbapi.com/?apikey=${apiKey}&s=Eromanga Sensei`,
    success: results => {
        updateUi(results.Search);
    },
    error: error => {
        console.error(error.responseText);
    }
});


function makeCard(movie) {
    let movieYear = movie.Year;
    if (movie.Year.endsWith('–'))
        movieYear = movie.Year.slice(0, 4);
    return `<div class="col-3 my-3">
                <div class="card align-self-stretch">
                    <img src="${movie.Poster}" class="card-img-top img-fluid">
                    <div class="card-body">
                        <h5 class="card-title">${movie.Title}</h5>
                        <h6 class="text-secondary">${movieYear}</h6>
                        <a href="#" class="btn btn-primary">Details</a>
                    </div>
                </div>
            </div>`;
}
function updateUi(movies) {
    let movieDisplayEL = '';
    for (let movie of movies) {
        movieDisplayEL += makeCard(movie);
    }
    document.querySelector('.movie-container').innerHTML = movieDisplayEL;
}
// const displayDetail = movie => {

// }