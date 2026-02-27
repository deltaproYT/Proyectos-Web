let a = 5;
let b = 7;
let c = 5;
//Operadores logicos

console.log(a + b)  //Suma
console.log(a - b)  //Resta
console.log(a * b)  //Multiplicación
console.log(a / b)  //División
console.log(a % b)  //Módulo
console.log(a ** b) //Potencia

// Otra forma de escribirlo
let d = 7;

console.log(d)
d += 3           //Aumenta la variable 'a' en 3
console.log(d)

console.log(d)
d -= 3           //Disminuye la variable 'a' en 3
console.log(d)

console.log(d)
d *= 3           //Multiplica la variable 'a' en 3
console.log(d)

console.log(d)
d /= 3           //Divide la variable 'a' en 3
console.log(d)

console.log(d)
d **= 3           //Potencia la variable 'a' en 3
console.log(d)

console.log(d)
d %= 3           //Calcula el modulo de la variable 'a' en 3
console.log(d)

// Incrementar y Disminuir (Solo aumenta y disminuye en 1)

console.log(++a) //primero aumenta el valor y luego lo imprime
console.log(a++) //primero imprime el valor y luego lo aumenta
console.log(a)

console.log(--a) //primero disminuye el valor y luego lo imprime
console.log(a--) //primero disminuye el valor y luego lo imprime
console.log(a) 

// Operadores de Comparación
console.log(a == c) //Retorna true
console.log(a != c) //Retorna false
console.log(a < b)  //Retorna true
console.log(a > b)  //Retorna false
console.log(a <= c) //Retorna true
console.log(a >= c) //Retorna true

// Los operadores anteriores solo verifican que los datos sean iguales, mas ignoran el tipo de dato
// Para comparar tipos de datos usamos:
console.log(a == '5')  //Retorna true
console.log(a === '5') //Retorna false

console.log(a != '5')  //Retorna false
console.log(a !== '5') //Retorna true

// Compuertas Logicas
//Las compuertas logicas trabajan exclusivamente con booleanos
// AND = &&
console.log(true && true);      //Return true
console.log(true && false);     //Return talse

// OR = ||
console.log(false || false);    //Return false
console.log(true || false);     //Return true

// NOT = !
console.log(!true);             //Return false
console.log(!false);            //Return true

// Nota: si durante el uso de compuertas logicas usamos funciones, dependiendo la compuerta logica, la funcion puede ejecutarse o no
// Ejemplo si una funcion f1 retorna false durante una comparacion f1 && f2, entonces f2 ya no sera ejecutado pues sin importar el resultado de f2, el resultado de la operacion completa sera false

// Operadores Bitwise
console.log(1 | 3) // 00000011 OR 00000001 = 00000011 = 3
console.log(8 | 7) // 00001000 OR 00000111 = 00001111 = 15

console.log(1 & 3) // 00000001 AND 00000011 = 00000001 = 1
console.log(8 & 7) // 00001000 AND 00000111 = 00000000 = 0

// Operador Ternario
let condicion = true;
let booleano = condicion == true ? 'Se cumplio la condicion' : 'No se cumplio la condicion';
console.log(booleano);

condicion = false;
booleano = condicion == true ? 'Se cumplio la condicion' : 'No se cumplio la condicion';
console.log(booleano);