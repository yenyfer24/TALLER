const fs = require('fs').promises;

function leerArchivo(ruta) {
    return fs.readFile(ruta, 'utf8');
}

leerArchivo('input.txt')
    .then(contenido => {
        console.log(`Datos del archivo: ${contenido}`);
    })
    .catch(error => {
        console.error('Error al leer el archivo:', error.message);
    });
