const buttons = document.querySelectorAll(".number");
const buttonArray = Array.from(buttons);
for (let i = 0; i < buttonArray.length; i++){
    buttonArray[i].addEventListener('click', () => {
        console.log(`${buttonArray[i].innerText}`);
        changeDisplay(`${buttonArray[i].innerText}`);
    })
}

const display = document.querySelector(".display");


function add(a) {
    return (b) => {
        return a + b;
    };
}
function subtract(a){
    return (b) => {
        return a - b;
    };
}
function multiply(a){
    return (b) => {
        return a * b;
    };
}
function divide(a){
    return (b) => {
        if (b === 0) {
            return "Error: division by zero!";
        } else {
            return a / b;
        }
    };
}
function operate(a){
    return (b) => {
        return (func) =>{
            return func(a)(b);
        };
    };
}
//TODO: change displaying functionality so that it can do multiple digits.
function changeDisplay (num) {
    display.innerText = num;
}