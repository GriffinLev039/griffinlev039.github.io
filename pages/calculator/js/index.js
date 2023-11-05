const grid_children = document.querySelectorAll('.grid_child');
const output = document.getElementById('OUTPUT');
const operators = document.querySelectorAll('.subop');
const equals = document.getElementById('equals');
const clear = document.getElementById('clear');

output.textContent = '';
let x = 0;
let y = 0;
let number1 = '';
let number2 = '';
let op = '';


//Creates event listeners for each number on the calculator
grid_children.forEach((grid_child) => {
    grid_child.addEventListener('click', () => {
        if (y != 0) {
            reset();
        }
        output.textContent += grid_child.id;
    });
});


//creates event listeners for the four operators
operators.forEach((suboperator) => {
    suboperator.addEventListener('click', () => {
        if (output.textContent == '') {

        } else {
            if (number1 == '') {
                number1 = output.textContent;
                op = suboperator.id;
                output.textContent = '';
            } else if (y == 2) {
                op = suboperator.id;
                output.textContent = number1;
                y = 1;
            }else {
                triggerEqualsClick();
                output.textContent = number1;
                y = 1;
                op = suboperator.id;
            }
        }
    });
});



equals.addEventListener('click', ()=> {
    number2 = output.textContent;
    if (number1 == '' | number2 == '') {
        console.log('FAILURE');
        console.log(number1 + ' + ' + number2);
    } else {
        output.textContent = operate(number1, number2, op);

    }
});

clear.addEventListener('click', ()=> {
    y = 2;
    reset();
});



//Main Logic
function operate(num1, num2, operator) {
    if (num2 == '') {
        return('ERROR');
    }
    if (operator == 'multiply') {
        x = parseInt(num1) * parseInt(num2);
        console.log('x= ' + x);
        y = 2;
        number1 = x;
        number2 = '';
        return(x);
    } else if (operator == 'add') {
        x = parseInt(num1) + parseInt(num2);
        console.log('x= ' + x);
        y = 2;
        number1 = x;
        number2 = '';
        return(x);
    } else if (operator == 'divide') {
        x = parseInt(num1) / parseInt(num2);
        console.log('x= ' + x);
        y = 2;
        number1 = x;
        number2 = '';
        return(x);
    } else if (operator == 'subtract') {
        x = parseInt(num1) - parseInt(num2);
        console.log('x= ' + x);
        y = 2;
        number1 = x;
        number2 = '';
        return(x);
    } else {
        return 'ERROR';
    }
}

//Functionality Functions

function reset() {
    output.textContent = '';
    if (y == 1) {
        y = 0;
    } else if (y == 2) {
    number1 = '';
    number2 = '';
    op = '';
    y = 0;
    }
}

function triggerEqualsClick() {
    const clickEvent = new Event('click', {
        bubbles: true,
        cancelable: true,
    });
    equals.dispatchEvent(clickEvent);
}

