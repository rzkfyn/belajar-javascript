'use strict';

const apiKey = '4c6cd34a&s';

/*========== Fetch ========== */ 

// document.querySelector('#search-btn').addEventListener('click', async function(){
//     const movies =  await getMoviesData(document.querySelector('#keyword').value);
//     updateUi(movies);
// });

// function getMoviesData(query){
//     return fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${query}`)
//     .then(res => res.json().then(res => {
//         console.log(res.Search);
//         return res.Search;
//     }));
// }

// document.addEventListener('click', async target => {
//     if(!target.target.dataset.imdb) return;
//     const movie = await getMovieDetail(target.target.dataset.imdb);
//     updateModal(makeModal(movie));
// });

// function makeCard(movie) {
//     let movieYear = movie.Year;
//     if (movie.Year.endsWith('–')) movieYear = movie.Year.slice(0, 4);
//     return `<div class="col-3 my-3">
//                 <div class="card align-self-stretch">
//                     <img src="${movie.Poster}" class="card-img-top img-fluid">
//                     <div class="card-body">
//                         <h5 class="card-title">${movie.Title}</h5>
//                         <h6 class="text-secondary">${movieYear}</h6>
//                         <a class="btn btn-primary" data-toggle="modal" data-target="#modalDetails"  data-imdb="${movie.imdbID}">Details</a>
//                     </div>
//                 </div>
//             </div>`;
// }
            
// function makeModal(movie){
//     let movieYear = movie.Year;
//     if (movie.Year.endsWith('–')) movieYear = movie.Year.slice(0, 4);

//     return `<div class="col-md-3">
//                 <img class="image-fluid" src="${movie.Poster}" >
//             </div>
//             <div class="col-md-6">
//                     <ul class="list-group">
//                         <li class="list-group-item">${movie.Title} (${movieYear})</li>
//                         <li class="list-group-item"></li>
//                         <li class="list-group-item">A third item</li>
//                         <li class="list-group-item">A fourth item</li>
//                         <li class="list-group-item">And a fifth one</li>
//                     </ul>
//             </div>`;
// }

// function updateUi(movies) {
//     let movieDisplayEL = '';
//     for (let movie of movies) {
//         movieDisplayEL += makeCard(movie);
//     }
//     document.querySelector('.movie-container').innerHTML = movieDisplayEL;
// }


// function getMovieDetail(id){
//     return fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${id}`)
//         .then(res => res.json()
//         .then(res => res));
// }

// function updateModal(element){   
//     document.querySelector('.modal-body').innerHTML = element;
// }


/*========== XMLHttp Request ========== */ 

function getMoviesData(url, method, success, error){
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', function(){
        if(xhr.readyState !== 4) return;
        if(xhr.status !== 200) return error(xhr.responseText);
        return success(xhr.response);
    });

    xhr.open(method, url);
    xhr.send();
}

getMoviesData(`http://www.omdbapi.com/?apikey=${apiKey}&s=$Eromanga Sensei`, 'get', res => console.log(JSON.parse(res)), err => consolelog(err));

// function makeCard(movie){
    

// }