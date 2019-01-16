/*var number1 = parseInt(prompt("What is the first number?"));
var number2 = parseInt(prompt("What is the second number?"));
var operation = prompt("What would you like to do?")*/

function add(n1, n2) {
  return n1 + n2;
}

function sub(n1, n2) {
  return n1 - n2;
}

function mult(n1, n2) {
  return n1 * n2;
}

function div(n1, n2) {
  return n1 / n2;
}

$(document).ready(function() {

  $("form#calculate").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#num1").val());
    var number2 = parseInt($("#num2").val());
    var operationInput = $("input:radio[name=operation]:checked").val();

    if (operationInput==="add") {
      document.write("Your total is " + add(number1, number2));
    } else if (operationInput==="sub") {
      document.write("Your total is " + sub(number1, number2));
    } else if (operationInput==="mult") {
      document.write("Your total is " + mult(number1, number2));
    } else if (operationInput==="div") {
      document.write("Your total is " + div(number1, number2));
    } else {
      document.write("Not a valid function");
    }
  });
});
