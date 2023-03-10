// Øke et tall med 1

let tall = 0; 

function increaseNumber() {
    tall++; 
    document.getElementById("number").innerHTML = tall;
}

function leggSammenNavn(fornavn, etternavn) {
    let fulltnavn = fornavn + " " + etternavn; 
    return fulltnavn; 
}

let mittNavn = leggSammenNavn("Stine", "Føyen"); 

console.log(mittNavn);

///////////////////////////////////////////////////// 

// REPLACE 

let text = "Jeg begynte å fortære en sandwich mens jeg kjørte taxi på vei til en quiz";

text = text.replace("æ", "ae"); 
text = text.replace("ø", "oe"); 
text = text.replace("å", "aa"); 

console.log(text);

text = text.toUpperCase(); 
text = text.toLowerCase();
text.toLocaleLowerCase();
console.log(text);