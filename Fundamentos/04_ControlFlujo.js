/**
 *  Control de flujo
 */

var llueve = true;
if (llueve) {
    console.log('Necesito una sombrilla');
}

var administrador = 'administrador';
if (administrador === 'administrador') {
    console.log('Bienvenido al sistema');
}

const MAYORIA_DE_EDAD = 18;
var edadPersona = 15;

if (edadPersona >= MAYORIA_DE_EDAD) {
    console.log('Es mayor de edad');
} else {
    console.log('Es menor de edad');
}

var semaforo = 'purpura';
if (semaforo === 'verde') {
    console.log('Arranca');
} else if (semaforo === 'Amarillo') {
    console.log('Listo?');
} else if (semaforo === 'rojo') {
    console.log('Motores apagados');
} else {
    console.log('Color no identificado');
}