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
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);
    $(".output").text(result);
  });
});

/*if (operation==="add") {
  document.write("Your total is " + add(number1, number2));
} else if (operation==="sub") {
  document.write("Your total is " + sub(number1, number2));
} else if (operation==="mult") {
  document.write("Your total is " + mult(number1, number2));
} else if (operation==="div") {
  document.write("Your total is " + div(number1, number2));
} else {
  document.write("Not a valid function");
}*/
