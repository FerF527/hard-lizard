const fs = require('fs');

let masVotadas = {
    db : './data/movies.json',
    titulo : 'Más Votadas.',
    leerJSON : function(){
        let moviesJSON = fs.readFileSync(this.db, 'utf-8');
        let movies = JSON.parse(moviesJSON);
        return movies;
    },
    filtrarPelis : function(){
        let movies = this.leerJSON();
        movies = movies.movies.filter(function(movie){
            return movie.vote_average >=7;
        });
        return movies;
    },
    cantidadPelis : function(){
        return this.filtrarPelis().length
    },
    ratingPromedio : function(){
       let masVotadas = this.filtrarPelis();
       let rating = [];
       masVotadas.forEach(function(pelicula){
           return rating.push(pelicula.vote_average);
       });
       let sumaRating = rating.reduce(function(acum, num){
           return acum + num;
       });
       function promedio(a, b){
           return a / b.length;
       };
       let ratingMasvotadas = promedio(sumaRating, masVotadas);
       return ratingMasvotadas;
       
    }
}
module.exports = masVotadas;