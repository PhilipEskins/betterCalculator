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
    $("#addResult").text(result);
  });

  $("form#sub").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#sub1").val());
    var number2 = parseInt($("#sub2").val());
    var result = sub(number1, number2);
    $("#subtractResult").text(result);
  });

  $("form#mult").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#mult1").val());
    var number2 = parseInt($("#mult2").val());
    var result = mult(number1, number2);
    $("#multResult").text(result);
  });

  $("form#divi").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#divi1").val());
    var number2 = parseInt($("#divi2").val());
    var result = div(number1, number2);
    $("#diviResult").text(result);
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
