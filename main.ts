// Handling button presses.
const numbers = document.querySelectorAll(".number");
const numbersArray = Array.from(numbers);
for (let i = 0; i < numbersArray.length; i++){
    numbersArray[i].addEventListener('click', () => {
        changeDisplay(`${numbersArray[i].innerHTML}`);
    })
}

// Handling displaying numbers to the screen.
let display;
if (document.querySelector("#display")!== null){
    display = document.querySelector("#display");
} else {
    throw new Error('Display does not exist (value is null)!')
}

// Make a calculation.
let disp = 0;
let memory = 0; 
let operation = null;

const calculation = document.querySelectorAll(".operation");
const calcArray = Array.from(calculation);

for (let i = 0; i < calcArray.length; i++){
    calcArray[i].addEventListener('click', () => {
        if (operation === null){
        operation = calcArray[i].innerHTML;
        memory = disp;
        disp = 0;
        resetDisplay();
        console.log(operation);
        console.log(memory);
        console.log(disp);
        } else {
            if (operation === '+'){
                const result = operate(memory)(disp)(add);
                changeDisplay(result);
                operation = null;
            }
            }
        }
    )
}

function resetDisplay (){
    display.innerHTML = 0;
}

function changeDisplay (num) {
    if (display.children.length < 10){
        const char = document.createElement('div');
        char.classList.add('disp-char');
        display.appendChild(char);
        char.innerHTML = num;
        disp += num;
    } else {
        numbers.forEach((val) =>{
            val.classList.add('disabled-button');
        })
    }
}

function add(a: number) {
    return (b: number): number => {
        return a + b;
    };
}
function subtract(a: number){
    return (b: number): number => {
        return a - b;
    };
}
function multiply(a: number){
    return (b: number): number => {
        return a * b;
    };
}
function divide(a: number){
    return (b: number): number | Error => {
        if (b === 0) {
            throw "Error: division by zero!";
        } else {
            return a / b;
        }
    };
}
function operate(a){
    return (b) => {
        return (func) => {
            return func(a)(b);
        }
    }
}