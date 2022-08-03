//scripts for calculator application

function add(a, b) {

    return a + b;
}

function subtract(a, b) {

    return a - b;
}

function multiply(a, b) {

    return a * b;
}

function divide(a, b) {

    return a/b;
}

// console.log(add(1,2));
// console.log(subtract(1,-2));
// console.log(multiply(1,2));
// console.log(divide(1,-2));

//operate calls any of the functions above

function operator(operation, a, b) {

    if(!(typeof operation === 'function')) return "Invalid operation";
    if(!(typeof a === 'number') || !(typeof b === 'number')) return "Non-numeric input";

    return operation(a, b);
}

// console.log(operator(add, 1, 2));
// console.log(typeof add);
// console.log(operator(subtract, 2, '-1'));
// console.log(operator("fun", 2, 1));

const buttons = document.querySelectorAll('button');
const screen = document.querySelector('p');

function displayText(button) {

    if(button.innerHTML==='Clear') {

        screen.textContent = '';
    }

    else screen.textContent += button.innerHTML;
}

buttons.forEach((button) => button.addEventListener('click', function() {
    displayText(button)}));