// Handling button presses.
var numbers = document.querySelectorAll(".number");
var numbersArray = Array.from(numbers);
var _loop_1 = function (i) {
    numbersArray[i].addEventListener('click', function () {
        changeDisplay("".concat(numbersArray[i].innerHTML));
    });
};
for (var i = 0; i < numbersArray.length; i++) {
    _loop_1(i);
}
// Handling displaying numbers to the screen.
var display;
if (document.querySelector("#display") !== null) {
    display = document.querySelector("#display");
}
else {
    throw new Error('Display does not exist (value is null)!');
}
// Make a calculation.
var disp = 0;
var memory = 0;
var operation = null;
var calculation = document.querySelectorAll(".operation");
var calcArray = Array.from(calculation);
var _loop_2 = function (i) {
    calcArray[i].addEventListener('click', function () {
        if (operation === null) {
            operation = calcArray[i].innerHTML;
            memory = disp;
            disp = 0;
            resetDisplay();
            console.log(operation);
            console.log(memory);
            console.log(disp);
        }
        else {
            if (operation === '+') {
                var result = operate(memory)(disp)(add);
                changeDisplay(result);
                operation = null;
            }
        }
    });
};
for (var i = 0; i < calcArray.length; i++) {
    _loop_2(i);
}
function resetDisplay() {
    display.innerHTML = 0;
}
function changeDisplay(num) {
    if (display.children.length < 10) {
        var char = document.createElement('div');
        char.classList.add('disp-char');
        display.appendChild(char);
        char.innerHTML = num;
        disp += num;
    }
    else {
        numbers.forEach(function (val) {
            val.classList.add('disabled-button');
        });
    }
}
function add(a) {
    return function (b) {
        return a + b;
    };
}
function subtract(a) {
    return function (b) {
        return a - b;
    };
}
function multiply(a) {
    return function (b) {
        return a * b;
    };
}
function divide(a) {
    return function (b) {
        if (b === 0) {
            throw "Error: division by zero!";
        }
        else {
            return a / b;
        }
    };
}
function operate(a) {
    return function (b) {
        return function (func) {
            return func(a)(b);
        };
    };
}
