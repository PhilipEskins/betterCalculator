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

  $("#calculate").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#num1").val());
    var number2 = parseInt($("#num2").val());
    var operationInput = $("input:radio[name=operation]:checked").val();
    //$("#addResult").text(result);

    if (operationInput==="add") {
      $("#calResult").text(add(number1, number2));
    } else if (operationInput==="sub") {
      $("#calResult").text(sub(number1, number2));
    } else if (operationInput==="mult") {
      $("#calResult").text(mult(number1, number2));
    } else if (operationInput==="div") {
      $("#calResult").text(div(number1, number2));
    } else {
      document.write("Not a valid function");
    }
  });
});
