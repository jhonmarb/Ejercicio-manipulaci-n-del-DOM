// console.log('hola desde consola');

// function saludar(){
//     console.log('hola soy la primer funcion');
// };

// saludar();
// saludar();
// saludar();
// saludar();
// function saludar2(){
//     console.log(1);
//     console.log(2);
//     console.log(3);
//     console.log(4);

// }

// saludar2();
// saludar2();
// saludar2();

// function suma(){
//     let numero = 6
//     let numero2 = 20
//     let resultado = (numero + numero2)
//     console.log('esa hpt suma da ' + resultado + ' parece niño de kinder')
// }

// suma()

// function bienvenido(){
//     console.log('hola, eres bienvenido al ADSO')
//     return 'hola desde consola ADSO';
// };

// bienvenido();
// const bienve = bienvenido();
// console.log(bienve)

// //funciones con parametros


// function suma (numero1, numero2){
//     return  'otra vez, pareces estupido es suma da ' + numero1 + numero2
   
   
// }

// suma()
// const resultado = suma(5, 5)
// console.log(resultado)

// const resultado2 = suma(10, 5)
// console.log(resultado2)

// const resultado3 = suma(10, 20)
// console.log(resultado3)

// function saludar(nombre){
//     return 'hola como estas' + nombre
// }

// const saludo = saludar ('Jhom')
// console.log(saludo)

/* const anonimo = function(nombresito){
    return 'hola ' + nombresito
}

console.log(anonimo('sapo'))

const suma = (a, b) =>{
    return a + b
}

console.log(suma(3, 5))

const numeroPrimo = function (numero){
   if (numero % 2 == 0 && numero % 1 == 0){
       return `El numero ${numero} es primo`
   }else{
       return `El numero ${numero} no es primo`
   }
}

console.log(numeroPrimo(prompt("Ingrese un numero")));

function Multiplicar(numero) {
    let por = [];
    for (let i = 1; i <= 10; i++) {
      let resultado = numero * i;
      por.push(resultado);
    }
    return por;
  }
  
  let numero = parseInt(prompt("Ingresa un numero"));
  let tabla = Multiplicar(numero);
  tabla.forEach(function(resultado) {
    console.log(resultado);
  }); */

  //ejercicio1

  function sumaNumeros(numero1, numero2) {
    return numero1 + numero2
}
const numero1 = 5
const numero2 = 3
const resultado = sumaNumeros(numero1, numero2)
console.log('El resultado da ' + resultado)

//ejercicio2

const numeroPrimo = function (numero){
  if (numero % 2 == 0 && numero % 1 == 0){
      return `El numero ${numero} es primo`
  }else{
      return `El numero ${numero} no es primo`
  }
}

console.log(numeroPrimo(prompt("Ingrese un numero")));

//ejercicio3

function calcularPromedio(...numeros) {
  if (numeros.length === 0) {
      return 0
  }
  
  const suma = numeros.reduce((total, num) => total + num, 0)
  return suma / numeros.length
}

const numeros = [50, 35, 37, 40, 30]
const promedio = calcularPromedio(...numeros)
console.log(`El promedio es: ${promedio}`)

//ejercicio4

function numerospares(limite){
  let pares = []
  for (let i = 2; i <= limite; i += 2){
    pares.push(i)
  }
  return pares
}
const limite = 36
const pares = numerospares(limite)
console.log(`numeros pares hasta el ${limite}`, pares)

//ejercicio5






  





