let saltoDeLinea = '<br>';
// En esta seccion trabajaremos en conjunto HTML y JavaScript
// Para imprimir texto en la pagina usamos el comando document.write(contenido);
document.write('Hola Mundo!', saltoDeLinea)

// Para seleccionar elementos en una pagina HTML existen varias formas
// Para seleccionar por ID usaremos el siguiente comando: document.getElementById(ID del elemento)
let elementoPorID = document.getElementById('elementoH1')
document.write(elementoPorID, saltoDeLinea)

// Para seleccionar por etiqueta usaremos el siguiente comando: document.getElementByTagName(etiqueta del elemento)
let elementoPorEtiqueta = document.getElementsByTagName('p')
document.write(elementoPorEtiqueta, saltoDeLinea) // Escoge todos los elementos con dicha etiqueta en caso de querer trabajar solo con uno usaremos operadores de arrays (Ojo, no significa que dicha funcion retorna un array

// Para seleccionar un dato en formato CSS (#ID o .clase) usaremos el comando: document.querySelector(metodo de query)
let querySelectorClass = document.querySelector('.primerP')
document.write(querySelectorClass, saltoDeLinea)

let querySelectorId = document.querySelector('#elementoH1') //Para seleccionar por ID es mas recomendable usar un getElementByID
document.write(querySelectorId, saltoDeLinea)

// Para seleccionar mas de un dato en formato CSS (#ID o .clase) usaremos el comando: document.querySelectorAll(metodo de query)
let querySelectorClassAll = document.querySelectorAll('.primerP')
document.write(querySelectorClassAll)

// Para obtener y cambiar los atributos de una etiqueta usamos los comandos:

let variable = document.getElementById('elementoH1')

variable.getAttribute('type') //Con este comando obtenemos un atributo de la etiqueta

variable.setAttribute('type','range') //Con este comando asignamos o cambiamos un atributo de una etiqueta

variable.removeAttribute('type') //Con este comando eliminamos un atributo a una etiqueta

/*
Algunos posibles atributos son:

contentEditable - Solo puede tener como dato true o false y permite que el usuario sobreescriba el texto dentro de una pagina web

dir - Solo puede tomar los valores de ltr(left to right) y rtl(right to left) y permite cambiar la posicion del texto de acuerdo de como se lea

hidden - No toma en cuenta valores, desaparece la etiqueta a la que pertenece

tabindex - Permite ver el orden en el que se van a mostrar las etiquetas al acceder a ellas usando el tabulador

title - pone un texto que sale cuando uno pone el raton encima de la etiqueta

*/

// Tambien se pueden acceder a los atributos directamente si se selecciona dicha etiqueta y se pregunta individualmente

/*
.className - Retorna el nombre de la clase
.value - Retorna el valor de un input
.type - Retorna el tipo de valor en la etiqueta
.accept  Funciona con los tipo file, y permite bloquear o conceder acceso a subir solamente ciertos tipos de archivos
.form - Permite conectar un boton con un formulario (Aunque este no se encuentre dentro del mismo)
.minLength - Permite poner un limite de caracteres minimos dentro de un input
.placeholder - Permite escribir un texto dentro de un input (como determinado) pero que desaparece al escribir sobre el+
.required - Permite hacer que un input no pueda ser enviado vacio
*/

// Etiqueta Style
// La etiqueta style funciona igual que un archivo CSS solo que las propiedades se escriben utilizando puntos y en camelCase

/* 
.style.color - Cambia el color de la fuente
.style.backgroundColor - Cambia el color del fondo
.style.fontSize - Cambia el tamaño de la fuente
.style.pading - Cambia el padding
*/

// El classList permite visualizar todas las clases que esten adjuntadas a un Elemento
let h1Ejemplo = document.getElementById('ejemplo')

// classList.add permite añadir una clase a un elemento
h1Ejemplo.classList.add('claseA')
h1Ejemplo.classList.add('claseB')
h1Ejemplo.classList.add('claseC')
console.log(h1Ejemplo.classList)

// classList.remove permite eliminar una clase a un elemento
console.log(h1Ejemplo.classList)
h1Ejemplo.classList.remove('claseC')
console.log(h1Ejemplo.classList)

// classList.item permite llamar a las clases por sus indices
console.log(h1Ejemplo.classList.item(0))
console.log(h1Ejemplo.classList.item(1))

// classList.contains permite saber si un elemento posee una clase o no, retornando true si si la tiene y un false caso contrario
console.log(h1Ejemplo.classList.contains('claseA')) //Retorna True
console.log(h1Ejemplo.classList.contains('claseC')) //Retorna False

// classList.toggle elimina la clase de un elemento o la crea dependiendo de si existe o no
h1Ejemplo.classList.toggle('claseD')
console.log(h1Ejemplo.classList)

h1Ejemplo.classList.toggle('claseD')
console.log(h1Ejemplo.classList)

// classList.replace intercambia una clase por otra
h1Ejemplo.classList.replace('claseA', 'clase1')
h1Ejemplo.classList.replace('claseB', 'clase2')
console.log(h1Ejemplo.classList)


// Para ver el texto de un elemento (ignorando los styles) usaremos el comando:
console.log(h1Ejemplo.innerText) 

//Para ver el texto de un elemento usaremos el comando
console.log(h1Ejemplo.textContent)

// Para ver el HTML de un elemento usaremos el comando
console.log(h1Ejemplo.outerHTML)

// Creacion de elementos
// Para crear un elemento utilizamos:
let contenedor = document.querySelector('.contenedor')

const item = document.createElement('li') //Con este comando creamos un elemento en HTML desde JavaScript (Abrimos una etiqueta)

const textoDelItem = document.createTextNode('Este es un item de la lista') // Con este comando creamos un Nodo de texto en HTML desde JavaScript (Sin asignar )

item.appendChild(textoDelItem) // Con este comando adjuntamos el nodo de texto (hijo) dentro del nodo de elemento (padre)

contenedor.appendChild(item) // Con este comando adjuntamos el nodo de lista (hijo) dentro del nodo de div (padre) 

console.log(contenedor); // Imprimimos el nodo resultante //Resultado final del contenedor === <div class=\"contenedor\"><li>Este es un item de la lista</li></div>

// Para crear un fragmento de codigo utilizaremos el siguiende comando

contenedor = document.querySelector('.fragmento')

const fragmento = document.createDocumentFragment();

for (let i = 0; i < 20; i++) {
    const item2 = document.createElement('li')
    item2.innerHTML = 'Este es el item no [' + (i+1) + ']'
    fragmento.appendChild(item2)
}

contenedor.appendChild(fragmento)
console.log(contenedor)

// Metodos de obtencion y modificacion de childs
const divContainer = document.querySelector('.Hijos')

let primerHijo = divContainer.firstChild
console.log(primerHijo)

let ultimoHijo = divContainer.lastChild
console.log(ultimoHijo)

let primerHijoElemento = divContainer.firstElementChild
console.log(primerHijoElemento)

let ultimoHijoElemento = divContainer.lastElementChild
console.log(ultimoHijoElemento)

let soloElementosHTML = divContainer.children
console.log(soloElementosHTML)

let todosLosHijos = divContainer.childNodes
console.log(todosLosHijos[0])
console.log(todosLosHijos[1])
console.log(todosLosHijos[2])
console.log(todosLosHijos[3])
console.log(todosLosHijos[4])
console.log(todosLosHijos[5])
console.log(todosLosHijos)


// Metodos de childs
// Replace --- Reemplaza un child por otro
const parrafo = document.createElement('p')
parrafo.innerHTML = 'Hola Mundo! Este es un parrafo'
const h3Nuevo = document.createElement('h3')
h3Nuevo.innerHTML = 'H3 Nuevo'

let h2Actual = document.querySelector('.Hijos').getElementsByTagName('h3')[0]
console.log(h2Actual)

divContainer.replaceChild(h3Nuevo, h2Actual)
console.log(h2Actual)

// Remove --- Elimina un child
divContainer.removeChild(h3Nuevo)