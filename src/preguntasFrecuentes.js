let fs = require('fs');

let preguntasFrecuentes = {
titulo : "Preguntas Frecuentes.",
db : './data/faqs.json',
leerJSON : function(){
    let preguntasJSON = fs.readFileSync(this.db, 'utf-8');
    let preguntas = JSON.parse(preguntasJSON);
    return preguntas;
},
totalPreguntas : function(){
    return this.leerJSON().total_faqs;
},
listarPreguntas : function(){
    let preguntas = this.leerJSON().faqs;
    return preguntas;
}
}
module.exports = preguntasFrecuentes;