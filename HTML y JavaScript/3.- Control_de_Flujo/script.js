let condicion = false;
let variablenum = 0;
// Para usar un condicional if en JavaScript bastaria con usar el comando:
// El if funciona como un condicional donde se ejecutara un codigo dependiendo si se cumple una condicion

if (condicion === true) {
    console.log('condicion cumplida')
};

// Para usar un condicional else en JavaScript bastaria con el comando:
// El else funciona como un condicional donde se ejecutara un codigo dependiendo si NO se cumple una condicion

if (condicion === true) {
    console.log('condicion cumplida');
} else {
    console.log('Condicion no cumplida');
};

// Para usar un condicional elif en JavaScript bastaria con el comando:
// El else if funciona como un condicional donde se ejecutara un codigo dependiendo si se cumple una condicion A o una condicion B

if (variablenum > 10) {
    console.log('condicion 1 cumplida');
} else if (variablenum === 10) {
    console.log('Condicion 2 cumplida');
} else {
    console.log('Condicion 3 Cumplida')
};


// Para usar un bucle while solo debemos usar la siguiente sintaxis:
// Un bucle while hara algo hasta que se cumpla la condicion
while (variablenum++ < 20) {
    console.log(variablenum);
}
variablenum = 0

// Para usar un bucle do while solo debemos usar la siguiente sintaxis:
// Un bucle do while hara mientras se completa la condicion
do {
    console.log(variablenum)
} while (variablenum++ < 20)

// Para usar un bucle for solo debemos usar la siguiente sintaxis:
// Un bucle for hara algo hasta que se cumpla un contador

for (let i = 0; i < 10; i++){
    console.log(i)
}

// Para usar un bucle for of solo debemos usar la siguiente sintaxis
// Un bucle for of es una forma de usar un bucle for para interactuar con los items de un array
let animales = ['Vaca', 'Gallo', 'Perro', 'Gato']
for (let animal of animales) {
    console.log(animal)
}

// Para usar un bucle for in solo debemos usar la siguiente sintaxis
// Un bucle for in es una forma de usar un bucle for para interactuar con los items de un diccionario

let persona = {
    nombre: 'Jordy',
    edad: 18,
    trabajo: null,
}

for (let prop in persona) {
    console.log(prop, persona[prop])
}

// Continue y break en bucles
// Continue reinicia el bucle sin la necesidad de llegar al comando final del mismo
// Break rompe el bucle
let i = 0;
while (true) {
    i += 1
    if (i % 2 === 0) {
        continue;
    }
    else if (i > 10) {
        break;
    }
    console.log(i);
}

// Para usar la funcion switch usamos la siguiente nomenclatura
// La funcion switch funciona como un condicional donde se ejecutara un codigo dependiendo del valor que tome una variable

let accion = 'listar';

switch (accion) {
    case 'listar':
        console.log('accion de listar');
        break;
    case 'guardar':
        console.log('accion de guardar');
        break;
    case 'imprimir':
        console.log('accion de imprimir');
        break;
    default: //Caso no definido
        console.log('accion no reconocida');
}