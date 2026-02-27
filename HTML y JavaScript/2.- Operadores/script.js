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
