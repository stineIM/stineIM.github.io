var number1 = 10; 
var number2 = 20; 

var sum = number1 + number2; 

console.log(sum); // skriver ut 30 

//////////////////////////////////////////////////////////////////////////////////////

var fornavn = "Anders"; 
var etternavn = "Karlsen"; 
var navn = fornavn + etternavn; 

console.log(fornavn + etternavn); // Skriver ut AndersKarlsen 

navn = fornavn + " " +  etternavn; 

console.log(navn); // Skriver ut Anders Karlsen 

//////////////////////////////////////////////////////////////////////////////////////

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
    var number1 = document.getElementById("number1").value; 
    var number2 = document.getElementById("number2").value; 
    
    if (number1 > number2) {
        console.log("Talet 1 er høgare enn tal 2");
    }
    else if (number2 > number1) {
        console.log("Talet 2 er høgare enn tal 1"); 
    }
    else if (number1 == number2) {
        console.log("Tallene er like"); 
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