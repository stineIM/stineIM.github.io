 // Generer et tilfeldig tall mellom 1 og 100
 let numberOfGuesses = 0;
 let lastGuess = 0;
 let highest = 100; 
 let lowest = 0; 
 let targetNumber = Math.floor(Math.random() * 100) + 1;
 let secondTry = false; 
 let group1 = 0; 
 let group2 = 0; 

 document.onkeydown = function (evt) {
   var keyCode = evt ? (evt.which ? evt.which : evt.keyCode) : event.keyCode;
   if (keyCode == 13) {
     checkGuess();
   }

 }
 function checkGuess() {
   
   // Hent brukerens gjett fra input-feltet
   const guess = parseInt(document.getElementById('guess').value);
   // Sjekk om gjettet er innenfor gyldig område
   if (guess < 1 || guess > 100) {
     document.getElementById('result').textContent = 'Vennligst velg et tall mellom 1 og 100.';
     return;
   }

   numberOfGuesses++;
   document.getElementById('guesses').textContent = 'Antall forsøk: ' + numberOfGuesses; 



   if (guess) {
   }

   // Sjekk om gjettet er riktig
   if (guess === targetNumber) {
     document.getElementById('result').textContent = `Gratulerer, du gjettet tallet på ${numberOfGuesses} forsøk! \n Tallet var ${guess}`;
     document.getElementById('start').style.display = "none"; 
     document.getElementById('startOver').style.display = "block";
     document.getElementById('guess').style.display = "none";
     document.getElementById('info').style.display = "none"; 
     document.getElementById('fw1').style.display = 'block';
     document.getElementById('fw2').style.display = 'block';
     document.getElementById('fw3').style.display = 'block';
     document.getElementById('groupresults').style.display = 'block';
     document.getElementById('gr1').style.display = 'block';
     if (!secondTry) {
       document.getElementById('gr1').textContent = "Gruppe 1: " + numberOfGuesses; 
       group1 = numberOfGuesses; 
     
     }
     else {
       document.getElementById('startOver').style.display = "none"; 
       document.getElementById('gr2').textContent = "Gruppe 2: " + numberOfGuesses; 
       console.log("Gruppe1: " + group1 + "Gruppe 2: " + group2);
       group2 = numberOfGuesses; 
       
       if (group1 < group2) {
         document.getElementById("winner").textContent = "Gruppe 1 vinner!";
       }
       else if (group2 < group1) {
         document.getElementById("winner").textContent = "Gruppe 2 vinner!";
       }
       else if (group1 == group2) {
         document.getElementById("winner").textContent = "Uavgjort!";

       }
     } 
     
   } else if (guess < targetNumber) {
     document.getElementById('result').textContent = 'Høyere!';
     lowest = guess; 
   } else {
     document.getElementById('result').textContent = 'Lavere!';
     highest = guess; 
   }
   document.getElementById('guess').value = "";

   document.getElementById('info').style.display = "block";
   document.getElementById('info').textContent = 'Tallet er mellom ' + lowest + ' og ' + highest; 
 }

 function getRandomNumber() {
   targetNumber = Math.floor(Math.random() * 100) + 1
   return targetNumber; 
 }

 function startOver() {
   guess = 0; 
   highest = 100; 
   lowest = 0; 
   numberOfGuesses = 0; 
   document.getElementById('guess').style.display = "inline-block";
   document.getElementById('result').textContent = "";
   document.getElementById('startOver').style.display = "none"; 
   document.getElementById('start').style.display = "block"; 
   document.getElementById('info').textContent= ''; 
   document.getElementById('guesses').textContent = ''; 
   targetNumber = getRandomNumber();
   document.getElementById('fw1').style.display = 'none';
   document.getElementById('fw2').style.display = 'none';
   document.getElementById('fw3').style.display = 'none';
   document.getElementById("winner").textContent = "";
   
   if (secondTry) {
     document.getElementById("winner").textContent = "";
     document.getElementById("groupresults").style.display = "none";
     document.getElementById("gr1").textContent = "";
     document.getElementById("gr2").style.display = "none";
     document.getElementById('startOver').style.display = "none";
   }
   secondTry = true;
 }