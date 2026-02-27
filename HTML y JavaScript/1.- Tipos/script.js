// Para escribir en la consola usamos el comando: console.log;
console.log('Hola Mundo!');

// Para concatenar dentro de un console.log podemos utilizar una coma
console.log('Hola Mundo!', 'Adios Mundo!')

// Para la declaracion utilizamos el comando: let [Nombre de variable] = [Dato];
let variableString = 'Hola Mundo!';
let variableInt = 10;
let variableBool = true;
let variableNull = null;
let variableVacia;

// Nota: Tambien se pueden usar como datos operaciones
let variableSuma = 7 + 3;

// Para el cambio de dato de una variable solo basta con invocarla y cambiar su valor
variableString = 'Adios Mundo!';
variableInt = 20;
variableBool = false;
variableNull = 'Ahora tiene algo XD';
variableVacia = 'Ahora tiene algo tambien XD';

// Nota: tambien se pueden usar operaciones como dato
variableSuma = variableSuma - 7;

// Si queremos realizar una creacion de una variable con un dato constante, utilizaremos: const [nombre de la constante] = [Dato];
const constante = 'Esto es una constante';
// constante = 'Cambio!!!'; //Esto genera un error

// Si queremos imprimir el tipo de una variable bastaria con usar un: console.log(typeof [Variable])
console.log(typeof variableString);
console.log(typeof variableInt);
console.log(typeof variableBool);

// Para crear un objeto (diccionario) lo declaramos dentro de una variable 
let Objeto = {
    caracteristicas: 'Caracteristica A',
    nombre: 'nombredelobjeto',
}; //Los diccionarios utilizan las {} para el almacenaje de sus datos

console.log(Objeto);

// Para poder interactuar con los datos dentro de un objeto podrian usarse los siguientes comandos:

// Impresión
console.log(Objeto.nombre);
console.log(Objeto['caracteristicas']);

// Cambio de dato
Objeto.nombre = 'otroNombre';
Objeto['caracteristicas'] = 'Caracteristica B';

console.log(Objeto)

// Para poder borrar un dato dentro del diccionario se utiliza: delete [Dato]
delete Objeto.nombre;
console.log(Objeto)

// Para poder crear un array lo declaramos dentro de una variable:
let Arreglo = ['Item1', 'Item2', 'Item3'] //Las listas o arreglos utilizan [] para el almacejane de sus datos
console.log(Arreglo)

// Para acceder a los elementos de un array utilizaremos: [arreglo][[posicion]] 
// Recordar que las posiciones comienzan de izquierda a derecha empezando por el cero por ejemplo para llamar al primer elemento utilizamos el indice 0
console.log(Arreglo[0])

// Usaremos la misma nomenclatura para editar valores o cambiar valores

Arreglo[3] = 'Item4'
Arreglo[2] = 'itemEspecial'
Arreglo[6] = 'Item7' //Nota: si pones un indice bastante alejado del indice mayor, los datos que no hayas declarado se reemplazaran por espacios vacios

console.log(Arreglo)

// Para realizar funciones en javascript utilizamos: function [nombre de la funcion]() {}
function saludar() {
    console.log('Hola Mundo!')
}

// Para llamar a la funcion solo ponemos su nombre
saludar()

// Tambien podemos realizar operaciones dentro de una funcion utilizando: return [operacion o variable]
// Usando el return la funcion pasa a ser un resultado con el que podemos usar de dato de una variable

function sumar2Numeros() {
    return 2+2
}

let resultadoFuncion = sumar2Numeros()
console.log(resultadoFuncion)

// Para poner argumetos en la funcion solo basta con escribirlo dentro de los parentesis de la misma

function sumaDeDosNumeros(a,b){
    return a + b
}

console.log(sumaDeDosNumeros(3, 5)) //Imprime el resultado de 3+5 = 8

// Para saber los argumentos que estamos utilizando para lafuncion bastaria con utilizar un: arguments
function multiplicacion(a, b){
    console.log(arguments)
    return a*b
}

console.log(multiplicacion(7,4,2,7,9))