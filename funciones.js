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
const numero2 = 6
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

const numeros = [50, 30, 37, 40, 30]
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
const limite = 20
const pares = numerospares(limite)
console.log(`numeros pares hasta el ${limite}`, pares)

//ejercicio5

function Multiplicar(numero) {
  let por = [];
  for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    por.push(resultado);
  }
  return por;
}

let numero = parseInt(prompt("Ingresa un numero"))
let tabla = Multiplicar(numero)
tabla.forEach(function(resultado) {
  console.log(resultado)
})

//ejercicio6

function numeromayor(num1, num2, num3) {
  if (num1 === num2 && num2 === num3) {
      return "Son iguales"
  } else {
      return Math.max(num1, num2, num3)
  }
}
let num1 = 30
let num2 = 20
let num3 = 10
console.log(numeromayor(num1, num2, num3))

//ejercicio7

function generar_caracteres(n, caracter) {
  let resultado = ""
  for (let i = 0; i < n; i++) {
      resultado += caracter
  }
  return resultado
}
let n = 5
let caracter = 'x'
console.log(generar_caracteres(n, caracter))

//ejercicio8

function sumanum() {
  let suma = 0
  for (let i = 1; i <= 10; i++) {
      suma += i
  }
  return suma
}
console.log(sumanum())

//ejercicio9

function nummayor() {
  let numero = 0
  while (numero <= 100) {
      numero = parseInt(prompt('ingresa un número mayor que 100:'))
  }
  return numero
}
let numeroIngresado = nummayor()
console.log("El número es: " + numeroIngresado)

//ejercicio10

function generanum() {
  let numero = 0
  while (numero !== 7) {
      numero = Math.floor(Math.random() * 10) + 1
      console.log("número dijitado: " + numero)
  }
  return numero
}
let numeroObtenido = generanum()
console.log("se obtuvo un 7 después de " + numeroObtenido + " intentos.")

//ejercicio11

function numerosPares() {
  for (let i = 0; i <= 20; i += 2) {
    console.log(i)
  }
}
numerosPares()

//ejercicio12

function pidetunumero() {
  let numero;

  do {
    numero = parseInt(prompt("Por favor, ingresa un número entre 1 y 5:"));
  } while (isNaN(numero) || numero < 1 || numero > 5);

  return numero;
}
const numingresado = pidetunumero();
console.log("El número ingresado es:", numingresado)

//ejercicio13

function fibonacci() {
  let num1 = 0
  let num2 = 1
  console.log("Los primeros 10 números de la serie de Fibonacci son:")
  console.log(num1)
  for (let i = 1; i < 10; i++) {
    console.log(num2)
    let nextNum = num1 + num2
    num1 = num2
    num2 = nextNum
  }
}
fibonacci()

//ejercicio14

function contraseña() {
  const contraseñaValida = "contra123";
  let contraseñaIngresada;
  do {
    contraseñaIngresada = prompt("ingresa tu contraseña:");
    if (contraseñaIngresada !== contraseñaValida) {
      alert("Contraseña incorrecta.intenta nuevamente.");
    }
  } while (contraseñaIngresada !== contraseñaValida);
  alert("¡Contraseña válida! Acceso concedido.");
}
contraseña();

//ejercicio15

function esPrimo(numero) {
  if (numero <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}
function imprimirprimos() {
  let cantidadPrimosEncontrados = 0;
  let numeroActual = 2;
  console.log("Los primeros 5 números primos son:");
  while (cantidadPrimosEncontrados < 5) {
    if (esPrimo(numeroActual)) {
      console.log(numeroActual);
      cantidadPrimosEncontrados++;
    }
    numeroActual++;
  }
}
imprimirprimos()

//ejercicio16

function numpositivo() {
  let numero;
  do {
    numero = parseInt(prompt(" ingresa un número positivo:"));
    if (isNaN(numero) || numero <= 0) {
      alert("Error: no es positivo");
    }
  } while (isNaN(numero) || numero <= 0);
  return numero;
}
const numeringresado = numpositivo();
console.log("El número positivo es:", numeringresado)

//ejercicio17

function imprimirNumeros() {
  for (let i = 10; i >= 1; i--) {
    console.log(i)
  }
}
imprimirNumeros()

//ejercicio18

function factorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  } else {
    let resultado = 1;
    for (let i = 2; i <= numero; i++) {
      resultado *= i;
    }
    return resultado;
  }
}

const number = 5;
console.log("El factorial de " + numero + " es: " + factorial(number));

//ejercicio19

function esPrimo(numero) {
  if (numero <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}
function imprimirPrimos() {
  let contador = 0;
  let numero = 2;
  while (contador < 5) {
    if (esPrimo(numero)) {
      console.log(numero);
      contador++;
    }
    numero++;
  }
}
imprimirPrimos();

//ejercicio20

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
fizzBuzz()

//ejercicio21

function imprimirDescendente() {
  for (let i = 10; i >= 1; i--) {
    console.log(i);
  }
}
imprimirDescendente()

//ejercicio22

function fibonacci() {
  let num1 = 0;
  let num2 = 1;
  console.log(num1);
  console.log(num2);
  for (let i = 2; i < 10; i++) {
    let siguiente = num1 + num2;
    console.log(siguiente);
    num1 = num2;
    num2 = siguiente;
  }
}
fibonacci()




  





