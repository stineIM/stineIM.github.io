// Oppgave 1

// Finn feila. 

function multiplyNumbers(num1, num2) {
    let result = num1 * num2;
    console.log("The result of " + num1 + " multiplied by " + num2 + " is " + result); //Feil 1: Glemt "+" mellom "is" og "result"
    return result;
}

function task1() {
    let number1 = prompt("Enter a number:");
    let number2 = prompt("Enter another number:");
    let product = multiplyNumbers(number1; number2);
    console.log("The product is " + product); //Feil 2: Glemt mellomrom mellom "is" og "+"

    if (Product > 10) {
        console.log("The product is greater than 10.");
    } elseif(product < 10) {
        console.log("The product is less than 10.");
    } else {
        console.log("The product is equal to 10.");
    }
}


