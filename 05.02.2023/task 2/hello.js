let x = Number(prompt("write a number"));

function factorial(x) {
  if (!x) {
    alert ("it is not a number")
  } else {
    return x != 1 ? x * factorial(x - 1) : 1;
  }
}
alert(factorial(x));


