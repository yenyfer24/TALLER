const fs = require('fs');

fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Error al leer el archivo:", err);
        return;
    }

    const mayuscula = data.toUpperCase();

    fs.writeFile('output.txt', mayuscula, 'utf8', (err) => {
        if (err) {
            console.error("Error al escribir en el archivo:", err);
        } else {
            console.log("El archivo output.txt ha sido creado con éxito.");
        }
    });
});
