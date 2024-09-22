let segundos = 0;

const intervalo = setInterval(() => {
    segundos++;
    console.log(`Ha pasado ${segundos} segundos`);

    if (segundos === 5) {
        clearInterval(intervalo);
        console.log('El intervalo ha sido detenido.');
    }
}, 1000);
