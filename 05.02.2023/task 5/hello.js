let oneNumber = Number(prompt("write a number"));

function perfectNumber(...params) {
  let number = 0;

  for (let i = 1; i <= oneNumber / 2; i++) {
    if (oneNumber % i === 0) {
      number += i;
    }
  }

  if (number === oneNumber && number !== 0) {
    alert("It is a perfect number.");
  } else {
    alert("It is not a perfect number.");
  }
}

perfectNumber();
