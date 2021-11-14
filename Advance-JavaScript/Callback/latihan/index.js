const createCard = (posterUrl, title, year) =>{
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `<img src="${posterUrl} class="card-img-top"">`;
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

const createColumn = (posterUrl, title, year) => {
    const column = document.createElement('div')
    column.classList.add('col-md-4', 'my-5');
    column.append(createCard(posterUrl, title, year));

    return column
}
const createButton = () => {
    const button = document.createElement('a');
    button.setAttribute('href', '#');
    button.classList.add('btn', 'btn-primary');
    button.innerText = 'Details';

    return button;
}

$.ajax({
    url: 'http://www.omdbapi.com/?apikey=4c6cd34a&s=Dilan',
    success : results => {
        const movies = results.Search;
        for(const movie of movies){
            document.querySelector('.results')
                .append(createColumn(movie.Poster, movie.Title, movie.Year));
        }
    },
    error : err => {
        console.log(err.responseText);
    }
})