const fs = require('fs');

let sucursales = {
    titulo : "Nuestras Salas.",
    db : './data/theaters.json',
    totalSalas : function(){
        let total = sucursales.leerJSON().total_theaters;
        return 'Total de salas: ' + total;
    },
    leerJSON : function(){
        let teatrosJSON = fs.readFileSync(this.db, 'utf-8');
        let teatros = JSON.parse(teatrosJSON);
        return teatros
    },
    listarSalas : function(){
        let listaTeatros = this.leerJSON().theaters;
        return listaTeatros;
        }    
};
module.exports = sucursales;