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

    if(b === 0) return "You can't divide by 0";
    return a/b;
}


// console.log(add(1,2));
// console.log(subtract(1,-2));
// console.log(multiply(1,2));
// console.log(divide(1,-2));

//operate calls any of the functions above

function operate(operation, a, b) {

    if(!(typeof operation === 'function')) return "Invalid operation";
    if(!((typeof a === 'number') && (typeof b === 'number'))) return "Non-numeric input";

    return operation(a, b);
}

// console.log(operator(add, 1, 2));
// console.log(typeof add);
// console.log(operator(subtract, 2, '-1'));
// console.log(operator("fun", 2, 1));

const buttons = document.querySelectorAll('button');
const screen = document.querySelector('p');

function displayText(input) {

    console.log(typeof input);
    screen.textContent = input.join(" ");
}

function addInput(button, input) {

    //only add to input if the length is smaller than 3
    if(input.length < 3){

        if(!(button.innerHTML === "=")) input.push(button.innerHTML);
    }

    if(button.innerHTML === 'Clear') {
        
        input.length = 0;
    }
}

let input = [];

buttons.forEach((button) => button.addEventListener('click', function() {

    addInput(button, input);

    if(button.innerHTML === '=') {

        const operands = input.map((el) => (!Number.isNaN(parseInt(el)) ? 
                                        parseInt(el) : el));
        let outcome;

        //operation case
        if(operands[1] === '+') outcome = 
                                    operate(add, operands[0], operands[2]);
        else if(operands[1] === '-') outcome = 
                                        operate(subtract, operands[0], operands[2]);
        else if(operands[1] === 'x') outcome = 
                                        operate(multiply, operands[0], operands[2]);
        else if(operands[1] === '\u00F7') outcome = 
                                            operate(divide, operands[0], operands[2]);
        else outcome = 'error';

        input = [];
        input.push(outcome.toString());
        displayText(input);
    }
    displayText(input);
}));