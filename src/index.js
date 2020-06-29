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
    masVotadas:function(res){
        res.write(masVotadas.titulo + '\n\n');
        res.write("Total de peliculas: " + masVotadas.cantidadPelis());
        res.write('\n\n');
        res.write('Rating promedio. ' + masVotadas.ratingPromedio().toFixed(1) + '\n\n');
        res.write('Listados de peliculas. \n\n');
        let mejoresPelis = masVotadas.filtrarPelis();
        for(pelicula of mejoresPelis){
            res.write("Título " + pelicula.title + '\n');
            res.write("Rating " + pelicula.vote_average + '\n');
            res.write("Reseña " + pelicula.overview + "\n\n");
        }
        res.end();
    },
    sucursales : function(res){
        res.write(sucursales.titulo + '\n');
        res.write(sucursales.totalSalas() + '\n\n');
        res.write('Listado de salas.' + '\n\n');
        let mostrarSucursales = sucursales.listarSalas();
        for(propiedadSala of mostrarSucursales){
            res.write('Nombre: ' + propiedadSala.name + '\n');
            res.write('Direccion: ' + propiedadSala.address + '\n');
            res.write('Descripción: ' + propiedadSala.description + '\n\n');    
        }
        res.end();
    },
    contacto:function(res){
        res.write(contacto.titulo + '\n');
        res.write(contacto.contenido);
        res.end();
    },
    preguntasFrecuentes:function(){

    }
}

module.exports = index;