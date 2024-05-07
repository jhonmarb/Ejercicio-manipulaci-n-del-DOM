console.log("estoy haciendo pruebas");
console.log("todo bien");

//main

let body = document.querySelector('body');
console.log('body');

let main = document.createElement('main');
console.log('main');

let header = document.createElement('header');
console.log('header');

let h4 = document.createElement('h4');
console.log('h4');

header.appendChild(h4)
titulo = document.createTextNode('Start Bootstrap')
console.log('titulo')

h4.appendChild(titulo)

let ul = document.createElement('ul')
console.log('ul')
let li = document.createElement('li')
console.log('li')
let li2 = document.createElement('li')
console.log('li2')
let li3 = document.createElement('li')
console.log('li3')
let li4 = document.createElement('li')
console.log('li4')
let li5 = document.createElement('li')
console.log('li5')

a = document.createTextNode('services')
console.log('a')
a2 = document.createTextNode('portafolio')
console.log('a2')
a3 = document.createTextNode('about')
console.log('a3')
a4 = document.createTextNode('team')
console.log('a4')
a5 = document.createTextNode('contact')
console.log('a5')


ul.append(li)
ul.append(li2)
ul.append(li3)
ul.append(li4)
ul.append(li5)

header.appendChild(ul)

li.appendChild(a)
li2.appendChild(a2)
li3.appendChild(a3)
li4.appendChild(a4)
li5.appendChild(a5)



// Article


let article = document.createElement('article');
console.log('article');

let h3 = document.createElement('h3');
console.log('h3');

article.appendChild(h3)


texto2 = document.createTextNode('Welcome To Our Studio!')
console.log('texto2')

h3.appendChild(texto2)

let h1 = document.createElement('h1');
console.log('h1');

article.appendChild(h1)


texto1 = document.createTextNode('IT IS NICE TO MEET YOU')
console.log('texto1')

h1.appendChild(texto1)

let button = document.createElement('button')
console.log('button')

article.appendChild(button)

texto3 = document.createTextNode('Tell Me More')
console.log('texto3')

button.append(texto3)

 
body.insertAdjacentElement('afterbegin', main)
main.insertAdjacentElement('afterbegin', header);
main.insertAdjacentElement('beforeend', article);

//section
let section = document.createElement('section');
console.log('section');

main.insertAdjacentElement('afterend', section)

//seccion
let section1 = document.createElement('section');
console.log('section');

section.insertAdjacentElement('afterend', section1)

//footer
let footer = document.createElement('footer');
console.log('footer');

section1.insertAdjacentElement('afterend', footer)


// estilos
main.style.cssText = 'height: 100vh; background-image: url(interior.png); background-size: cover; display: flex; flex-direction: column; align-items: center'
header.style.cssText = 'display:flex; justify-content: space-between; height: 15vh; widht: 97%; align-items: center; '
ul.style.cssText = 'display:flex; list-style:none; gap: 30px; padding: 20px; font-size: 20px; font weight:300;'


