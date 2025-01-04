/*
* Program: calculator
* Programmer: Max You
* Date: 01/03/2025
* Description: This program creates a calculator emulator that contains the basic mathematical functions of a classic conventional calculator using techniques of DOM manipulation, objects, and array methods in javascript
 */

// ========================================================================================

// function that adds values
const add = function(x,y) {
  return x + y;
}

// function that substracts values
const substract = function(x,y) {
  return x - y;
}

// function that multiplies values
const multiply = function(x,y) {
  return x * y;
}

// function that divides values
const divide = function(x,y) {
  return x / y;
}

// function that gets the remainder of the value
const remainder = function(x, y) {
  if (y === 0) {
    return null;
  }
  else {
    return x % y;
  }
}

// function operator that takes an operator and two numbers
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

// function that updates the display after button interaction
const updateDisplay = function(e) {

  if (display.textContent.includes('0')) {
    display.textContent = '';
  }
  
  display.textContent += e;
}
 
// function that clears the calculator buffer
const clearDisplay = function(e) {
  display.textContent = 0;
}

// ========================================================================================

// create an object calculator that will hold the three variables to perform the operation
const calculator = {
  primary: '',
  operator: '',
  secondary: '',
};

// Create DOM for each button in calculator
const deleteButtons = document.querySelectorAll('.delete-buttons');
const numberButtons = document.querySelectorAll('.number-buttons');
const operatorButtons = document.querySelectorAll('.operator-buttons');
const resultButton = document.querySelector('.result-button');
const display = document.querySelector('.display');
let currDisplay = '';

// Event for when user clicks clear or delete buttons
deleteButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    // if user clicks 'clear' button
    if (event.target.id === "clear") {
      clearDisplay(event);
    }

    // if user clicks 'delete' button
      /*
       * code here 
       */
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

    console.log(`This is the calculator.primary: ${calculator.primary}`);
    console.log(`This is the calculator.secondary: ${calculator.secondary}`);
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

