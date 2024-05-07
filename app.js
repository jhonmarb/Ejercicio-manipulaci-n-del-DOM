let text = document.getElementById('titulo');
console.log(text);

let parrafo = document.getElementsByClassName('parrafo');
console.log(parrafo);

let item = document.getElementsByTagName('li');
console.log(item);

let nombre = document.querySelector('#titulo');
console.log(nombre);


console.log('crea nodos para html');
let texto2 = document.createElement('h2');
console.log(texto2);

let header = document.querySelector('header');
console.log(header);

header.appendChild(texto2);

let titulo = document.createTextNode('ADSO');
console.log(titulo);

texto2.appendChild(titulo);

let main = document.querySelector('main');
console.log(main);

let div = document.createElement('div');
console.log(div);

main.appendChild(div);

let h3 = document.createElement('h3');
console.log(h3);

div.appendChild(h3);

let texto = document.createTextNode('hola 1');
console.log(texto);

h3.appendChild(texto);

let p = document.createElement('p');
console.log(p);

div.appendChild(p);

let texto1 = document.createTextNode('hola adobe');
console.log(texto1);

p.appendChild(texto1);


  