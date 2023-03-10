//----------- STRINGS --------------------// 

let text = "Hello World. This is not jello. Hello again."; 

//console.log(text.length);

text = text.toUpperCase(); // Gjer om til store bokstavar

text = text.toLowerCase(); // Gjer om til små bokstavar 

text = text.replace("ello", "i"); // Erstattar ord/bokstavar 

text = text.split()

// console.log(text);

//----------- ARRAYS ---------------------// 

let sjokolader = ["Kvikk lunsj", "Snickers", "Japp"];

//console.log(sjokolader.length); // 3 
//console.log(sjokolader[0]); // Kvikk lunsj 

sjokolader[0] = "Lion"; 

//console.log(sjokolader[0]);

sjokolader = sjokolader.sort(); 

for (let i = 0; i < sjokolader.length; i++) { // i = 0, i = 1 og i = 2
    console.log(sjokolader[i]);
}

//----------- OBJEKTER -------------------// 

