// Para escribir en la consola usamos el comando console.log;
console.log('Hola Mundo!');

// Para la declaracion utilizamos el comando let [Nombre de variable] = [Dato];
let variableString = 'Hola Mundo!';
let variableInt = 10;
let variableBool = true;
let variableNull = null;
let variableVacia;

// Para el cambio de dato de una variable solo basta con invocarla y cambiar su valor
variableString = 'Adios Mundo!';
variableInt = 20;
variableBool = false;
variableNull = 'Ahora tiene algo XD';
variableVacia = 'Ahora tiene algo tambien XD';

// Si queremos realizar una creacion de una variable con un dato constante, utilizaremos const [nombre de la constante] = [Dato];
const constante = 'Esto es una constante';
// constante = 'Cambio!!!'; //Esto genera un error

// Si queremos imprimir el tipo de una variable bastaria con usar un console.log(typeof [Variable])
console.log(typeof variableString);
console.log(typeof variableInt);
console.log(typeof variableBool);

// Para crear un objeto (diccionario) lo declaramos dentro de una variable 
let Objeto = {
    caracteristicas: 'Caracteristica A',
    nombre: 'nombredelobjeto',
};

console.log(Objeto);

// Para poder interactuar con los datos dentro de un objeto podrian usarse los siguientes comandos 

// Impresión
console.log(Objeto.nombre);
console.log(Objeto['caracteristicas']);

// Cambio de dato
Objeto.nombre = 'otroNombre';
Objeto['caracteristicas'] = 'Caracteristica B';

console.log(Objeto)

// Para poder borrar un dato dentro del diccionario se utiliza delete [Dato]
delete Objeto.nombre;
console.log(Objeto)