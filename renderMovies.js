
function renderMovies(movies) {
    let divs = movies.map(function(movie){
        return `
        <div class="col-12 col-md-6 movie">
            <div class="movie-inner">
                <div class="movie-poster"><img src="${movie.poster}"></div>
                <div class="movie-information">
                    <h3>${movie.title}</h3>
                    <h6>${movie.year}</h6>
                    <div class="info">IMDB: ${movie.imdbRating}/10</div>
                    <div class="info">Rotten Tomates: ${movie.rottenTomatoesRating}</div>
                </div>
            </div>
        </div>
        `
    })
    return `
        <div class="text-center mt-5">
            <code>${JSON.stringify(movies)}</code>
            <div id="movies-list" class="container-fluid">
                <div class="row">
                    ${divs.join('')}
                </div>
            </div>
        </div>
    `
}

function movies() {
    var content = document.getElementById('content');

    var moviesAbstraction = [
        {
            title: "The Dark Knight",
            year: 2008,
            imdbID: "tt0468569",
            poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
            imdbRating: 9,
            rottenTomatoesRating: 0.94
        },
        {
            title: "The Dark Knight Rises",
            year: 2012,
            imdbID: "tt1345836",
            poster: "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_SX300.jpg",
            imdbRating: 8,
            rottenTomatoesRating: 0.82
        },
        {
            title: "The Incredibles",
            year: 2004,
            imdbID: "tt0317705",
            poster: "https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_SX300.jpg",
            imdbRating: 9,
            rottenTomatoesRating: 0.91
        }
    ]

    content.innerHTML = renderMovies(moviesAbstraction);

}