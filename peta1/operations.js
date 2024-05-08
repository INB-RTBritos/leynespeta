var result;
var num1;
var num2;

function AddFunction() {
  num1 = document.getElementById("number1").valueAsNumber;
  num2 = document.getElementById("number2").valueAsNumber;
  result = num1 + num2;
  document.getElementById("addition").value = result;
}

function SubtractFunction() {
  num1 = document.getElementById("number1").valueAsNumber;
  num2 = document.getElementById("number2").valueAsNumber;
  result = num1 - num2;
  document.getElementById("subtraction").value = result;
}

function MultiplicationFunction() {
  num1 = document.getElementById("number1").valueAsNumber;
  num2 = document.getElementById("number2").valueAsNumber;
  result = num1 * num2;
  document.getElementById("multiplication").value = result;
}

function DivisionFunction() {
  num1 = document.getElementById("number1").valueAsNumber;
  num2 = document.getElementById("number2").valueAsNumber;
  result = num1 / num2;
  document.getElementById("div").value = result;
}
