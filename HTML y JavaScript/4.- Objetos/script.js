const diccionario1 = {
    id: 1,
    name: 'Jordy',
    age: 18,
}
console.log(diccionario1)

// Cuando declaramos un diccionario o array constante, no podra cambiarse por ningun motivo el tipo, pero el contenido si
diccionario1.correo = 'gmaildejordy@gmail.com'
diccionario1.telefono = '1022935819'

console.log(diccionario1)

delete diccionario1.correo
delete diccionario1.telefono

console.log(diccionario1)

// Si queremos que el diccionario no pueda agregar mas caracteristicas pero si pueda editar las existentes utilizaremos el atributo .seal

const diccionario2 = Object.seal({
    id: 1,
    name: 'Jordy',
    age: 18,
})

diccionario2.id = 2; //Cambia el valor correctamente
console.log(diccionario2)

diccionario2.correo = 'Correopersona2@gmail.com' //No hace nada
console.log(diccionario2)

//Si queremos que el diccionario no pueda ser cambiado de ninguna manera utilizamos el atributo .freeze

const diccionario3 = Object.freeze({
    id: 1,
    name: 'Jordy',
    age: 18,
})

diccionario3.age = 21;                          //No cambia nada
diccionario3.mail = 'correopersona3@gmail.com'; //No cambia nada
console.log(diccionario3)
