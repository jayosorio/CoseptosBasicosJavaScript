/**
 *  Operadores
 */

/**
 *  Operadores de asignacion
 */

// Operador de asignacion

var x = 23;
var y = true;

// oprador de asignacion de adicion ( += )
var x = 23;
var y = 32;
x += y; // x = x + y
console.log(x);

// operador de asignacion de resta ( -= )
var x = 45;
var y = 78; 
x -= y; // x = x - y
console.log(x);

// operador de asignacion de multiplicacion ( *= )
var x = 45;
var y = 78;
x *= y; // x = x * y
console.log(x);

// operador de asignacion de divicion ( /= )
var x = 45;
var y = 78;
x /= y; //x = x / y
console.log(x);

// operador de asignacion de residuo ( %= )
var x = 45;
var y = 78;
x %= y; // x = x % y
console.log(x);

// operador de asignacion de exponenciacion ( **= )
var x = 45;
var y = 78;
x **= y; // x = x ** y
console.log(x);

/**
 * Operadores de comparacion
 */

// Operador igual ( == )
console.log(3 == 3);
console.log(3 == '3');

// Operador no es igual ( != )
console.log(3 != 3);

// Operador estrictamente igual ( === )
console.log(3 === 3);
console.log(3 === '3');

// Operador de desigualdad estricta ( !== )
console.log(3 !== '3');
console.log(3 != '3');

// Operadores ( >, >=, <, <= )
console.log(3 > 4);
console.log(3 >= 4);
console.log(3 < 4);
console.log(3 <= 4);

/**
 *  Operadores aritmeticos
 * 
 * +,-,*,/,%,**
 */

console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 / 2);
console.log(2 % 2);
console.log(2 ** 2);

// Operadores de incremento ( ++ )
var numero = 0;
// console.log(++numero);
console.log(numero++);
console.log(numero);

// Operador de decremento ( -- )
var numero = 3;
// console.log(--numero);
console.log(numero--);
console.log(numero);

/**
 *  Operadores logicos
 */

// AND
console.log(true && true);
console.log(2 > 3 && 1 <= 2);

// OR
console.log(true || true);
console.log(true || false);
console.log(false || false);

// NOT
console.log(!true);
console.log(!false);

//Operador de cadena o concatenacion ( + )
var nombre = 'Yair';
var apellido = 'Osorio';
var nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto);

// Operador condicional ( condicion ? valor1 : valor2 )
console.log(2 > 3 ? 'Es mayor' : 'Es menor');

// Operadores de desestructuracion

var persona = {
    nombre: "Yair",
    apellido: "Osorio"
}
var { nombre:xyz, apellido } = persona; // se le puede cambiar el nombre de esta forma nombre:
console.log(xyz);
console.log(apellido);
console.log(persona);

// Desestructuracion de arreglos
var arreglo = [ 1,2,3,4,5 ];

var [uno, dos] = arreglo;
console.log(uno);
console.log(dos);

/**
 * Operador de miembro o acceso de propiedad
 */
// Notacion punto
var persona = {
    nombre: "Yair",
    apellido: "Osorio"
}
console.log(persona.nombre);
console.log(persona.apellido);

// Notaion por corchetes
var persona = {
    nombre: "Yair",
    apellido: "Osorio"
}
console.log(persona["nombre"]);
console.log(persona["apellido"]);

// Notacion por corchetes en rreglos
var arreglo = [30,26,6,1]
console.log(arreglo[0]);

// Operacio de determinacion de tipo ( typeof )
console.log(typeof "yair");
console.log(typeof 30);
console.log(typeof true);


/**
 * Solucion de ejercicios
 */
// 1. Escribir un programa que calcule el número de segundos que existen en un día.
var segundosMinuto = 60;
var minutosHora = 60;
var horasDia = 24;

var segundosDia = (segundosMinuto * minutosHora) * horasDia;
console.log(segundosDia);

// 2. Realiza un programa que a partir de los valores ancho=2 y alto=5,calcule el área de un rectángulo.
var ancho = 2;
var alto = 5;
var area = ancho * alto;

console.log(area);

// 3. Hacer un conversor de grados centígrados a grados Fahrenheit.
var gradosCentigrados = 20;
var gradosFahrenheit = (gradosCentigrados * 9/5) + 32;

console.log(gradosFahrenheit);
