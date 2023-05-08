let usrNumber = 3; 
let compNumber = 10; 

if(usrNumber == compNumber) {
    console.log("usrNumber er lik compNumber"); 
}
else if (usrNumber > compNumber) {
    console.log("usrNumber er høgare enn compNumber"); 
}

else {
    console.log("usrNumber er ikkje lik compNumber"); 
}

let header = document.getElementById("header");
let date = new Date(); // Henter inn dato og kva klokka er no
let hours = date.getHours(); // Henter inn 

if (time >= 5 && time < 10) {
    header.innerText = "God morgen"; 
} else 
if (time >= 10 && time < 15) {  
    header.innerText = "God dag"; 
} else 
if (time >= 15 && time < 18) {
    header.innerText = "God ettermiddag"; 
} else 
if (time >= 18) {
    header.innerText = "God kveld"; 
} else 
if (time < 5) {
    header.innerText = "God natt"; 
}  


// Enkel linje

/* 
    == (lik)
    != (ikkje lik)
    > (større enn)
    < (mindre enn)
    >= (større enn eller er lik)
    <= (mindre enn eller er lik)

*/ 
/* 
let alder = 17; // alder til bruker
let bilAlder = 18; 
let mopedAlder = 16; 

// Sjekke om bruker er gammel nok til å få billappen
if (alder >= mopedAlder) {
    console.log("du er gammal nok til å få mopedlappen.");
}
else if (alder >= bilAlder) {
    console.log("Du er gammel nok til å få billappen");
}
else if (alder < bilAlder) {
    console.log("du er ikkje gammal nok til å få billappen.");
}
*/ 
///////////////////////////////////////////////////////////////////

for(let i=0; i < 10; i++) {
    console.log(i);
    for (let j=0; j < 10; j++) {
        console.log(j); 
    }
}
