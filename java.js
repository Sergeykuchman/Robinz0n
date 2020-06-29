let personaMovieDB = {
    count: +prompt("Сколько фильмов просмотрели", ""),
    movies: {},
    actors: '',
    genres: [],
    privat: false
};


for (let i = 0; i < 2; i++) {

    let movie = prompt("Последний фильм какой Вы посмотрели: ", "");
    console.log(movie);
    console.log(movie.length);

    let raiting = prompt("Оцените: ", "");
    if (movie !== '' && raiting !== '') {
        if (movie.length >= 10) {
            personaMovieDB.movies[movie] = raiting;
            // numberOfFilms.movies["movie"] = movie;
            // numberOfFilms.movies["raiting"] = raiting;
        } else {
            alert("Очень короткое название");

        }
    } else {
        alert("Поле не должно быть пустым");
    }
}


if (personaMovieDB.count < 10) {
    alert("Очень мало фильмов просмотрено")
}

console.log(personaMovieDB);