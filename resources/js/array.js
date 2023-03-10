

//let skurk = document.getElementById("skurker");
////skurk.innerHTML = "Skurkene er: " + skurkene;

////let tall = document.getElementById("tall"); 

//tallene[3] = 11;

//tall.innerHTML = "Lengden på array er: " + tallene.length + "\nTallene er: " + tallene;


//////////////////////////////////////////////////////////////////////////////////////

// Array som inneholder tallverdier

let tallene = [
    20, 
    32, 
    12, 
    54, 26];

// Array som inneholder tekstverdier

let skurkene = ["Lex Luthor", "B-gjengen", "Pingvinen"]; 

// Kan også skrive det slik; 

let skurker = []; 
skurker[0] = "Lex Luthor";
skurker[1] = "B-gjengen"; 
skurker[2] = "Pingvinen"; 

let skurk = skurker[0]; // Kva blir svaret her? 

// Me kan endre verdiane i ein array

skurker[2] = "Goldfinger"; 

// Ein array er kan også kalles eit objekt 

const person = ["John", "Doe", 46]; 
let etternavn = person[1];

// Der John er fornavn, "Doe" er etternavn og 46 er alder

let person2 = {
    fornavn: "John",
    etternavn: "Doe", 
    alder: 46
}

console.log(person2.fornavn + " " + person2.etternavn);

let ansatte = [
    {fornavn: "John", etternavn: "Doe", alder: 46},
    {fornavn: "Anna", etternavn: "Smith", alder: 32},
    {fornavn: "Daniel", etternavn: "Danielsen", alder: 56}
]

console.log(ansatte[1].fornavn);