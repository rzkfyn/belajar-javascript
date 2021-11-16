const apiKey = '4c6cd34a&s';

const createCard = (posterUrl, title, year, imdbId) =>{
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `<img src="${posterUrl} class="card-img-top"">`;
    card.setAttribute('data-imdbid', imdbId)
    card.append(createCardBody(title, year));

    return card;
}
const createCardBody = (title, year) => {
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    cardBody.innerHTML = `<h5 class="card-title">${title}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${year}</h6>`;
    cardBody.append(createButton());

    return cardBody;
}
const createColumn = (posterUrl, title, year, imdbId) => {
    const column = document.createElement('div')
    column.classList.add('col-md-4', 'my-5', 'column');
    column.append(createCard(posterUrl, title, year, imdbId));

    return column;
}
const createButton = () => {
    const button = document.createElement('button');
    button.classList.add('btn', 'btn-primary', 'details-btn');
    button.setAttribute('data-target', "#movieDataModal");
    button.setAttribute('data-toggle', "modal");
    button.innerText = 'Details';

    return button;
}

document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    for(const column of document.querySelectorAll('.column')){
        column.remove();
    }
    const getMoviesData = (url, success, error) => {
        const xhr = new XMLHttpRequest();
        xhr.addEventListener('readystatechange', function(){
            if(xhr.readyState !== 4) return;
            if(xhr.status === 200) return success(xhr.response);
            return error(xhr.responseText);
        });
        xhr.open('get', url);
        xhr.send();
    }
    $('details-btn').on('click', function(){
        alert('Hello');
    })
    // $.ajax({
    //     url: `http://www.omdbapi.com/?apikey=${apiKey}=${document.querySelector('input').value}`,
    //     success: results => {
    //         const movies = results.Search;
    //         for (const movie of movies) {
    //             $('.results')
    //                 .append(createColumn(movie.Poster, movie.Title, movie.Year));
    //         }
    //     },
    //     error: err => {
    //         console.log(err.responseText);
    //     }
    // });
    getMoviesData(`http://www.omdbapi.com/?apikey=${apiKey}&s=${document.querySelector('input').value}`, results => {
        const movies = JSON.parse(results).Search
        for (const movie of movies) {
            $('.results')
            .append(createColumn(movie.Poster, movie.Title, movie.Year, movie.imdbID));
        }
    }, results => console.error(results.responseText));
});
