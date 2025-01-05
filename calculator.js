/*
* Program: calculator
* Programmer: Max You
* Date: 01/03/2025
* Description: This program creates a calculator emulator that contains the basic mathematical functions of a classic conventional calculator using techniques of DOM manipulation, objects, and array methods in javascript
 */

// ========================================================================================

// Function that adds values
const add = function(x,y) {
  return x + y;
}

// Function that substracts values
const substract = function(x,y) {
  return x - y;
}

// Function that multiplies values
const multiply = function(x,y) {
  return x * y;
}

// Function that divides values
const divide = function(x,y) {
  if (y === 0) {
    console.log("division by 0 is not allowed.");
    return null;
  }
  return x / y;
}

// Function that gets the remainder of the value
const remainder = function(x, y) {
  if (y === 0) {
    return null;
  }
  else {
    return x % y;
  }
}

// Function operator that takes an operator and two numbers
const operate = function(x, op, y) {
  let result = 0;
  switch(op) {
    case '+':
      result = add(x, y);
      break;
    case '-':
      result = substract(x, y);
      break;
    case '*':
      result = multiply(x, y);
      break;
    case '/':
      result = divide(x, y);
      break;
    case '%':
      result = remainder(x, y);
      break;
    default:
      console.log("Invalid operator");
  }

  return result;
}

// Function that updates the display after button interaction
const updateDisplay = function(e) {

  if (display.textContent.includes('Click Button')) {
    display.textContent = '';
  }

    display.textContent += e;  
}
 
// Function that clears the calculator buffer
const clearDisplay = function(e) {
  calculator.primary = '';
  calculator.secondary = '';
  calculator.operator = '';

  if (e.target.id === 'clear') {
    display.textContent = 'Click Button';
  }
  else if (e.target.id === '=') {
    display.textContent = '';
  }
}

// Function that deletes the last char in the calculator buffer
const deleteChar = function(e) {
  
  if (calculator.primary !== '' && calculator.operator !== '' && calculator.secondary !== '') {
    let str = calculator.secondary;
    calculator.secondary = str.slice(0, str.length - 1);
    display.textContent = '';
    let arr = [calculator.primary + calculator.operator + calculator.secondary];
    updateDisplay(arr);
    console.log(`calc.secondary after delete: ${calculator.secondary}`);
  }
  else if (calculator.primary !== '' && calculator.operator !== '' && calculator.secondary === '') {
    let str = calculator.operator;
    calculator.operator = str.slice(0, str.length - 1);
    display.textContent = '';
    let arr = [calculator.primary + calculator.operator + calculator.secondary];
    updateDisplay(arr);
    console.log(`calc.operator after delete: ${calculator.operator}`);
  }
  else if (calculator.primary !== '' && calculator.operator === '' && calculator.secondary === '') {
    let str = calculator.primary;
    calculator.primary = str.slice(0, str.length - 1);
    display.textContent = '';
    let arr = [calculator.primary + calculator.operator + calculator.secondary];
    updateDisplay(arr);
    console.log(`calc.secondary after delete: ${calculator.primary}`);
  }
}

// Function that prints the result to display
const displayResult = function(total) {
  display.textContent = '';
  calculator.primary = '';
  calculator.secondary = '';
  calculator.operator = '';
  updateDisplay(total);
}

// ========================================================================================

// Create an object calculator that will hold the three variables to perform the operation
const calculator = {
  primary: '',
  operator: '',
  secondary: '',
};

// ========================================================================================

// Create DOM for each button in calculator
const deleteButtons = document.querySelectorAll('.delete-buttons');
const numberButtons = document.querySelectorAll('.number-buttons');
const operatorButtons = document.querySelectorAll('.operator-buttons');
const resultButton = document.querySelector('.result-button');
const display = document.querySelector('.display');

// Current display variable 
let currDisplay = '';

// Event for when user clicks clear or delete buttons
deleteButtons.forEach((button) => {
  button.addEventListener('click', (event) => {

    if (event.target.id === "clear") {
      clearDisplay(event);
    }
    else if (event.target.id === "delete") {
      deleteChar(event);
    }

  });
});

// Event for when user clicks a number button
numberButtons.forEach((button) => {
  button.addEventListener('click', (event) => {

    const value = event.target.id;
    currDisplay = updateDisplay(value);

    if (calculator.operator === '') {
      calculator.primary += value;
    }
    else if (calculator.operator !== '') {
      calculator.secondary += value;
    }

    console.log(`calculator.primary: ${calculator.primary}`);
    console.log(`calculator.secondary: ${calculator.secondary}`);
});
});

// Event for when user clicks an operator button
operatorButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    
    const op = event.target.id;
    currDisplay = updateDisplay(op);

    calculator.operator = op;
    
  });
});

// Event for when user clicks on result button
resultButton.addEventListener('click', (event) => {
  const total = operate(Number(calculator.primary), calculator.operator, Number(calculator.secondary));
  clearDisplay(event);
  currDisplay = updateDisplay(total);

  calculator.primary = total;
  calculator.operator = '';
  calculator.secondary = '';
  
  console.log(`Total = ${total}`);
});
