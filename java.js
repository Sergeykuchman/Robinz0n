"use strict";

let numberOfFilms=prompt("Сколько фильмов просмотрели","");
let personaMovieDB={
    count: 0,
    movies:{},
    actors:'',
    genres:[],
    privat:false
};

personaMovieDB["count"]=numberOfFilms;

let movie=prompt("Последний фильм какой Вы посмотрели: ","");
let raiting=prompt("Оцените: ","");

 personaMovieDB.movies[movie]=raiting;

console.log(personaMovieDB);
