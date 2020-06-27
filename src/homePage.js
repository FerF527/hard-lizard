const fs = require('fs');

let homePage = {
db:'./data/movies.json',
titulo: "Bienvenidos a DH Movies el mejor sitio para encontrar las mejores películas, incluso mucho mejor que Netflix, Cuevana y PopCorn.",
leeJSON: function(){
    let moviesJSON = fs.readFileSync(this.db, 'utf-8');
    let movies = JSON.parse(moviesJSON);
    return movies;
},
cantidad: function(){
    return this.leeJSON().total_movies;
},
listarPelis:function(){
    let movies = this.leeJSON();
    let titleMovies = [];
    movies.movies.forEach(function(movie){
        titleMovies.push(movie.title);
    });
    titleMovies.sort();
    return titleMovies
},
secciones: "Recordá que podés visitar las secciones:",
piePagina:{
    enCartelera : 'i.    En cartelera',
    masVotadas : 'ii.   Más Votadas',
    sucursales : 'iii.  Sucursales',
    contacto : 'iv.   Contacto',
    preguntasFrecuentes: 'v.    Preguntas Frecuentes'
}
}

module.exports = homePage;