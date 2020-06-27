const contacto = require('./contacto');
const enCartelera = require('./enCartelera');
const homePage = require('./homePage');
const masVotadas = require('./masVotadas');
const preguntasFrecuentes = require('./preguntasFrecuentes');
const sucursales = require('./sucursales');

let index={
    homePage:function(res){
        //titulo
        res.write(homePage.titulo + '\n\n')
        
        //cantidad de peliculas

        res.write("Total de películas en cartelera: " + homePage.cantidad() + '\n\n')
        
        //titulos de peliculas ordenados
        
        let pelis = homePage.listarPelis();

        for(peli of pelis){
            res.write(peli)
            res.write('\n')
        }
        res.write('\n');
        res.write(homePage.secciones)
        res.write('\n');
        /*let piePagina = homePage.piePagina;
        for(secciones in homePage.piePagina){
            res.write(homePage.piePagina[secciones] + '\n')
        }*/
        for(secciones in homePage.piePagina){
            res.write(homePage.piePagina[secciones] + '\n')
        }
        res.end()
    },
    enCartelera:function(res){
        res.write(enCartelera.titulo + '\n\n');
        res.write('Total de peliculas: ' + enCartelera.cantidad());
        res.write('\n\n');
        let peliculas = enCartelera.listarPelis();
        for(pelicula of peliculas){
            res.write(pelicula.title + '\n');
            res.write(pelicula.overview + '\n\n');
        }
        res.end();

    },
    masVotadas:function(){

    },
    sucursales:function(){

    },
    contacto:function(){

    },
    preguntasFrecuentes:function(){

    }
}

module.exports = index;