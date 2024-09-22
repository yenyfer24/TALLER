const args = process.argv.slice(2);

if (args.length !== 2) {
    console.log("Debes ingresar dos numeros, vuelve a intentarlo.");
    process.exit(1);
}

const num1 = parseFloat(args[0]);
const num2 = parseFloat(args[1]);

if (Number.isNaN(num1) || Number.isNaN(num2)) {
    console.log("Los datos ingresados no son numeros.");
    process.exit(1);
}

const suma = num1 + num2;
const resta = num1 - num2;
const multiplicacion = num1 * num2;

// Verificar si la división es válida (evitar división por cero)
if (num2 === 0) {
    console.log("No se puede dividir por cero.");
} else {
    const division = num1 / num2;
    console.log(`División: ${num1} / ${num2} = ${division}`);
}

// Imprimir los resultados de las operaciones
console.log(`Suma: ${suma}`);
console.log(`Resta: ${resta}`);
console.log(`Multiplicación: ${multiplicacion}`);
