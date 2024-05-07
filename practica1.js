console.log('trabajando')

let coloramarillo = document.querySelector('#coloramarillo')
console.log (coloramarillo)

coloramarillo.addEventListener('click', 
    function mensaje(){
        console.log ('busco el color amarillo')
        document.body.style.backgroundColor = 'yellow'

    }
)

let colorazul = document.querySelector('#colorazul')
console.log (colorazul)

colorazul.addEventListener('click', 
    function mensaje(){
        console.log ('busco el color azul')
        document.body.style.backgroundColor = 'blue'

    }
)

let colorrojo = document.querySelector('#colorrojo')
console.log (colorrojo)

colorrojo.addEventListener('click', 
    function mensaje(){
        console.log ('busco el color rojo')
        document.body.style.backgroundColor = 'red'

    }
)

//

let cuadro = document.querySelector('.cuadro')
console.log(cuadro)
let amarillo = document.querySelector('#amarillo')
console.log (amarillo)

amarillo.addEventListener('click', 
    function mensaje(){
        console.log ('busco el color amarillo')
        cuadro.style.backgroundColor = 'yellow'

    }
)

let azul = document.querySelector('#azul')
console.log (azul)

azul.addEventListener('click', 
    function mensaje(){
        console.log ('busco el color azul')
        cuadro.style.backgroundColor = 'blue'

    }
)

let rojo = document.querySelector('#rojo')
console.log (rojo)

rojo.addEventListener('click', 
    function mensaje(){
        console.log ('busco el color rojo')
        cuadro.style.backgroundColor = 'red'

    }
)

let gris = document.querySelector('#gris')
console.log (gris)

gris.addEventListener('click', 
    function mensaje(){
        console.log ('busco el color gris')
        cuadro.style.backgroundColor = 'gray'

    }
)

let sincolor = document.querySelector('#sincolor')
console.log (sincolor)

sincolor.addEventListener('click', 
    function mensaje(){
        console.log ('busco el sin color')
        cuadro.style.backgroundColor = 'transparent'

    }
)



 






   