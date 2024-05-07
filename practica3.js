
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const sumaButton = document.getElementById('suma');
const restaButton = document.getElementById('resta');
const multiplicacionButton = document.getElementById('multiplicacion');
const divicionButton = document.getElementById('divicion');
const resultadoDisplay = document.getElementById('resultado');

function calculate(operation) {
const num1 = parseFloat(num1Input.value);
const num2 = parseFloat(num2Input.value);

let result;
switch (operation) {
case '+':
resultado = num1 + num2;
break;
case '-':
resultado = num1 - num2;
break;
case '*':
resultado = num1 * num2;
break;
case '/':
if (num2 === 0) {
} else {
    resultado = num1 / num2;
}
break;
default:

}

resultadoDisplay.textContent = resultado;
}

document.addEventListener('DOMContentLoaded', () => {});
restaButton.addEventListener('click', () => calculate('-'));
multiplicacionButton.addEventListener('click', () => calculate('*'));
divicionButton.addEventListener('click', () => calculate('/'));