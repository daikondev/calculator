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