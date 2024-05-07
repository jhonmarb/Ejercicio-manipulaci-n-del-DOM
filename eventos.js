console.log('eventos del DOM')

 let parrafo = document.querySelector('p')
 console.log(parrafo)

 parrafo.addEventListener('click', () => {
    console.log('me hiciste click')
 })

 parrafo.addEventListener('click',
    function (){
        console.log('me hicite click2')
    }

)

let boton = document.querySelector('button')
console.log(boton)

boton.addEventListener(
    'click',
    function alerta(){
        console.log('hiciste click pendejo')
    }
)


boton.addEventListener(
    'dblclick',
    function alerta(){
        console.log('hiciste doble click pendejo')
    }
)

boton.addEventListener(
    'mouseenter',
    function alerta(){
        console.log('entraste a la zona pendejo')
    }
)
