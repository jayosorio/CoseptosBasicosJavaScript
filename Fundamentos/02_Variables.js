/**
 *  Variables
 * 
 * 3 formas de definir variables
 * 
 * var
 * let
 * const
 * 
 */

// Variables con VAR
var nombre = 'Yair Osorio'; // x = 2
console.log(nombre);

var edad = 31;
console.log(edad);

var persona = {
    nombre: 'Yair',
    apellido: 'Osorio',
    edad: 31,
    direccion: {
        calle: 97,
        numeroDeCasa: 'Aranjuez'
    },
    ciudadesVicitadas: [
        'Medellin',
        'Monteria',
        'Barranquilla'
    ]
}

console.log(persona);

var ciudad;
ciudad = 'Medellin'; // asignar
ciudad = 'Cali'; // redefinir
console.log(ciudad);

// variables con LET
let nombre = 'Yair';
console.log(nombre);

{
    let saludo = 'Hola soy Yair';
    console.log(saludo);
}
console.log(saludo); // let no funciona fuera de un bloque de codigo

// variables con CONST
const PI = 3.14; // se coloca el nombre en mayuscula
console.log(PI); // es unica no se puede redefinir 

var nombre = 'Yair';
var saludo = `Hola soy ${nombre};

Como estas?`;
console.log(saludo);
