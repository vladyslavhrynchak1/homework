let firstNumber = Number(prompt ("write the first number"));
let secondNumber = Number(prompt ("write the second number"));

function comparisonNumber(...params) {
    if (firstNumber < secondNumber) {
        alert(-1);
    }
    else if (firstNumber > secondNumber) {
        alert(1);
    }
    else if (firstNumber == secondNumber) {
        alert(0);
    } 
    else {
        alert ("You must write numbers!!!");
    }
    return comparisonNumber;
}
comparisonNumber();