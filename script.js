const screenValue = document.querySelector('.calculator-input');
const buttonValue = document.querySelectorAll('button');

const defaultValue = '0';
var operator = null;
var firstNumber = null;

getDefaultValue();

function getDefaultValue() {
    screenValue.value = defaultValue;
} 

buttonValue.forEach(element => {
    element.addEventListener('click', function() {
        switch(element.classList[0]) {
            case 'operator': 
                operator = element.value;
                firstNumber = Number(screenValue.value);
                screenValue.value = defaultValue;
                break;
            case 'decimal': 
                decimalControl();
                break;
            case 'clear': 
                clearScreen();
                break;
            case 'equal-sign':
                calculate(firstNumber, screenValue, operator);
                break;
            case 'number':
                readNumber(element);
                break;
        }
    })
});

function calculate(firstNumber, screenValue, operator) {
    if ( !(operator == null) ) {
        var result = null;
        switch(operator) {
            case '+':
                result = firstNumber + Number(screenValue.value);
                break;
            case '-':
                result = firstNumber - Number(screenValue.value);
                break;
            case '*':
                result = firstNumber * Number(screenValue.value);
                break;
            case '/':
                result = firstNumber / Number(screenValue.value);
                break;
        }
        screenValue.value = result;
    }
}

function decimalControl() {
    if ( !(screenValue.value.includes('.')) ) {
        screenValue.value = screenValue.value + '.';
    }
}

function clearScreen() {
    screenValue.value = '0';
}

function readNumber(element) {
    if(screenValue.value === '0') {
        screenValue.value = element.value;
    }
    else {
        screenValue.value = screenValue.value + element.value;
    }
}