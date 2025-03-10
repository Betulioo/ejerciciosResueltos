// Usa un bucle para crear 3 arrays de peliculas filtrados por categorias. Pelicula pequeña, menos de 100 minutos, pelicula mediana, igual o mas de 100 minutos y menos de 200 y pelicula grande, mas de 200 minutos. Imprime cada array en por consola.
// ```js
const movies = [{name: "Your Name", durationInMinutes: 130},{name: "Pesadilla antes de navidad", durationInMinutes: 225}, {name: "Origen", durationInMinutes: 165}, {name: "El señor de los anillos", durationInMinutes: 967}, {name: "Solo en casa", durationInMinutes: 214}, {name: "El jardin de las palabras", durationInMinutes: 40}];
// ```

let shortMovie = [];
let mediunMovie = [];
let largeMovie = [];


movies.forEach(movie => {
    if (movie.durationInMinutes < 100) {
        shortMovie.push(movie)
    } else if (movie.durationInMinutes >= 100 && movie.durationInMinutes <200) {
        mediunMovie.push(movie);
    } else if (movie.durationInMinutes > 200) {
        largeMovie.push(movie)
    }
});

console.log('las peliculas cortas son ' + JSON.stringify(shortMovie) );
console.log('las peliculas largas son ' + JSON.stringify(mediunMovie));
console.log('las peliculas muy largas son ' + JSON.stringify(largeMovie));