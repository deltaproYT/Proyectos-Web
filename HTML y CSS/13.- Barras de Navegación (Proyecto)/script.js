function toggleMenu() {
    // alert('El boton funciona')
    let largo = document.getElementsByClassName('navegacion')
    for(let i = 0; i < largo.length; i++)
        largo[i].classList.toggle('visible')
}