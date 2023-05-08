
let sum = 4 + 8; 
console.log(sum); // Skriver ut 12

let diff = 9 - 6; 
console.log(diff); // Skriver ut 3

let prod = 8 * 7; 
console.log(prod); // Skriver ut 56

let kvot = 15 / 3; 
console.log(kvot); // Skriver ut 5


let children = 3; 
let adults = 10; 
let sodasPrGuest = 2; 
let amountOfSodas = children + adults * sodasPrGuest; 
console.log(amountOfSodas); // Skriver ut 24


var number1 = 10; 
var number2 = 20; 

//var sum = number1 + number2; 

console.log(sum); // skriver ut 30 

//////////////////////////////////////////////////////////////////////////////////////

var fornavn = "Anders"; 
var etternavn = "Karlsen"; 
var navn = fornavn + etternavn; 

console.log(fornavn + etternavn); // Skriver ut AndersKarlsen 

navn = fornavn + " " +  etternavn; 

console.log(navn); // Skriver ut Anders Karlsen 



//////////////////////////////////////////////////////////////////////////////////////

function displayClock() {
    const today = new Date; 
    const hours = today.getHours(); 
    const minutes = today.getMinutes(); 

    // Dersom minuttene er mindre enn 10, må me legge til ein 0 foran, slik at formatet blir mm
    if (minutes < 10) {
        minutes = "0"+minutes;
    }
    document.getElementById("clock").innerText = hours + ":" + minutes; 
}

displayClock();

/////////////////////////////////////////////////////////////////////////////////////

function changeColor() {
    document.getElementById("changeBox").style.backgroundColor = "red";
}

//////////////////////////////////////////////////////////////////////////////////////

function changeText() {
    document.getElementById("changeText").innerText = "Velkommen"; 
}

//////////////////////////////////////////////////////////////////////////////////////

function alertBox() {
    alert("Hei, dette er meldingen som kommer opp i boksen");
}

//////////////////////////////////////////////////////////////////////////////////////

function promptBox() {
    var navn = prompt("Skriv inn navnet ditt"); 
    alert("Heisann, " + navn);
    console.log("Navnet ditt er " + navn); 
}

//////////////////////////////////////////////////////////////////////////////////////

function ifElse() {
    let number1 = document.getElementById("number1").value; 
    let number2 = document.getElementById("number2").value; 
    
    if (number1 > number2) {
        alert("Talet 1 er høgare enn tal 2");

        // Nullstiller boksene
        document.getElementById("number1").value = ''; 
        document.getElementById("number2").value = '';
    }
    else if (number2 > number1) {
        alert("Talet 2 er høgare enn tal 1"); 
        
        // Nullstiller boksene
        document.getElementById("number1").value = ''; 
        document.getElementById("number2").value = '';
    }
    else if (number1 == number2) {
        alert("Tallene er like"); 

        // Nullstiller boksene
        document.getElementById("number1").value = ''; 
        document.getElementById("number2").value = '';
    }
}

//////////////////////////////////////////////////////////////////////////////////////
// MEIR IF ELSE //////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

// Sjekke om ein kan ta lappen  /////////////////////////////////////////////////////

var alderForMoped = 16;  
var alderForBil = 18; 
var userAlder = 18; 

if (userAlder >= alderForBil) {
    console.log("Du kan ta billappen"); 
}
else if (userAlder >= alderForMoped) {
    console.log("Du kan ta mopedlappen"); 
}
else {
    console.log("Du må vente med å ta lappen.");
}

////////////////////////////////////////////////////////////////////////////////////////