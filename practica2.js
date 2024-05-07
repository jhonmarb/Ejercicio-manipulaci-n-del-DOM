console.log('hola')
 
let boton = document.querySelector('#boton')
console.log(boton)

boton.addEventListener('click',
 function (){
    let input = document.querySelector('input').value
    let section = document.querySelector('#resultado')
    section.innerText = 'bienvenido ' + input
 })


