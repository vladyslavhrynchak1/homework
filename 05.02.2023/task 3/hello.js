let firstNumber = Number(prompt("write a first number"));
let secondNumber = Number(prompt("write a second number"));
let thirdNumber = Number(prompt("write a third number"));

function numberTogetherInString(...params) {
    if (firstNumber && secondNumber && thirdNumber) {
        alert (`${firstNumber}${secondNumber}${thirdNumber}`);
    } else {
        alert ("write a number!!!");
    }
    return numberTogetherInString;
}
numberTogetherInString();

